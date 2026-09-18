import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ArrowLeft, ArrowRight } from "lucide-react";
import SectionLabel from "./SectionLabel";
import RevealText from "./RevealText";
import SunIndicator from "./SunIndicator";
import { PRODUCTS } from "../data/site";

export default function Products() {
  const [index, setIndex] = useState(0);
  const [dir, setDir] = useState(1);
  const product = PRODUCTS[index];

  const go = (n) => {
    setDir(n > index ? 1 : -1);
    setIndex(((n % PRODUCTS.length) + PRODUCTS.length) % PRODUCTS.length);
  };

  return (
    <section
      id="products"
      className="relative overflow-hidden py-24 md:py-36"
      style={{ backgroundColor: "var(--color-navy)" }}
    >
      <SunIndicator
        size={180}
        className="left-[6%] bottom-[10%] hidden md:block"
        variant="core"
        pulse={false}
      />

      <div className="relative mx-auto max-w-[1440px] px-5 md:px-10">
        <div className="flex items-center gap-4">
          <span className="editorial-eyebrow text-cream/60">
            <span style={{ color: "var(--color-solar)" }}>04</span>
            <span className="mx-2 text-cream/30">/</span>
            Products
          </span>
          <span className="h-px flex-1 bg-cream/15" />
        </div>

        <RevealText
          as="h2"
          className="mt-10 font-display text-[11vw] font-extrabold leading-[0.9] tracking-[-0.035em] text-cream sm:text-[8vw] lg:text-[5vw]"
        >
          THE EQUIPMENT
          <br />
          <span className="text-cream/70">BEHIND THE POWER.</span>
        </RevealText>

        <div className="mt-16 grid grid-cols-1 gap-10 md:mt-20 lg:grid-cols-12 lg:gap-12">
          {/* Left: image */}
          <div className="lg:col-span-7">
            <div className="relative aspect-[5/4] w-full overflow-hidden bg-ink md:aspect-[16/11]">
              <AnimatePresence initial={false} mode="popLayout">
                <motion.img
                  key={product.id}
                  src={product.image}
                  alt={product.name}
                  loading="lazy"
                  initial={{ opacity: 0, scale: 1.06 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 1.02 }}
                  transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
                  className="absolute inset-0 h-full w-full object-cover"
                />
              </AnimatePresence>
              <div className="absolute left-0 top-0 bg-cream px-3 py-2">
                <span className="editorial-eyebrow text-ink">
                  {product.number} / 03
                </span>
              </div>
            </div>
          </div>

          {/* Right: info + selectors */}
          <div className="flex flex-col justify-between lg:col-span-5">
            <div>
              <AnimatePresence mode="wait">
                <motion.div
                  key={product.id}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -12 }}
                  transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
                >
                  <h3 className="font-display text-[9vw] font-extrabold leading-none tracking-[-0.03em] text-cream sm:text-[6vw] lg:text-[3.4vw]">
                    {product.name}
                  </h3>
                  <p className="mt-6 max-w-md text-[15px] leading-relaxed text-cream/70">
                    {product.description}
                  </p>
                </motion.div>
              </AnimatePresence>

              {/* Selector list */}
              <div className="mt-10 border-t border-cream/15">
                {PRODUCTS.map((p, i) => (
                  <button
                    key={p.id}
                    onClick={() => go(i)}
                    className="group flex w-full items-center justify-between border-b border-cream/15 py-4 text-left"
                  >
                    <span
                      className={`text-[12px] font-semibold tracking-[0.18em] uppercase transition-colors ${
                        i === index
                          ? "text-cream"
                          : "text-cream/40 group-hover:text-cream/80"
                      }`}
                    >
                      {p.name}
                    </span>
                    <span
                      className="h-1.5 w-1.5 rounded-full transition-all"
                      style={{
                        backgroundColor:
                          i === index
                            ? "var(--color-solar)"
                            : "rgba(247,245,239,0.2)",
                        transform: i === index ? "scale(1.4)" : "scale(1)",
                      }}
                    />
                  </button>
                ))}
              </div>
            </div>

            <div className="mt-10 flex items-center justify-between">
              <button
                onClick={() => go(index - 1)}
                className="group inline-flex items-center gap-3 text-[12px] font-semibold tracking-[0.18em] uppercase text-cream/70 transition-colors hover:text-cream"
              >
                <ArrowLeft
                  size={14}
                  className="transition-transform group-hover:-translate-x-1"
                />
                Previous
              </button>
              <button
                onClick={() => go(index + 1)}
                className="group inline-flex items-center gap-3 text-[12px] font-semibold tracking-[0.18em] uppercase text-cream/70 transition-colors hover:text-cream"
              >
                Next
                <ArrowRight
                  size={14}
                  className="transition-transform group-hover:translate-x-1"
                />
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
