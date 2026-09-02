import { useEffect } from "react";
import { useLocation } from "react-router-dom";

/** Scrolls to an in-page hash on navigation, or to the top on a plain route change. */
export default function ScrollManager() {
  const location = useLocation();

  useEffect(() => {
    if (location.hash) {
      const el = document.getElementById(location.hash.slice(1));
      if (el) {
        // Wait a tick so the target page has rendered.
        requestAnimationFrame(() => el.scrollIntoView({ behavior: "smooth", block: "start" }));
        return;
      }
    }
    window.scrollTo({ top: 0 });
  }, [location.pathname, location.hash]);

  return null;
}
