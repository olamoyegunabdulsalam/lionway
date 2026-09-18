import { ArrowUpRight, AtSign, Mail, MapPin } from "lucide-react";
import Logo from "./Logo";
import { NAV_LINKS } from "../data/site";

export default function Footer() {
  const year = new Date().getFullYear();
  return (
    <footer
      className="relative overflow-hidden"
      style={{ backgroundColor: "var(--color-ink)" }}
    >
      <div className="mx-auto max-w-[1440px] px-5 py-16 md:px-10 md:py-20">
        <div className="grid grid-cols-1 gap-12 lg:grid-cols-12">
          <div className="lg:col-span-5">
<div className="inline-flex items-center ">
  <Logo height={50} />
</div>
            <p className="mt-6 max-w-xs text-[14px] leading-relaxed text-cream/60">
              Solar solutions for homes & streets in Nigeria. Installation,
              sales and maintenance.
            </p>
            <a
              href="mailto:hello@lionwayventures.com"
              className="mt-8 inline-flex items-center gap-3 text-[12px] font-semibold tracking-[0.18em] uppercase text-cream transition-colors hover:text-[var(--color-solar)]"
            >
              Get a Quote <ArrowUpRight size={14} />
            </a>
          </div>

          <div className="lg:col-span-3">
            <div className="editorial-eyebrow text-cream/40">Navigate</div>
            <ul className="mt-6 space-y-3">
              {NAV_LINKS.map((l) => (
                <li key={l.href}>
                  <a
                    href={l.href}
                    className="text-[14px] text-cream/80 transition-colors hover:text-cream"
                  >
                    {l.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div className="lg:col-span-4">
            <div className="editorial-eyebrow text-cream/40">Contact</div>
            <ul className="mt-6 space-y-4 text-[14px] text-cream/80">
              <li className="flex items-start gap-3">
                <MapPin size={15} className="mt-0.5 shrink-0 text-cream/50" />
                <span>Lagos, Nigeria Nationwide delivery</span>
              </li>
              <li className="flex items-start gap-3">
                <Mail size={15} className="mt-0.5 shrink-0 text-cream/50" />
                <a
                  href="mailto:hello@lionwayventures.com"
                  className="transition-colors hover:text-cream"
                >
                  hello@lionwayventures.com
                </a>
              </li>
              <li className="flex items-start gap-3">
                <AtSign size={15} className="mt-0.5 shrink-0 text-cream/50" />
                <a href="#" className="transition-colors hover:text-cream">
                  @lionwayventures
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-16 flex flex-col items-start justify-between gap-4 border-t border-cream/10 pt-8 text-[12px] text-cream/40 md:flex-row md:items-center">
          <span>© {year} Lion-Way Ventures. All rights reserved.</span>
          <span className="editorial-eyebrow">
            Power that works · Where you need it
          </span>
        </div>
      </div>
    </footer>
  );
}
