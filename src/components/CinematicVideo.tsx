import { useEffect, useRef, useState } from "react";

// Vite only includes this URL when the real asset exists. No failed media request
// or invented replacement footage when the owner has not supplied the film.
const films = import.meta.glob("/public/video/portfolio-background.mp4", { query: "?url", import: "default", eager: true });
const filmAvailable = Object.keys(films).length > 0;

export default function CinematicVideo() {
  const stage = useRef<HTMLDivElement>(null);
  const video = useRef<HTMLVideoElement>(null);
  const glow = useRef<HTMLDivElement>(null);
  const [failed, setFailed] = useState(false);
  const [paused, setPaused] = useState(false);

  useEffect(() => {
    const element = stage.current;
    const media = video.current;
    if (!element) return;
    const root = element;
    const reduced = matchMedia("(prefers-reduced-motion: reduce)");
    const fine = matchMedia("(hover: hover) and (pointer: fine)");
    let x = 0.5, y = 0.5, sx = 0.5, sy = 0.5, scroll = 0, frame = 0;
    let visible = true;
    // Map the visible hero traversal to the sequence; a long project page
    // should not make scroll input imperceptible while the film is on screen.
    const measure = () => { scroll = Math.max(0, Math.min(1, window.scrollY / Math.max(1, root.parentElement?.offsetHeight ?? innerHeight))); wake(); };
    const move = (event: PointerEvent) => {
      if (!fine.matches || event.pointerType === "touch") return;
      x = event.clientX / innerWidth;
      y = event.clientY / innerHeight;
      wake();
    };
    function tick() {
      frame = 0;
      if (!visible || document.hidden || reduced.matches || paused) return;
      sx += (x - sx) * 0.10;
      sy += (y - sy) * 0.10;
      const intensity = fine.matches ? 1 : 0.2;
      root.style.transform = `perspective(1200px) translate3d(${(sx - 0.5) * 18 * intensity}px,${(sy - 0.5) * 12 * intensity}px,0) rotateX(${(0.5 - sy) * 3 * intensity}deg) rotateY(${(sx - 0.5) * 5 * intensity}deg) scale(1.06)`;
      if (glow.current) glow.current.style.transform = `translate3d(${sx * innerWidth - 300}px,${sy * innerHeight - 300}px,0)`;
      let seeking = false;
      if (media && !failed && media.readyState >= 2 && Number.isFinite(media.duration) && media.duration > 0) {
        const progress = fine.matches ? sx * 0.65 + scroll * 0.35 : scroll;
        const targetTime = progress * Math.max(0, media.duration - 0.04);
        seeking = Math.abs(targetTime - media.currentTime) > 0.025;
        // Let a seek decode before requesting another frame from the media engine.
        if (seeking && !media.seeking) media.currentTime += (targetTime - media.currentTime) * 0.10;
      }
      if (seeking || Math.abs(x - sx) + Math.abs(y - sy) > 0.001) frame = requestAnimationFrame(tick);
    }
    function wake() { if (!frame && visible && !document.hidden && !reduced.matches && !paused) frame = requestAnimationFrame(tick); }
    const preference = () => {
      if (reduced.matches) { cancelAnimationFrame(frame); frame = 0; root.style.transform = ""; }
      else wake();
    };
    const observer = new IntersectionObserver(([entry]) => { visible = entry.isIntersecting; wake(); });
    observer.observe(root);
    window.addEventListener("pointermove", move, { passive: true });
    window.addEventListener("scroll", measure, { passive: true });
    window.addEventListener("resize", measure);
    document.addEventListener("visibilitychange", wake);
    reduced.addEventListener("change", preference);
    media?.addEventListener("loadeddata", wake);
    measure();
    return () => {
      cancelAnimationFrame(frame);
      observer.disconnect();
      window.removeEventListener("pointermove", move);
      window.removeEventListener("scroll", measure);
      window.removeEventListener("resize", measure);
      document.removeEventListener("visibilitychange", wake);
      reduced.removeEventListener("change", preference);
      media?.removeEventListener("loadeddata", wake);
    };
  }, [paused, failed]);

  return <>
    <div className="cinema-stage" ref={stage} aria-hidden="true">
      <div className="cinema-orbit orbit-one" /><div className="cinema-orbit orbit-two" /><div className="cinema-orbit orbit-three" />
      {filmAvailable && !failed && <video ref={video} className="cinema-video" src="/video/portfolio-background.mp4" muted playsInline preload="auto" onError={() => setFailed(true)} tabIndex={-1} />}
      <div className="cinema-glow" ref={glow} />
    </div>
    <div className="cinema-vignette" aria-hidden="true" /><div className="cinema-texture" aria-hidden="true" />
    <button className="cinema-toggle" type="button" aria-pressed={paused} onClick={() => setPaused(value => !value)}>{paused ? "Resume motion +" : "Pause motion Ⅱ"}</button>
  </>;
}
