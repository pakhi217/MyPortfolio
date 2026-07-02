import { useEffect, useRef } from "react";

export default function CursorGlow() {
  const cursorRef = useRef(null);

  useEffect(() => {
    const move = (e) => {
      if (!cursorRef.current) return;
      cursorRef.current.style.left = `${e.clientX}px`;
      cursorRef.current.style.top = `${e.clientY}px`;
    };
    window.addEventListener("mousemove", move);
    return () => window.removeEventListener("mousemove", move);
  }, []);

  return (
    <div
      ref={cursorRef}
      className="pointer-events-none fixed z-[9998] -translate-x-1/2 -translate-y-1/2
        w-64 h-64 rounded-full opacity-0 hover:opacity-100
        transition-opacity duration-300"
      style={{
        background:
          "radial-gradient(circle, rgba(201,160,160,0.12) 0%, rgba(201,168,76,0.06) 40%, transparent 70%)",
        filter: "blur(1px)",
      }}
      aria-hidden="true"
    />
  );
}
