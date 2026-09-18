import { useEffect, useState } from "react";
import {
  motion,
  AnimatePresence,
  useScroll,
  useMotionValueEvent,
} from "framer-motion";
import { Menu, X, ArrowUpRight } from "lucide-react";
import Logo from "./Logo";
import ThemeToggle from "./ThemeToggle";
import { NAV_LINKS } from "../data/site";

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const [active, setActive] = useState("");
  const { scrollY } = useScroll();

  useMotionValueEvent(scrollY, "change", (v) => {
    setScrolled(v > 40);
  });

  useEffect(() => {
    const sections = NAV_LINKS.map((l) =>
      document.querySelector(l.href),
    ).filter(Boolean);
    if (!sections.length) return;
    const io = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => {
          if (e.isIntersecting) setActive("#" + e.target.id);
        });
      },
      { rootMargin: "-45% 0px -50% 0px" },
    );
    sections.forEach((s) => io.observe(s));
    return () => io.disconnect();
  }, []);

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  return (
    <>
      <motion.header
        initial={{ y: -20, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
        className="fixed top-0 left-0 right-0 z-50"
      >
        <div
          className={`transition-all duration-500 ${
            scrolled ? "backdrop-blur-md" : ""
          }`}
          style={{
            backgroundColor: scrolled
              ? "color-mix(in srgb, var(--bg) 82%, transparent)"
              : "transparent",
            borderBottom: scrolled
              ? "1px solid var(--line)"
              : "1px solid transparent",
          }}
        >
          <nav className="mx-auto flex max-w-[1440px] items-center justify-between px-5 py-4 md:px-10 md:py-5">
            <a
              href="#top"
              className="flex items-center"
              aria-label="Lion-Way Ventures home"
            >
                <Logo height={50} />
            </a>

            <div className="hidden items-center gap-9 lg:flex">
              {NAV_LINKS.map((link) => (
                <a
                  key={link.href}
                  href={link.href}
                  className="group relative text-[12px] font-medium tracking-[0.14em] uppercase text-ink-soft transition-colors hover:text-ink"
                >
                  {link.label}
                  {active === link.href && (
                    <motion.span
                      layoutId="nav-active"
                      className="absolute -bottom-1.5 left-0 right-0 h-px"
                      style={{ backgroundColor: "var(--color-solar-deep)" }}
                      transition={{
                        type: "spring",
                        stiffness: 400,
                        damping: 30,
                      }}
                    />
                  )}
                </a>
              ))}
            </div>

            <div className="flex items-center gap-3">
              <ThemeToggle />
              <a
                href="#cta"
                className="hidden items-center gap-2 bg-ink px-5 py-3 text-[11px] font-semibold tracking-[0.18em] uppercase text-cream transition-colors hover:bg-[var(--color-solar-deep)] md:inline-flex"
              >
                Get a Quote
                <ArrowUpRight size={13} strokeWidth={2} />
              </a>
              <button
                onClick={() => setOpen(true)}
                aria-label="Open menu"
                className="flex h-9 w-9 items-center justify-center border hairline-strong lg:hidden"
                style={{ borderColor: "var(--line-strong)" }}
              >
                <Menu size={16} className="text-ink" />
              </button>
            </div>
          </nav>
        </div>
      </motion.header>

      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.4 }}
            className="fixed inset-0 z-[60] bg-page lg:hidden"
          >
            <div className="flex items-center justify-between px-5 py-4">
              <Logo height={34} />
              <button
                onClick={() => setOpen(false)}
                aria-label="Close menu"
                className="flex h-9 w-9 items-center justify-center border hairline-strong"
                style={{ borderColor: "var(--line-strong)" }}
              >
                <X size={16} className="text-ink" />
              </button>
            </div>
            <nav className="mt-8 flex flex-col px-5">
              {NAV_LINKS.map((link, i) => (
                <motion.a
                  key={link.href}
                  href={link.href}
                  onClick={() => setOpen(false)}
                  initial={{ opacity: 0, y: 24 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{
                    delay: 0.05 + i * 0.06,
                    duration: 0.5,
                    ease: [0.16, 1, 0.3, 1],
                  }}
                  className="border-b hairline py-5 font-display text-[34px] font-extrabold leading-none tracking-tight text-ink"
                  style={{ borderColor: "var(--line)" }}
                >
                  {link.label}
                </motion.a>
              ))}
              <motion.a
                href="#cta"
                onClick={() => setOpen(false)}
                initial={{ opacity: 0, y: 24 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.4, duration: 0.5 }}
                className="mt-8 inline-flex items-center justify-center gap-3 bg-ink px-7 py-5 text-[12px] font-semibold tracking-[0.18em] uppercase text-cream"
              >
                Get a Quote <ArrowUpRight size={14} />
              </motion.a>
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
