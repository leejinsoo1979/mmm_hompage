import './BrandStoryFrame.css';

export default function BrandStoryFrame() {
  // The embedded brand-story page is a Next.js app: its <Link> intercepts clicks
  // and routes inside the iframe. To make the header logo go to the main site,
  // attach a capture-phase listener (runs before Next's handler) that navigates
  // the top window to home instead.
  const handleLoad = (e) => {
    try {
      const doc = e.target.contentDocument;
      if (!doc) return;
      const toHome = (ev) => {
        ev.preventDefault();
        ev.stopPropagation();
        window.location.assign('/');
      };
      doc.querySelectorAll('a.brandmark').forEach((a) => {
        a.addEventListener('click', toHome, true);
      });
    } catch (_) {
      /* cross-origin or not ready — ignore */
    }
  };

  return (
    <main className="brand-story-frame">
      <iframe
        src="/brand-story/index.html"
        title="made make material brand story"
        onLoad={handleLoad}
      />
    </main>
  );
}
