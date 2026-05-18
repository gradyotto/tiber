import { useState } from "react";
import { Upload, X, FileText } from "lucide-react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const Quote = () => {
  const [files, setFiles] = useState<File[]>([]);
  const [dragActive, setDragActive] = useState(false);

  const handleDrag = (e: React.DragEvent) => {
    e.preventDefault();
    e.stopPropagation();
    if (e.type === "dragenter" || e.type === "dragover") {
      setDragActive(true);
    } else if (e.type === "dragleave") {
      setDragActive(false);
    }
  };

  const handleDrop = (e: React.DragEvent) => {
    e.preventDefault();
    e.stopPropagation();
    setDragActive(false);
    if (e.dataTransfer.files && e.dataTransfer.files[0]) {
      const newFiles = Array.from(e.dataTransfer.files);
      setFiles((prev) => [...prev, ...newFiles]);
    }
  };

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files[0]) {
      const newFiles = Array.from(e.target.files);
      setFiles((prev) => [...prev, ...newFiles]);
    }
  };

  const removeFile = (index: number) => {
    setFiles((prev) => prev.filter((_, i) => i !== index));
  };

  const handleSubmit = () => {
    // Placeholder for quote submission
    console.log("Submitting files for quote:", files);
  };

  return (
    <main className="min-h-screen bg-background">
      {/* Noise overlay */}
      <div className="noise-overlay" />

      <Navbar />

      {/* Hero Section */}
      <section className="pt-32 pb-16 px-6 border-b border-ghost">
        <div className="max-w-4xl mx-auto">
          <span className="font-mono text-xs text-flag-red uppercase tracking-wider">
            // GET A QUOTE
          </span>
          <h1 className="font-sans font-black text-4xl md:text-6xl lg:text-7xl tracking-tighter text-foreground uppercase mt-4 leading-[0.9]">
            UPLOAD YOUR<br />
            CAD FILES
          </h1>
          <p className="font-mono text-sm text-muted-foreground mt-6 max-w-xl">
            Drop your STL, STEP, or IGES files below. Our algorithmic quoting 
            system will analyze your parts and deliver instant pricing.
          </p>
        </div>
      </section>

      {/* Upload Section */}
      <section className="py-16 px-6">
        <div className="max-w-4xl mx-auto">
          {/* Drop Zone */}
          <div
            className={`border-2 border-dashed transition-colors ${
              dragActive ? "border-flag-red bg-flag-red/5" : "border-ghost"
            } p-12 text-center`}
            onDragEnter={handleDrag}
            onDragLeave={handleDrag}
            onDragOver={handleDrag}
            onDrop={handleDrop}
          >
            <input
              type="file"
              id="file-upload"
              className="hidden"
              multiple
              accept=".stl,.step,.stp,.iges,.igs,.obj,.3mf"
              onChange={handleFileChange}
            />
            <label
              htmlFor="file-upload"
              className="cursor-pointer flex flex-col items-center"
            >
              <div className="w-16 h-16 border border-ghost flex items-center justify-center mb-6">
                <Upload className="w-8 h-8 text-muted-foreground" />
              </div>
              <span className="font-mono text-sm text-foreground">
                DROP FILES HERE
              </span>
              <span className="font-mono text-xs text-muted-foreground mt-2">
                or click to browse
              </span>
              <span className="font-mono text-xs text-muted-foreground mt-4">
                Supported: STL, STEP, IGES, OBJ, 3MF
              </span>
            </label>
          </div>

          {/* File List */}
          {files.length > 0 && (
            <div className="mt-8 border border-ghost">
              <div className="border-b border-ghost px-4 py-3">
                <span className="font-mono text-xs text-muted-foreground uppercase tracking-wider">
                  UPLOADED FILES ({files.length})
                </span>
              </div>
              <div className="divide-y divide-ghost">
                {files.map((file, index) => (
                  <div
                    key={index}
                    className="flex items-center justify-between px-4 py-3 hover:bg-ghost/20 transition-colors"
                  >
                    <div className="flex items-center gap-3">
                      <FileText className="w-4 h-4 text-flag-red" />
                      <span className="font-mono text-sm text-foreground">
                        {file.name}
                      </span>
                      <span className="font-mono text-xs text-muted-foreground">
                        ({(file.size / 1024).toFixed(1)} KB)
                      </span>
                    </div>
                    <button
                      onClick={() => removeFile(index)}
                      className="p-1 hover:bg-ghost transition-colors"
                    >
                      <X className="w-4 h-4 text-muted-foreground hover:text-foreground" />
                    </button>
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* Submit Button */}
          <div className="mt-8">
            <button
              onClick={handleSubmit}
              disabled={files.length === 0}
              className={`w-full border px-8 py-5 transition-all ${
                files.length > 0
                  ? "border-flag-red bg-flag-red text-cream hover:bg-flag-red/90 cursor-pointer"
                  : "border-ghost bg-ghost/20 text-muted-foreground cursor-not-allowed"
              }`}
            >
              <span className="font-mono text-sm uppercase tracking-wider font-bold">
                [ GET INSTANT QUOTE ]
              </span>
            </button>
            {files.length === 0 && (
              <p className="font-mono text-xs text-muted-foreground text-center mt-3">
                Upload at least one file to continue
              </p>
            )}
          </div>

          {/* Info Grid */}
          <div className="mt-16 grid md:grid-cols-3 gap-4">
            <div className="border border-ghost p-6">
              <span className="font-mono text-2xl font-bold text-flag-red">01</span>
              <h3 className="font-sans font-black text-sm uppercase mt-2 text-foreground">
                UPLOAD
              </h3>
              <p className="font-mono text-xs text-muted-foreground mt-2">
                Drop your CAD files in any standard format
              </p>
            </div>
            <div className="border border-ghost p-6">
              <span className="font-mono text-2xl font-bold text-flag-red">02</span>
              <h3 className="font-sans font-black text-sm uppercase mt-2 text-foreground">
                ANALYZE
              </h3>
              <p className="font-mono text-xs text-muted-foreground mt-2">
                Our algorithm calculates material, time, and cost
              </p>
            </div>
            <div className="border border-ghost p-6">
              <span className="font-mono text-2xl font-bold text-flag-red">03</span>
              <h3 className="font-sans font-black text-sm uppercase mt-2 text-foreground">
                QUOTE
              </h3>
              <p className="font-mono text-xs text-muted-foreground mt-2">
                Receive instant pricing. Zero friction.
              </p>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
};

export default Quote;
