import { BrowserFrame, StatTile, Pill, Row } from "../../components/mockups/Frames";

function RadarChart() {
  const axes = ["Vocabulary", "Grammar", "Spelling", "Reading", "Listening"];
  const values = [0.8, 0.55, 0.7, 0.65, 0.5]; // 0..1, illustrative only
  const size = 120;
  const center = size / 2;
  const radius = size / 2 - 14;
  const angleStep = (Math.PI * 2) / axes.length;

  const points = values
    .map((v, i) => {
      const angle = i * angleStep - Math.PI / 2;
      const x = center + Math.cos(angle) * radius * v;
      const y = center + Math.sin(angle) * radius * v;
      return `${x},${y}`;
    })
    .join(" ");

  return (
    <svg viewBox={`0 0 ${size} ${size}`} className="h-32 w-32" aria-hidden="true">
      {[0.33, 0.66, 1].map((r) => (
        <polygon
          key={r}
          points={axes
            .map((_, i) => {
              const angle = i * angleStep - Math.PI / 2;
              return `${center + Math.cos(angle) * radius * r},${center + Math.sin(angle) * radius * r}`;
            })
            .join(" ")}
          fill="none"
          stroke="#ffffff14"
        />
      ))}
      <polygon points={points} fill="#5eead433" stroke="#5eead4" strokeWidth="1.5" />
    </svg>
  );
}

const games = ["Spell Bee", "Word Crafter", "Grammar Master", "Vocabulary Wheel", "Synonyms Match", "World Map"];

export default function RiteTutorVisual() {
  return (
    <div className="grid gap-5 lg:grid-cols-2">
      <BrowserFrame title="student.ritetutor.app/dashboard">
        <div className="flex items-center justify-between">
          <div>
            <p className="text-sm font-medium">Welcome back, Example Student</p>
            <p className="text-[11px] text-[var(--color-text-faint)]">Grade 5 · Batch B-12</p>
          </div>
          <Pill tone="info">3 live classes today</Pill>
        </div>

        <div className="mt-4 grid grid-cols-3 gap-2">
          <StatTile label="Courses" value="4" />
          <StatTile label="Achievements" value="18" accent="amber" />
          <StatTile label="Attempts" value="52" accent="blue" />
        </div>

        <div className="mt-5 flex items-center gap-4">
          <RadarChart />
          <div className="flex-1 space-y-1.5">
            <p className="text-[11px] font-semibold text-[var(--color-text-faint)]">SKILL PROGRESS</p>
            <p className="text-xs text-[var(--color-text-dim)]">Vocabulary and Spelling are leading; Grammar is next focus area.</p>
          </div>
        </div>

        <p className="mt-5 text-[11px] font-semibold text-[var(--color-text-faint)]">TODAY</p>
        <div className="mt-2 space-y-2">
          <Row>
            <span className="text-xs text-[var(--color-text-dim)]">Live Class — Reading Comprehension</span>
            <Pill tone="success">10:00 AM</Pill>
          </Row>
          <Row>
            <span className="text-xs text-[var(--color-text-dim)]">Quiz — Parts of Speech</span>
            <Pill>Not started</Pill>
          </Row>
        </div>
      </BrowserFrame>

      <BrowserFrame title="student.ritetutor.app/games">
        <p className="text-sm font-medium">Educational Games</p>
        <p className="mt-1 text-[11px] text-[var(--color-text-faint)]">20 games across vocabulary, spelling &amp; grammar</p>

        <div className="mt-4 grid grid-cols-2 gap-2.5">
          {games.map((g) => (
            <div
              key={g}
              className="flex aspect-[4/3] flex-col justify-between rounded-lg border border-[var(--color-border)] bg-white/[0.02] p-3"
            >
              <span className="h-6 w-6 rounded-md bg-[var(--color-accent-soft)]" aria-hidden="true" />
              <p className="text-xs font-medium text-[var(--color-text)]">{g}</p>
            </div>
          ))}
        </div>

        <p className="mt-4 text-[11px] font-semibold text-[var(--color-text-faint)]">TEACHER VIEW — QUIZ BUILDER</p>
        <Row>
          <span className="text-xs text-[var(--color-text-dim)]">Grammar Quiz — Unit 4</span>
          <Pill tone="warn">Draft</Pill>
        </Row>
      </BrowserFrame>
    </div>
  );
}
