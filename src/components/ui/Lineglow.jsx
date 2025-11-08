import React from "react";
import "./Lineglow.css";

export default function ShinyBorder({ children, className , ...props }) {
  return (
    <div
      className={`shiny-root group relative rounded-full p-px ${className}`}
      {...props}
    >
      {/* moving colorful blob (original timing & keyframe names preserved) */}
      <span
        className="absolute inset-0 rounded-full overflow-hidden"
        style={{ transform: "translateZ(0)" }}
        aria-hidden
      >
        <span
          className="inset-0 absolute pointer-events-none select-none"
          style={{
            animation: "10s ease-in-out infinite alternate border-glow-translate",
          }}
        >
          <span
            className="blob size-24"
            style={{
              background:
                "linear-gradient(135deg, #7A69F9, #F26378, #F5833F)",
            }}
          />
        </span>
      </span>

      {/* glowing rim behind the element - widened and centered to prevent one-sided blur */}
      {/*This need to be decided here */}
      <span
        className="inset-0 absolute pointer-events-none select-none"
        style={{
          animation: "10s ease-in-out infinite alternate border-glow-translate",
        }}
        aria-hidden
      >
        <span
          className="glow-band block z-0 h-full blur-xl rounded-full"
          style={{
            animation: "10s ease-in-out infinite alternate border-glow-scale",
            background:
              "linear-gradient(135deg, #e76c4d, #F26378, #F5833F)",
          }}
        />
      </span>

      {/* content area */}
      <div
        className="relative z-1 bg-neutral-50/90 dark:bg-neutral-950/90 rounded-full w-fit flex items-center justify-center"
        style={{ WebkitBackfaceVisibility: "hidden" }}
      >
        {children}
      </div>
    </div>
  );
}
