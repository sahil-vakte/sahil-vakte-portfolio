import { primaryResumePath } from "../data/config";
import { IconDownload } from "./Icons";

export default function ResumeMenu({ variant = "primary" }: { variant?: "primary" | "secondary" | "ghost" }) {
  const btnClass = variant === "primary" ? "btn btn-primary" : variant === "secondary" ? "btn btn-secondary" : "btn btn-ghost";

  return (
    <a href={primaryResumePath} download="Sahil_Vakte_Resume.pdf" className={btnClass}>
        <IconDownload className="h-4 w-4" />
        Download Resume
    </a>
  );
}
