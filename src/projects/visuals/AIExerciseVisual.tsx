import { DemoBadge, StatTile, Pill, Row } from "../../components/mockups/Frames";

function PoseSkeleton() {
  // Illustrative joint layout for a mid-squat pose — not real captured data.
  const joints: Record<string, [number, number]> = {
    head: [150, 40],
    neck: [150, 68],
    lShoulder: [122, 78],
    rShoulder: [178, 78],
    lElbow: [104, 112],
    rElbow: [196, 112],
    lWrist: [94, 148],
    rWrist: [206, 148],
    hip: [150, 158],
    lHip: [132, 160],
    rHip: [168, 160],
    lKnee: [122, 210],
    rKnee: [178, 210],
    lAnkle: [128, 262],
    rAnkle: [172, 262],
  };
  const bones: [string, string][] = [
    ["head", "neck"],
    ["neck", "lShoulder"],
    ["neck", "rShoulder"],
    ["lShoulder", "lElbow"],
    ["lElbow", "lWrist"],
    ["rShoulder", "rElbow"],
    ["rElbow", "rWrist"],
    ["lShoulder", "lHip"],
    ["rShoulder", "rHip"],
    ["lHip", "rHip"],
    ["lHip", "lKnee"],
    ["lKnee", "lAnkle"],
    ["rHip", "rKnee"],
    ["rKnee", "rAnkle"],
  ];

  return (
    <svg viewBox="0 0 300 300" className="h-full w-full" aria-hidden="true">
      <defs>
        <radialGradient id="camGlow" cx="50%" cy="30%" r="75%">
          <stop offset="0%" stopColor="#122733" />
          <stop offset="100%" stopColor="#0a0d12" />
        </radialGradient>
      </defs>
      <rect width="300" height="300" fill="url(#camGlow)" />
      {Array.from({ length: 6 }).map((_, i) => (
        <line key={`v${i}`} x1={(i + 1) * 42.8} y1="0" x2={(i + 1) * 42.8} y2="300" stroke="#ffffff08" />
      ))}
      {Array.from({ length: 6 }).map((_, i) => (
        <line key={`h${i}`} x1="0" y1={(i + 1) * 42.8} x2="300" y2={(i + 1) * 42.8} stroke="#ffffff08" />
      ))}

      <circle cx="150" cy="150" r="118" fill="none" stroke="#7dd3fc22" strokeDasharray="4 6" />

      {bones.map(([a, b]) => (
        <line
          key={`${a}-${b}`}
          x1={joints[a][0]}
          y1={joints[a][1]}
          x2={joints[b][0]}
          y2={joints[b][1]}
          stroke="#5eead4"
          strokeWidth="2.5"
          strokeLinecap="round"
          opacity="0.9"
        />
      ))}
      <circle cx={joints.head[0]} cy={joints.head[1]} r="14" fill="none" stroke="#7dd3fc" strokeWidth="2.5" />
      {Object.entries(joints).map(([k, [x, y]]) =>
        k === "head" ? null : <circle key={k} cx={x} cy={y} r="4.5" fill="#7dd3fc" />
      )}
    </svg>
  );
}

export default function AIExerciseVisual() {
  return (
    <div className="grid gap-5 lg:grid-cols-[1.15fr_0.85fr]">
      <div className="relative overflow-hidden rounded-xl border border-[var(--color-border-strong)] bg-[#0c1016] shadow-[0_20px_60px_-25px_rgba(0,0,0,0.7)]">
        <DemoBadge label="AI Pose Detection · Illustrative" />
        <div className="flex items-center gap-2 border-b border-[var(--color-border)] bg-[#0f1319] px-3.5 py-2.5">
          <span className="h-2.5 w-2.5 rounded-full bg-[#fc5f5a]" />
          <span className="h-2.5 w-2.5 rounded-full bg-[#fdbc40]" />
          <span className="h-2.5 w-2.5 rounded-full bg-[#33c748]" />
          <span className="ml-3 rounded-md bg-black/30 px-3 py-1 font-mono text-[11px] text-[var(--color-text-faint)]">
            live camera · squat · rep 8
          </span>
        </div>
        <div className="relative aspect-square">
          <PoseSkeleton />
          <div className="absolute left-3 top-3 flex flex-col gap-1.5">
            <Pill tone="success">Form: Good</Pill>
            <Pill tone="info">Stage: Descending</Pill>
          </div>
          <div className="absolute bottom-3 right-3 rounded-lg bg-black/50 px-3 py-2 text-right backdrop-blur">
            <p className="font-mono text-2xl font-semibold leading-none text-[var(--color-accent)]">8</p>
            <p className="mt-1 text-[10px] text-[var(--color-text-faint)]">reps</p>
          </div>
        </div>
      </div>

      <div className="flex flex-col gap-4">
        <div className="grid grid-cols-2 gap-2.5">
          <StatTile label="Good Reps" value="7" />
          <StatTile label="Bad Reps" value="1" accent="rose" />
          <StatTile label="Session Duration" value="04:12" accent="blue" />
          <StatTile label="Best Hold" value="38s" accent="amber" />
        </div>

        <div className="card p-4">
          <p className="text-xs font-semibold text-[var(--color-text-faint)]">FORM ANALYSIS — SQUAT</p>
          <div className="mt-2.5 space-y-2">
            <Row>
              <span className="text-xs text-[var(--color-text-dim)]">Knee position</span>
              <Pill tone="success">Good</Pill>
            </Row>
            <Row>
              <span className="text-xs text-[var(--color-text-dim)]">Chest position</span>
              <Pill tone="success">Good</Pill>
            </Row>
            <Row>
              <span className="text-xs text-[var(--color-text-dim)]">Depth</span>
              <Pill tone="warn">Shallow</Pill>
            </Row>
          </div>
        </div>

        <div className="card p-4">
          <p className="text-xs font-semibold text-[var(--color-text-faint)]">VOICE COACHING</p>
          <p className="mt-2 text-sm text-[var(--color-text-dim)]">"Nice depth — keep your chest up on the way down."</p>
        </div>
      </div>
    </div>
  );
}
