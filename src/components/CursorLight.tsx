import { useEffect, useState } from "react";

export const CursorLight = () => {
  const [position, setPosition] = useState({ x: 0, y: 0 });
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      setPosition({ x: e.clientX, y: e.clientY });
      setIsVisible(true);
    };

    const handleMouseLeave = () => {
      setIsVisible(false);
    };

    window.addEventListener("mousemove", handleMouseMove);
    document.addEventListener("mouseleave", handleMouseLeave);

    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
      document.removeEventListener("mouseleave", handleMouseLeave);
    };
  }, []);

  return (
    <div
      className="fixed pointer-events-none z-40 transition-opacity duration-300"
      style={{
        left: `${position.x}px`,
        top: `${position.y}px`,
        transform: "translate(-50%, -50%)",
        opacity: isVisible ? 1 : 0,
      }}
    >
      <div
        className="w-16 h-16 rounded-full blur-2xl"
        style={{
          background:
            "radial-gradient(circle, hsl(220, 100%, 50%) 0%, hsla(220, 100%, 50%, 0.25) 40%, transparent 70%)",
          boxShadow: "0 0 40px hsla(220, 100%, 50%, 0.45)",
        }}
      />
    </div>
  );
};

