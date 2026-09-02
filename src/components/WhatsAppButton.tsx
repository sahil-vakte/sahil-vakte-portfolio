import { whatsappHref } from "../data/config";
import { IconWhatsapp } from "./Icons";

export default function WhatsAppButton({ className = "btn btn-whatsapp" }: { className?: string }) {
  return (
    <a href={whatsappHref()} target="_blank" rel="noopener noreferrer" className={className}>
      <IconWhatsapp className="h-4 w-4" />
      Chat on WhatsApp
    </a>
  );
}
