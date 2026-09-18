import SectionLabel from "./SectionLabel";
import RevealText from "./RevealText";

export default function About() {
  return (
    <section id="about" className="relative bg-page py-24 md:py-36">
      <div className="mx-auto max-w-[1440px] px-5 md:px-10">
        <SectionLabel index="07">About</SectionLabel>

        <div className="mt-10 grid grid-cols-1 gap-12 lg:grid-cols-12 lg:gap-10">
          <div className="lg:col-span-7">
            <RevealText
              as="h2"
              className="font-display text-[12vw] font-extrabold leading-[0.9] tracking-[-0.035em] text-ink sm:text-[8.5vw] lg:text-[5vw]"
            >
              SOLAR POWER.
              <br />
              <span className="text-ink-soft">MADE PRACTICAL.</span>
            </RevealText>
          </div>

          <div className="lg:col-span-5 lg:pt-6">
            <RevealText
              as="p"
              delay={0.1}
              className="max-w-md text-[15px] leading-relaxed text-ink-soft"
            >
              Lion-Way Ventures is a Nigerian solar company. We supply, install
              and maintain solar systems for homes and streets — from solar
              panels and inverters to solar street lights.
            </RevealText>
            <RevealText
              as="p"
              delay={0.2}
              className="mt-5 max-w-md text-[15px] leading-relaxed text-ink-soft"
            >
              Based in Lagos, we deliver nationwide. Our work is simple in
              principle: figure out what you actually need, install it properly,
              and stay available to keep it running.
            </RevealText>

            <div
              className="mt-10 grid grid-cols-2 gap-6 border-t hairline pt-8"
              style={{ borderColor: "var(--line)" }}
            >
              <div>
                <div className="editorial-eyebrow text-ink-faint">Based in</div>
                <div className="mt-2 font-display text-lg font-bold tracking-tight text-ink">
                  Lagos, Nigeria
                </div>
              </div>
              <div>
                <div className="editorial-eyebrow text-ink-faint">Delivery</div>
                <div className="mt-2 font-display text-lg font-bold tracking-tight text-ink">
                  Nationwide
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
