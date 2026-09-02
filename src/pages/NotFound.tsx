import { Link } from "react-router-dom";
import SEO from "../components/SEO";

export default function NotFound() {
  return (
    <div className="container-page flex min-h-[60vh] flex-col items-center justify-center py-24 text-center">
      <SEO title="Page not found | Sahil Vakte" description="The requested page could not be found." path="/404" noIndex />
      <p className="section-eyebrow">404</p>
      <h1 className="mt-3 text-3xl font-semibold">Page not found</h1>
      <p className="mt-3 max-w-md text-[var(--color-text-dim)]">
        The page you're looking for doesn't exist, or has moved.
      </p>
      <div className="mt-6 flex flex-wrap justify-center gap-3">
        <Link to="/" className="btn btn-primary">Back Home</Link>
        <Link to="/work" className="btn btn-secondary">View My Work</Link>
        <Link to="/contact" className="btn btn-ghost">Contact Me</Link>
      </div>
    </div>
  );
}
