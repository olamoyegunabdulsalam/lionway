import { motion } from "framer-motion";

/**
 * Recurring sun motif. Positioned absolutely by the parent.
 * Pass `size` in px and `variant` for tone.
 */
export default function SunIndicator({
  size = 120,
  className = "",
  pulse = true,
  delay = 0,
  variant = "core",
}) {
  const coreColor = variant === "warm" ? "#E88924" : "#F5B72C";
  const rayColor = variant === "warm" ? "#F5B72C" : "#E88924";

  return (
    <motion.div
      className={`pointer-events-none absolute ${className}`}
      initial={{ opacity: 0, scale: 0.85 }}
      whileInView={{ opacity: 1, scale: 1 }}
      viewport={{ once: true, margin: "-60px" }}
      transition={{ duration: 1.2, delay, ease: [0.16, 1, 0.3, 1] }}
      style={{ width: size, height: size }}
      aria-hidden="true"
    >
      <motion.div
        animate={pulse ? { rotate: 360 } : {}}
        transition={{ duration: 90, repeat: Infinity, ease: "linear" }}
        className="relative h-full w-full"
      >
        <svg viewBox="0 0 100 100" className="h-full w-full">
          <circle cx="50" cy="50" r="22" fill={coreColor} opacity="0.95" />
          <circle
            cx="50"
            cy="50"
            r="22"
            fill="none"
            stroke={coreColor}
            strokeWidth="0.5"
            opacity="0.4"
          />
          {Array.from({ length: 16 }).map((_, i) => {
            const angle = (i * 360) / 16;
            return (
              <line
                key={i}
                x1="50"
                y1="18"
                x2="50"
                y2="10"
                stroke={rayColor}
                strokeWidth="1.2"
                strokeLinecap="round"
                opacity={i % 2 === 0 ? 0.9 : 0.35}
                transform={`rotate(${angle} 50 50)`}
              />
            );
          })}
        </svg>
      </motion.div>
    </motion.div>
  );
}
