import { cn } from "@/utils/cn.js";

export const GlowText = ({
  children,
  className,
  style,
  ...props
}) => {
  const dropShadows = [
    {
      offsetX: 0,
      offsetY: 0,
      blurRadius: "calc((var(--active, 100) / 100) * 5px)",
      color: "hsl(0 0% 100% / 0.6)",
    },
    {
      offsetX: 0,
      offsetY: 0,
      blurRadius: "calc((var(--active, 100) / 100) * 10px)",
      color: "hsl(0 0% 100% / 0.4)",
    }
  ];

  // Construct the filter string by joining individual drop-shadows
  const filterValue = dropShadows
    .map(
      ({ offsetX, offsetY, blurRadius, color }) =>
        `drop-shadow(${offsetX} ${offsetY} ${blurRadius} ${color})`
    )
    .join(" ");

  return (
    <span
      className={cn("select-none", className)}
      style={{
        ...style,
        filter: filterValue,
      }}
      {...props}
    >
      {children}
    </span>
  );
};

export default GlowText;