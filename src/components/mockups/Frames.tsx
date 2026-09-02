import type { ReactNode } from "react";

/**
 * Shared "device frame" primitives used to build the illustrative product
 * visuals in each case study. These are original, coded UI mockups with
 * clearly fictional demo data — never real screenshots.
 */

export function DemoBadge({ label = "UI Concept · Demo Data" }: { label?: string }) {
  return (
    <span className="absolute right-3 top-3 z-10 rounded-full border border-white/15 bg-black/40 px-2.5 py-1 font-mono text-[10px] tracking-wide text-white/80 backdrop-blur">
      {label}
    </span>
  );
}

export function BrowserFrame({ title, children }: { title: string; children: ReactNode }) {
  return (
    <div className="relative overflow-hidden rounded-xl border border-[var(--color-border-strong)] bg-[#0c1016] shadow-[0_20px_60px_-25px_rgba(0,0,0,0.7)]">
      <DemoBadge />
      <div className="flex items-center gap-2 border-b border-[var(--color-border)] bg-[#0f1319] px-3.5 py-2.5">
        <span className="h-2.5 w-2.5 rounded-full bg-[#fc5f5a]" />
        <span className="h-2.5 w-2.5 rounded-full bg-[#fdbc40]" />
        <span className="h-2.5 w-2.5 rounded-full bg-[#33c748]" />
        <span className="ml-3 truncate rounded-md bg-black/30 px-3 py-1 font-mono text-[11px] text-[var(--color-text-faint)]">
          {title}
        </span>
      </div>
      <div className="p-4 sm:p-5">{children}</div>
    </div>
  );
}

export function PhoneFrame({ children, label }: { children: ReactNode; label: string }) {
  return (
    <div className="relative mx-auto w-full max-w-[280px]">
      <DemoBadge label={label} />
      <div className="rounded-[2rem] border-[6px] border-[#1b2029] bg-[#0c1016] p-2 shadow-[0_25px_60px_-20px_rgba(0,0,0,0.75)]">
        <div className="mx-auto mb-1.5 h-4 w-20 rounded-full bg-[#1b2029]" />
        <div className="min-h-[420px] overflow-hidden rounded-[1.4rem] bg-[#10141b] p-3">{children}</div>
      </div>
    </div>
  );
}

export function StatTile({ label, value, accent = "teal" }: { label: string; value: string; accent?: "teal" | "blue" | "amber" | "rose" }) {
  const colors: Record<string, string> = {
    teal: "text-[var(--color-accent)]",
    blue: "text-[var(--color-blue)]",
    amber: "text-[var(--color-amber)]",
    rose: "text-[var(--color-rose)]",
  };
  return (
    <div className="rounded-lg border border-[var(--color-border)] bg-white/[0.02] px-3 py-2.5">
      <p className={`font-mono text-lg font-semibold leading-none ${colors[accent]}`}>{value}</p>
      <p className="mt-1.5 text-[11px] text-[var(--color-text-faint)]">{label}</p>
    </div>
  );
}

export function Bar({ pct, accent = "teal" }: { pct: number; accent?: "teal" | "blue" | "amber" | "rose" }) {
  const colors: Record<string, string> = {
    teal: "bg-[var(--color-accent)]",
    blue: "bg-[var(--color-blue)]",
    amber: "bg-[var(--color-amber)]",
    rose: "bg-[var(--color-rose)]",
  };
  return (
    <div className="h-1.5 w-full overflow-hidden rounded-full bg-white/[0.06]">
      <div className={`h-full rounded-full ${colors[accent]}`} style={{ width: `${pct}%` }} />
    </div>
  );
}

export function Avatar({ initials, accent = "teal" }: { initials: string; accent?: "teal" | "blue" | "amber" | "rose" }) {
  const colors: Record<string, string> = {
    teal: "bg-[var(--color-accent-soft)] text-[var(--color-accent)]",
    blue: "bg-[#0e2a3a] text-[var(--color-blue)]",
    amber: "bg-[#3a2a10] text-[var(--color-amber)]",
    rose: "bg-[#3a1518] text-[var(--color-rose)]",
  };
  return (
    <div className={`flex h-8 w-8 shrink-0 items-center justify-center rounded-full font-mono text-[11px] font-semibold ${colors[accent]}`}>
      {initials}
    </div>
  );
}

export function Pill({ children, tone = "default" }: { children: ReactNode; tone?: "default" | "success" | "warn" | "info" }) {
  const tones: Record<string, string> = {
    default: "bg-white/[0.06] text-[var(--color-text-dim)]",
    success: "bg-[#0f3d38] text-[var(--color-accent)]",
    warn: "bg-[#3a2a10] text-[var(--color-amber)]",
    info: "bg-[#0e2a3a] text-[var(--color-blue)]",
  };
  return <span className={`rounded-full px-2 py-0.5 text-[10px] font-medium ${tones[tone]}`}>{children}</span>;
}

export function Row({ children }: { children: ReactNode }) {
  return <div className="flex items-center justify-between gap-3 border-b border-white/[0.05] py-2.5 last:border-0">{children}</div>;
}

export function SkeletonLine({ w = "100%" }: { w?: string }) {
  return <div className="h-2 rounded bg-white/[0.07]" style={{ width: w }} />;
}
