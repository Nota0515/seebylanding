import React, { useMemo } from "react";
import './Waveline.css'

/**
 * WaveformGlow.jsx
 * A reusable React + Tailwind component that renders a glowing, animated waveform
 * with fade-out on both ends using SVG, a mask, and an SVG glow filter.
 *
 * Props:
 *  - width (number) : visual width in px (default 800)
 *  - height (number): visual height in px (default 120)
 *  - color (string)  : base stroke color (default '#FFFFFF')
 *  - glowColor (string): glow color (default '#7DD3FC')
 *  - speed (number)  : animation duration in seconds (default 4)
 *  - amplitude (number): wave amplitude in px (default 18)
 *  - frequency (number): number of wave cycles across the width (default 2)
 *  - points (number) : resolution points (default 240)
 *
 * Usage:
 *  <WaveformGlow width={900} height={140} color="#fff" glowColor="#60a5fa" speed={3} />
 *
 * Notes:
 *  - This component uses Tailwind for layout classes only; you can remove/replace them.
 *  - The animation is a translate on the generated path to create a continuous scroll effect.
 */

const WaveformGlow = ({
  width = 800,
  height = 120,
  color = "#FFFFFF",
  glowColor = "#7DD3FC",
  speed = 4,
  amplitude = 18,
  frequency = 2,
  points = 240,
}) => {
  const animationStyle = {
    animation: `wave-scroll ${speed}s linear infinite, wave-breathe 6s ease-in-out infinite`,
    '--wave-width': `${width}px`,
  };
  // We generate a path that is twice the width so we can translate it to create a looping motion.
  const doubleWidth = width * 2;

  const path = useMemo(() => {
    const pts = [];
    for (let i = 0; i <= points; i++) {
      const t = i / points; // 0..1
      const x = t * doubleWidth;
      // increase cycles across double width for smoother repeat
      const phase = (t * frequency * Math.PI * 2 * (doubleWidth / width));
      const y = height / 2 + Math.sin(phase) * amplitude;
      pts.push([x, y]);
    }
    // convert to path d
    let d = `M ${pts[0][0]} ${pts[0][1]}`;
    for (let i = 1; i < pts.length; i++) {
      const [x, y] = pts[i];
      d += ` L ${x} ${y}`;
    }
    return d;
  }, [points, doubleWidth, height, amplitude, frequency, width]);

  // unique ids so multiple components won't clash
  const uid = Math.random().toString(36).slice(2, 9);
  const maskId = `fadeMask-${uid}`;
  const glowId = `glow-${uid}`;
  const pathId = `wavePath-${uid}`;

  return (
    <div className="w-full flex items-center justify-center" style={{ maxWidth: width }}>
      <svg
        role="img"
        aria-label="Animated waveform visualization"
        width={width}
        height={height}
        viewBox={`0 0 ${width} ${height}`}
        preserveAspectRatio="none"
        className="block"
      >
        <defs>
          {/* glow filter */}
          <filter id={glowId} x="-50%" y="-50%" width="200%" height="200%">
            <feGaussianBlur stdDeviation="6" result="blur" />
            <feMerge>
              <feMergeNode in="blur" />
              <feMergeNode in="SourceGraphic" />
            </feMerge>
          </filter>

          {/* horizontal fade mask using linear gradient */}
          <mask id={maskId} maskUnits="userSpaceOnUse">
            <rect x="0" y="0" width={width} height={height} fill="black" />
            <linearGradient id={`fader-${uid}`} x1="0" x2="1">
              <stop offset="0%" stopColor="white" stopOpacity="0" />
              <stop offset="12%" stopColor="white" stopOpacity="1" />
              <stop offset="88%" stopColor="white" stopOpacity="1" />
              <stop offset="100%" stopColor="white" stopOpacity="0" />
            </linearGradient>
            {/* use the gradient as a rectangle over the whole area; white = visible */}
            <rect x="0" y="0" width={width} height={height} fill={`url(#fader-${uid})`} />
          </mask>

          {/* subtle drop shadow for depth */}
          <filter id={`shadow-${uid}`} x="-20%" y="-20%" width="140%" height="140%">
            <feDropShadow dx="0" dy="2" stdDeviation="2" floodOpacity="0.2" />
          </filter>
        </defs>

        {/* background (transparent) */}

        {/* group that will be translated to animate the wave */}
        <g mask={`url(#${maskId})`} style={{ overflow: "visible" }}>
          <g
            className="wave-anim"
            style={{
              transformBox: "fill-box",
              transformOrigin: "0 0",
              animation: `wave-scroll ${speed}s linear infinite, wave-breathe 6s ease-in-out infinite`,
              '--wave-width': `${width}px`
            }}
          >
            {/* glow stroke: thicker, blurred */}
            <path
              id={pathId}
              d={path}
              fill="none"
              stroke={glowColor}
              strokeWidth={6}
              strokeLinecap="round"
              strokeLinejoin="round"
              style={{ filter: `url(#${glowId})`, opacity: 0.85 }}
            />

            {/* main stroke: crisp line on top */}
            <path
              d={path}
              fill="none"
              stroke={color}
              strokeWidth={2}
              strokeLinecap="round"
              strokeLinejoin="round"
              style={{ mixBlendMode: "screen" }}
            />
          </g>
        </g>
      </svg>
    </div>
  );
};

export default WaveformGlow;
