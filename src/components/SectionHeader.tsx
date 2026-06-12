interface SectionHeaderProps {
  tag: string;
  title: string;
  description?: string;
  align?: "center" | "left";
  light?: boolean;
}

export default function SectionHeader({
  tag,
  title,
  description,
  align = "center",
  light = false,
}: SectionHeaderProps) {
  return (
    <div
      className={`scroll-reveal ${align === "center" ? "text-center" : "text-left"}`}
    >
      <span
        className="inline-block px-4 py-1.5 rounded-full text-[13px] font-semibold uppercase tracking-[0.1em] mb-3"
        style={{
          color: light ? "white" : "hsl(var(--primary))",
          background: light ? "rgba(255,255,255,0.15)" : "hsl(var(--overlay))",
        }}
      >
        {tag}
      </span>
      <h2
        className="text-2xl sm:text-3xl lg:text-4xl font-bold leading-tight"
        style={{ color: light ? "white" : "hsl(var(--text-primary))" }}
      >
        {title}
      </h2>
      {description && (
        <p
          className={`mt-4 text-base leading-relaxed max-w-[600px] ${
            align === "center" ? "mx-auto" : ""
          }`}
          style={{
            color: light ? "rgba(255,255,255,0.85)" : "hsl(var(--text-secondary))",
          }}
        >
          {description}
        </p>
      )}
    </div>
  );
}
