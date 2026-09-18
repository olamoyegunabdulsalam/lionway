import RevealText from "./RevealText";

export default function SectionLabel({ index, children, className = "" }) {
  return (
    <RevealText className={`flex items-center gap-4 ${className}`} y={12}>
      <span className="editorial-eyebrow text-ink-faint">
        {index && <span className="text-solar-deep">{index}</span>}
        {index && <span className="mx-2 text-ink-faint/50">/</span>}
        {children}
      </span>
      <span className="h-px flex-1 bg-current opacity-15" />
    </RevealText>
  );
}
