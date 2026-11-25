import { useEffect, useRef } from "react";

export default function PointerEffects() {
  const ring = useRef<HTMLDivElement>(null);
  const dot = useRef<HTMLDivElement>(null);
  const progress = useRef<HTMLDivElement>(null);
  useEffect(() => {
    const allowed = matchMedia("(hover: hover) and (pointer: fine) and (prefers-reduced-motion: no-preference)");
    let x = -100, y = -100, rx = -100, ry = -100, frame = 0;
    let active: HTMLElement | null = null;
    const reset = () => { if (active) active.style.translate = ""; active = null; };
    function draw() {
      frame = 0;
      rx += (x - rx) * 0.16; ry += (y - ry) * 0.16;
      if (ring.current) ring.current.style.transform = `translate3d(${rx}px,${ry}px,0)`;
      if (dot.current) dot.current.style.transform = `translate3d(${x}px,${y}px,0)`;
      if (Math.abs(x - rx) + Math.abs(y - ry) > 0.1) frame = requestAnimationFrame(draw);
    }
    const move = (event: PointerEvent) => {
      if (!allowed.matches || event.pointerType === "touch") return;
      document.documentElement.classList.add("custom-pointer");
      x = event.clientX; y = event.clientY;
      const target = event.target instanceof Element ? event.target.closest<HTMLElement>("a,button,input,textarea,summary") : null;
      ring.current?.classList.toggle("is-hovering", !!target);
      if (active !== target) reset();
      if (target?.matches(".btn") && !target.matches(":disabled")) {
        active = target;
        const rect = target.getBoundingClientRect();
        target.style.translate = `${(x - rect.left - rect.width / 2) * 0.12}px ${(y - rect.top - rect.height / 2) * 0.12}px`;
      }
      if (!frame) frame = requestAnimationFrame(draw);
    };
    const leave = () => { reset(); document.documentElement.classList.remove("custom-pointer"); };
    const scroll = () => {
      const range = document.documentElement.scrollHeight - innerHeight;
      if (progress.current) progress.current.style.transform = `scaleX(${range > 0 ? Math.min(1, Math.max(0, scrollY / range)) : 0})`;
    };
    window.addEventListener("pointermove", move, { passive: true });
    document.addEventListener("pointerleave", leave);
    window.addEventListener("blur", leave);
    allowed.addEventListener("change", leave);
    window.addEventListener("scroll", scroll, { passive: true });
    window.addEventListener("resize", scroll);
    scroll();
    return () => {
      cancelAnimationFrame(frame); leave();
      window.removeEventListener("pointermove", move);
      document.removeEventListener("pointerleave", leave);
      window.removeEventListener("blur", leave);
      allowed.removeEventListener("change", leave);
      window.removeEventListener("scroll", scroll);
      window.removeEventListener("resize", scroll);
    };
  }, []);
  return <div aria-hidden="true"><div ref={progress} className="scroll-progress" /><div ref={ring} className="cursor-ring" /><div ref={dot} className="cursor-dot" /></div>;
}
