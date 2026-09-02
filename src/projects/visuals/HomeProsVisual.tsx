import { BrowserFrame, StatTile, Avatar, Pill, Row } from "../../components/mockups/Frames";

export default function HomeProsVisual() {
  return (
    <div className="grid gap-5 lg:grid-cols-2">
      <BrowserFrame title="business.homepros.app/appointments">
        <div className="flex items-center justify-between">
          <p className="text-sm font-medium">Example Cleaning Co. — Business Dashboard</p>
          <Pill tone="success">Verified</Pill>
        </div>

        <div className="mt-4 grid grid-cols-3 gap-2">
          <StatTile label="Appointments" value="24" />
          <StatTile label="Employees" value="9" accent="blue" />
          <StatTile label="Open Leads" value="6" accent="amber" />
        </div>

        <p className="mt-5 text-[11px] font-semibold text-[var(--color-text-faint)]">TODAY'S APPOINTMENTS</p>
        <div className="mt-2 space-y-2">
          <Row>
            <div className="flex items-center gap-2.5">
              <Avatar initials="JT" />
              <span className="text-xs text-[var(--color-text-dim)]">Deep Clean — 142 Example St.</span>
            </div>
            <Pill tone="info">9:00 AM</Pill>
          </Row>
          <Row>
            <div className="flex items-center gap-2.5">
              <Avatar initials="RM" accent="blue" />
              <span className="text-xs text-[var(--color-text-dim)]">HVAC Inspection — Unit 4B</span>
            </div>
            <Pill tone="warn">1:30 PM</Pill>
          </Row>
        </div>

        <p className="mt-5 text-[11px] font-semibold text-[var(--color-text-faint)]">REFERRAL SOURCES</p>
        <Row>
          <span className="text-xs text-[var(--color-text-dim)]">Referral Partner — Example Realty</span>
          <span className="font-mono text-xs text-[var(--color-accent)]">4 leads</span>
        </Row>
      </BrowserFrame>

      <BrowserFrame title="customer.homepros.app/properties">
        <p className="text-sm font-medium">My Properties</p>

        <div className="mt-4 space-y-2.5">
          {[
            { name: "Primary Residence", addr: "142 Example St.", service: "Cleaning · Monthly" },
            { name: "Rental Unit 4B", addr: "8 Sample Ave.", service: "HVAC · Quarterly" },
          ].map((p) => (
            <div key={p.name} className="rounded-lg border border-[var(--color-border)] p-3">
              <div className="flex items-center justify-between">
                <p className="text-sm text-[var(--color-text)]">{p.name}</p>
                <Pill>{p.service}</Pill>
              </div>
              <p className="mt-1 text-[11px] text-[var(--color-text-faint)]">{p.addr}</p>
            </div>
          ))}
        </div>

        <p className="mt-5 text-[11px] font-semibold text-[var(--color-text-faint)]">MEMBERSHIP</p>
        <Row>
          <span className="text-xs text-[var(--color-text-dim)]">Home Care Plus — Annual</span>
          <Pill tone="success">Active</Pill>
        </Row>

        <p className="mt-4 text-[11px] font-semibold text-[var(--color-text-faint)]">BOOK A SERVICE</p>
        <div className="mt-2 grid grid-cols-3 gap-2 text-center">
          {["Cleaning", "Roofing", "Water Mitigation"].map((s) => (
            <div key={s} className="rounded-lg border border-[var(--color-border)] px-2 py-3 text-[11px] text-[var(--color-text-dim)]">
              {s}
            </div>
          ))}
        </div>
      </BrowserFrame>
    </div>
  );
}
