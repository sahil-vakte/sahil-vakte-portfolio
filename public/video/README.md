# Cinematic background

Place the owner's real cinematic film at `public/video/portfolio-background.mp4`.
Restart the dev server or rebuild after adding it. The component detects the asset
at build time; when absent or unplayable, the designed crimson orbital background
remains visible without a broken video request. No replacement film is included.

The film never autoplays or loops. Cursor X controls 65% of the sequence and scrolling
through the hero controls 35%; touch devices use scroll alone. A requestAnimationFrame
loop interpolates currentTime by 0.10, waits for pending seeks, and stops when settled,
off screen, paused, or the document is hidden. Reduced-motion users see a static scene.

For responsive seeking, supply a short, web-optimized H.264 MP4 with frequent keyframes
and fast-start metadata. Validate the real file on Safari/iOS as well as Chrome; video
encoding affects seek speed. Use the hero's Pause motion button to stop the scene.
