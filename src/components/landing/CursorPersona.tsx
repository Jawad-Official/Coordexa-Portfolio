interface CursorPersonaProps {
  name: string;
  role: string;
  color: "blue" | "green" | "purple" | "orange" | "red";
  position?: { x: number; y: number };
  delay?: number;
  className?: string;
}

const colorMap = {
  blue: "hsl(220, 100%, 50%)",
  green: "hsl(150, 80%, 45%)",
  purple: "hsl(270, 70%, 55%)",
  orange: "hsl(30, 90%, 55%)",
  red: "hsl(0, 80%, 55%)",
};

const bgColorMap = {
  blue: "bg-primary",
  green: "bg-emerald-500",
  purple: "bg-violet-500",
  orange: "bg-orange-500",
  red: "bg-red-500",
};

export const CursorPersona = ({
  name,
  role,
  color,
  position,
  delay = 0,
  className = "",
}: CursorPersonaProps) => {
  const hasPosition = position !== undefined;
  
  return (
    <div
      className={`${hasPosition ? "cursor-persona" : "flex items-center gap-1"} ${className}`}
      style={hasPosition ? {
        left: `${position.x}%`,
        top: `${position.y}%`,
        animationDelay: `${delay}s`,
      } : undefined}
    >
      <svg
        width="20"
        height="20"
        viewBox="0 0 24 24"
        fill="none"
        className="drop-shadow-lg"
      >
        <path
          d="M5.5 3.21V20.8c0 .45.54.67.85.35l4.86-4.86a.5.5 0 0 1 .35-.15h6.87a.5.5 0 0 0 .35-.85L6.35 2.86a.5.5 0 0 0-.85.35Z"
          fill={colorMap[color]}
          stroke="white"
          strokeWidth="1.5"
        />
      </svg>
      <div
        className={`${hasPosition ? "absolute left-4 top-4" : ""} ${bgColorMap[color]} text-white text-xs font-medium px-2 py-1 rounded-lg whitespace-nowrap shadow-lg`}
      >
        {name}
        <span className="text-white/70 ml-1">• {role}</span>
      </div>
    </div>
  );
};
