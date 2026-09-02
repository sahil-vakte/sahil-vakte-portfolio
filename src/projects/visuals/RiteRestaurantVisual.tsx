import { BrowserFrame, StatTile, Bar, Pill, Row } from "../../components/mockups/Frames";

export default function RiteRestaurantVisual() {
  return (
    <div className="grid gap-5 lg:grid-cols-2">
      <BrowserFrame title="portal.riterestaurant.app/analytics">
        <div className="flex items-center justify-between">
          <p className="text-sm font-medium">Example Restaurant — Downtown Location</p>
          <Pill tone="success">Open</Pill>
        </div>

        <div className="mt-4 grid grid-cols-3 gap-2">
          <StatTile label="Today's Orders" value="128" />
          <StatTile label="Income" value="•••••" accent="amber" />
          <StatTile label="Avg. Prep Time" value="14m" accent="blue" />
        </div>

        <p className="mt-5 text-[11px] font-semibold text-[var(--color-text-faint)]">DELIVERY STATUS</p>
        <div className="mt-2 space-y-2">
          <Row>
            <span className="text-xs text-[var(--color-text-dim)]">Order #4821 — Uber</span>
            <Pill tone="info">Out for delivery</Pill>
          </Row>
          <Row>
            <span className="text-xs text-[var(--color-text-dim)]">Order #4822 — Pickup</span>
            <Pill tone="success">Ready</Pill>
          </Row>
        </div>

        <p className="mt-5 text-[11px] font-semibold text-[var(--color-text-faint)]">MARKETING — EMAIL CAMPAIGN</p>
        <Row>
          <span className="text-xs text-[var(--color-text-dim)]">Weekend Special — Open Rate</span>
          <div className="w-24">
            <Bar pct={42} accent="amber" />
          </div>
        </Row>
      </BrowserFrame>

      <BrowserFrame title="portal.riterestaurant.app/menu">
        <div className="flex items-center justify-between">
          <p className="text-sm font-medium">Menu Management — Downtown</p>
          <Pill>3 locations</Pill>
        </div>

        <div className="mt-4 space-y-2">
          {[
            { name: "Starters", items: 8 },
            { name: "Mains", items: 14 },
            { name: "Combos & Specials", items: 5 },
            { name: "Desserts", items: 6 },
          ].map((cat) => (
            <div key={cat.name} className="flex items-center justify-between rounded-lg border border-[var(--color-border)] px-3 py-2.5">
              <div className="flex items-center gap-2">
                <span aria-hidden="true" className="text-[var(--color-text-faint)]">⠿</span>
                <span className="text-sm text-[var(--color-text-dim)]">{cat.name}</span>
              </div>
              <span className="font-mono text-xs text-[var(--color-text-faint)]">{cat.items} items</span>
            </div>
          ))}
        </div>

        <p className="mt-5 text-[11px] font-semibold text-[var(--color-text-faint)]">ITEM EDITOR — MARGHERITA PIZZA</p>
        <div className="mt-2 grid grid-cols-3 gap-2">
          <StatTile label="Pickup" value="$11.00" />
          <StatTile label="Delivery" value="$13.50" accent="blue" />
          <StatTile label="Dine-in" value="$12.00" accent="amber" />
        </div>
      </BrowserFrame>
    </div>
  );
}
