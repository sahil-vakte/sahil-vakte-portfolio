import { BrowserFrame, Pill, Row } from "../../components/mockups/Frames";

export default function InstantDeliveryVisual() {
  return (
    <div className="grid gap-5 lg:grid-cols-2">
      <BrowserFrame title="order.example-restaurant.com/menu">
        <div className="flex items-center justify-between">
          <p className="text-sm font-medium">Example Restaurant — Digital Menu</p>
          <Pill tone="info">Delivery · 2.1 mi</Pill>
        </div>

        <div className="mt-4 space-y-2.5">
          {[
            { name: "Classic Cheeseburger", note: "No onions · Extra pickle", price: "$9.50" },
            { name: "Loaded Fries — Combo", note: "Combo with Regular Fries", price: "$12.00" },
            { name: "Iced Tea", note: "Large", price: "$3.25" },
          ].map((item) => (
            <div key={item.name} className="flex items-center justify-between rounded-lg border border-[var(--color-border)] p-3">
              <div>
                <p className="text-sm text-[var(--color-text)]">{item.name}</p>
                <p className="mt-0.5 text-[11px] text-[var(--color-text-faint)]">{item.note}</p>
              </div>
              <span className="font-mono text-sm text-[var(--color-accent)]">{item.price}</span>
            </div>
          ))}
        </div>

        <p className="mt-5 text-[11px] font-semibold text-[var(--color-text-faint)]">EMBEDDABLE CONFIGURATION</p>
        <div className="mt-2 flex flex-wrap gap-1.5">
          <Pill>Theme: Example Restaurant</Pill>
          <Pill>Route: /order</Pill>
          <Pill>iframe-ready</Pill>
        </div>
      </BrowserFrame>

      <BrowserFrame title="order.example-restaurant.com/checkout">
        <p className="text-sm font-medium">Checkout</p>

        <div className="mt-4 space-y-2">
          <Row>
            <span className="text-xs text-[var(--color-text-dim)]">Subtotal</span>
            <span className="font-mono text-xs">$24.75</span>
          </Row>
          <Row>
            <span className="text-xs text-[var(--color-text-dim)]">Promo — WELCOME10</span>
            <span className="font-mono text-xs text-[var(--color-accent)]">-$2.48</span>
          </Row>
          <Row>
            <span className="text-xs text-[var(--color-text-dim)]">Delivery Quote</span>
            <span className="font-mono text-xs">$4.20</span>
          </Row>
          <Row>
            <span className="text-xs text-[var(--color-text-dim)]">Tax</span>
            <span className="font-mono text-xs">$1.90</span>
          </Row>
          <Row>
            <span className="text-sm font-medium">Total</span>
            <span className="font-mono text-sm font-semibold text-[var(--color-accent)]">$28.37</span>
          </Row>
        </div>

        <p className="mt-4 text-[11px] font-semibold text-[var(--color-text-faint)]">PAYMENT</p>
        <div className="mt-2 flex gap-2">
          <Pill tone="info">Stripe</Pill>
          <Pill>Cash on Delivery</Pill>
        </div>

        <p className="mt-4 text-[11px] font-semibold text-[var(--color-text-faint)]">ORDER TRACKING</p>
        <div className="mt-2 flex items-center gap-1.5 text-[11px] text-[var(--color-text-faint)]">
          <span className="rounded-full bg-[var(--color-accent)] px-2 py-0.5 text-[10px] font-medium text-[#04141f]">Placed</span>
          <span>→</span>
          <span className="rounded-full bg-white/[0.06] px-2 py-0.5 text-[10px]">Preparing</span>
          <span>→</span>
          <span className="rounded-full bg-white/[0.06] px-2 py-0.5 text-[10px]">Out for Delivery</span>
        </div>
      </BrowserFrame>
    </div>
  );
}
