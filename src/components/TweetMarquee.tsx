import tweet1 from "@/assets/tweet-1.png";
import tweet2 from "@/assets/tweet-2.png";
import tweet3 from "@/assets/tweet-3.png";
import tweet4 from "@/assets/tweet-4.png";

const tweets = [
  { src: tweet1, alt: "Tweet by Chris Power" },
  { src: tweet2, alt: "Tweet by Zane Hengsperger" },
  { src: tweet3, alt: "Tweet by George Munguia" },
  { src: tweet4, alt: "Tweet by Aaron Slodov" },
];

const TweetMarquee = () => {
  // Duplicate for seamless loop
  const loop = [...tweets, ...tweets];

  return (
    <div
      className="relative overflow-hidden w-screen left-1/2 -translate-x-1/2"
      style={{
        maskImage:
          "linear-gradient(to right, transparent, black 8%, black 92%, transparent)",
        WebkitMaskImage:
          "linear-gradient(to right, transparent, black 8%, black 92%, transparent)",
      }}
    >
      <div className="flex gap-6 w-max animate-marquee">
        {loop.map((t, i) => (
          <div
            key={i}
            className="flex-shrink-0 w-[440px] h-[260px] border border-ghost bg-black flex items-center justify-center overflow-hidden"
          >
            <img
              src={t.src}
              alt={t.alt}
              className="w-full h-full object-contain"
              loading="lazy"
            />
          </div>
        ))}
      </div>
    </div>
  );
};

export default TweetMarquee;
