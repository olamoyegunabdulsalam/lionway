// src/components/Logo.jsx
export default function Logo({
  className = "",
  height = 36,
  alt = "Lion-Way Ventures",
}) {
  return (
    <img
      src="/logo.png"
      alt={alt}
      height={height}
      className={`w-auto select-none ${className}`}
      style={{ height }}
      draggable={false}
    />
  );
}
