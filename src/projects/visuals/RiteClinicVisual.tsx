import { PhoneFrame, StatTile, Bar, Pill, Row } from "../../components/mockups/Frames";

export default function RiteClinicVisual() {
  return (
    <div className="grid gap-8 sm:grid-cols-2">
      <PhoneFrame label="Wellness Dashboard">
        <p className="text-xs font-semibold text-[var(--color-text-faint)]">GOOD MORNING, DEMO</p>
        <div className="mt-3 grid grid-cols-2 gap-2">
          <StatTile label="Calories Burned" value="412" />
          <StatTile label="Calories In" value="1,180" accent="amber" />
          <StatTile label="Water" value="1.4L" accent="blue" />
          <StatTile label="Steps" value="6,204" accent="teal" />
        </div>

        <p className="mt-4 text-[11px] font-semibold text-[var(--color-text-faint)]">DAILY GOAL — STEPS</p>
        <div className="mt-1.5">
          <Bar pct={62} />
        </div>

        <p className="mt-4 text-[11px] font-semibold text-[var(--color-text-faint)]">NEXT UP</p>
        <div className="mt-2 space-y-2">
          <Row>
            <span className="text-xs text-[var(--color-text-dim)]">Appointment — Dr. Sarah</span>
            <Pill tone="info">Tomorrow</Pill>
          </Row>
          <Row>
            <span className="text-xs text-[var(--color-text-dim)]">Prescription refill</span>
            <Pill tone="warn">Due</Pill>
          </Row>
        </div>

        <p className="mt-4 text-[11px] font-semibold text-[var(--color-text-faint)]">WALLET</p>
        <Row>
          <span className="text-xs text-[var(--color-text-dim)]">Balance</span>
          <span className="font-mono text-sm text-[var(--color-accent)]">$84.00</span>
        </Row>
      </PhoneFrame>

      <PhoneFrame label="Exercise & Diet">
        <p className="text-xs font-semibold text-[var(--color-text-faint)]">TODAY'S EXERCISES</p>
        <div className="mt-2 space-y-2">
          <Row>
            <span className="text-xs text-[var(--color-text-dim)]">Shoulder Mobility — 3×12</span>
            <Pill tone="success">Done</Pill>
          </Row>
          <Row>
            <span className="text-xs text-[var(--color-text-dim)]">Resistance Band Rows — 3×15</span>
            <Pill>Pending</Pill>
          </Row>
        </div>

        <p className="mt-4 text-[11px] font-semibold text-[var(--color-text-faint)]">MEAL LOG</p>
        <div className="mt-2 space-y-2">
          <Row>
            <span className="text-xs text-[var(--color-text-dim)]">Breakfast — Oats & Berries</span>
            <span className="font-mono text-xs text-[var(--color-text-faint)]">320 kcal</span>
          </Row>
          <Row>
            <span className="text-xs text-[var(--color-text-dim)]">Lunch — Grilled Chicken Bowl</span>
            <span className="font-mono text-xs text-[var(--color-text-faint)]">540 kcal</span>
          </Row>
        </div>

        <p className="mt-4 text-[11px] font-semibold text-[var(--color-text-faint)]">DIET PLAN — MACROS</p>
        <div className="mt-2 space-y-1.5">
          <div className="flex items-center justify-between text-[11px] text-[var(--color-text-faint)]">
            <span>Protein</span>
            <span>72g / 120g</span>
          </div>
          <Bar pct={60} accent="rose" />
        </div>
      </PhoneFrame>
    </div>
  );
}
