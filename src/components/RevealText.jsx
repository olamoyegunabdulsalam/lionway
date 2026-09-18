import { motion } from "framer-motion";
import { usePrefersReducedMotion } from "../hooks/usePrefersReducedMotion";

export default function RevealText({
  children,
  as: Tag = "div",
  className = "",
  delay = 0,
  y = 24,
  once = true,
}) {
  const reduced = usePrefersReducedMotion();
  const Comp = motion[Tag] || motion.div;

  if (reduced) {
    return <Tag className={className}>{children}</Tag>;
  }

  return (
    <Comp
      initial={{ opacity: 0, y }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once, margin: "-80px" }}
      transition={{ duration: 0.9, delay, ease: [0.16, 1, 0.3, 1] }}
      className={className}
    >
      {children}
    </Comp>
  );
}
