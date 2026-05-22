import { useEffect, useState, type ReactNode, type ElementType } from "react";

type RevealProps = {
  children: ReactNode;
  delay?: number;
  className?: string;
  as?: ElementType;
};

/**
 * Mount-once fade-up. Uses React state + CSS transition (not keyframes), so
 * it cannot be re-triggered by font swaps, HMR style updates, or browser
 * repaint quirks. Plays exactly once per logical mount.
 */
const Reveal = ({ children, delay = 0, className = "", as: Tag = "div" }: RevealProps) => {
  const [shown, setShown] = useState(false);

  useEffect(() => {
    const id = window.setTimeout(() => setShown(true), delay);
    return () => window.clearTimeout(id);
  }, [delay]);

  return (
    <Tag
      className={`transition-[opacity,transform] duration-700 ease-out will-change-[opacity,transform] ${
        shown ? "opacity-100 translate-y-0" : "opacity-0 translate-y-5"
      } ${className}`}
    >
      {children}
    </Tag>
  );
};

export default Reveal;
