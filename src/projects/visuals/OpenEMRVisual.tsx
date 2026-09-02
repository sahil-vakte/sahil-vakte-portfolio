import { BrowserFrame, StatTile, Bar, Avatar, Pill, Row, SkeletonLine } from "../../components/mockups/Frames";

export default function OpenEMRVisual() {
  return (
    <div className="grid gap-5 lg:grid-cols-2">
      <BrowserFrame title="patient.riteclinic.app/dashboard">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-2.5">
            <Avatar initials="DP" />
            <div>
              <p className="text-sm font-medium">Demo Patient</p>
              <p className="text-[11px] text-[var(--color-text-faint)]">Member since 2024</p>
            </div>
          </div>
          <Pill tone="success">Active</Pill>
        </div>

        <div className="mt-4 grid grid-cols-3 gap-2">
          <StatTile label="Next Appointment" value="Sep 12" />
          <StatTile label="Active Rx" value="2" accent="blue" />
          <StatTile label="Lab Reports" value="3 New" accent="amber" />
        </div>

        <p className="mt-5 text-xs font-semibold text-[var(--color-text-faint)]">UPCOMING APPOINTMENT</p>
        <Row>
          <div className="flex items-center gap-2.5">
            <Avatar initials="SK" accent="blue" />
            <div>
              <p className="text-sm">Dr. Sarah — Virtual Consultation</p>
              <p className="text-[11px] text-[var(--color-text-faint)]">Thu, Sep 12 · 10:30 AM</p>
            </div>
          </div>
          <Pill tone="info">Zoom</Pill>
        </Row>

        <p className="mt-4 text-xs font-semibold text-[var(--color-text-faint)]">MEDICAL RECORDS</p>
        <div className="mt-2 space-y-2">
          <Row>
            <span className="text-sm text-[var(--color-text-dim)]">Allergy Panel — Result</span>
            <Pill>PDF</Pill>
          </Row>
          <Row>
            <span className="text-sm text-[var(--color-text-dim)]">Prescription — Amoxicillin</span>
            <Pill tone="success">Active</Pill>
          </Row>
        </div>
      </BrowserFrame>

      <BrowserFrame title="provider.riteclinic.app/encounter/4821">
        <div className="flex items-center justify-between">
          <div>
            <p className="text-sm font-medium">Clinical Encounter — SOAP Note</p>
            <p className="text-[11px] text-[var(--color-text-faint)]">Patient: Demo Patient · Dr. Sarah</p>
          </div>
          <Pill tone="warn">Draft</Pill>
        </div>

        <div className="mt-4 space-y-3">
          {["Subjective", "Objective", "Assessment", "Plan"].map((s) => (
            <div key={s}>
              <p className="mb-1.5 text-[11px] font-semibold text-[var(--color-accent)]">{s.toUpperCase()}</p>
              <SkeletonLine w="95%" />
              <div className="mt-1.5">
                <SkeletonLine w="70%" />
              </div>
            </div>
          ))}
        </div>

        <p className="mt-5 text-xs font-semibold text-[var(--color-text-faint)]">DYNAMIC FORMS</p>
        <div className="mt-2 flex flex-wrap gap-1.5">
          <Pill tone="success">Consent — Signed</Pill>
          <Pill tone="success">Intake — Complete</Pill>
          <Pill tone="warn">Post-Treatment — Pending</Pill>
        </div>

        <p className="mt-5 text-xs font-semibold text-[var(--color-text-faint)]">PRESCRIPTION — WENO PHARMACY</p>
        <Row>
          <span className="text-sm text-[var(--color-text-dim)]">Amoxicillin 500mg · 3x daily</span>
          <div className="w-24">
            <Bar pct={70} accent="blue" />
          </div>
        </Row>
      </BrowserFrame>
    </div>
  );
}
