import { useRef, useState } from "react";
import { motion } from "framer-motion";
import { usePrefersReducedMotion } from "../hooks/usePrefersReducedMotion";

export default function MagneticButton({
  children,
  variant = "primary",
  href = "#",
  onClick,
  className = "",
  as = "a",
  ...props
}) {
  const ref = useRef(null);
  const [pos, setPos] = useState({ x: 0, y: 0 });
  const reduced = usePrefersReducedMotion();

  const handleMove = (e) => {
    if (reduced || !ref.current) return;
    const rect = ref.current.getBoundingClientRect();
    const x = e.clientX - rect.left - rect.width / 2;
    const y = e.clientY - rect.top - rect.height / 2;
    setPos({ x: x * 0.18, y: y * 0.28 });
  };
  const reset = () => setPos({ x: 0, y: 0 });

  const base =
    "group relative inline-flex items-center gap-3 overflow-hidden px-7 py-4 text-[12px] font-semibold tracking-[0.18em] uppercase transition-colors duration-300";

  const styles =
    variant === "primary"
      ? "text-cream"
      : "text-ink border hairline-strong hover:border-ink";

  const Comp = as === "button" ? motion.button : motion.a;

  return (
    <Comp
      ref={ref}
      href={as === "a" ? href : undefined}
      onClick={onClick}
      onMouseMove={handleMove}
      onMouseLeave={reset}
      animate={{ x: pos.x, y: pos.y }}
      transition={{ type: "spring", stiffness: 180, damping: 15, mass: 0.4 }}
      className={`${base} ${styles} ${className}`}
      style={
        variant === "primary"
          ? { backgroundColor: "var(--color-ink)" }
          : undefined
      }
      {...props}
    >
      {variant === "primary" && (
        <span
          aria-hidden
          className="absolute inset-0 -translate-x-full transition-transform duration-500 ease-out group-hover:translate-x-0"
          style={{ backgroundColor: "var(--color-solar-deep)" }}
        />
      )}
      <span className="relative z-10 flex items-center gap-3">{children}</span>
    </Comp>
  );
}
