import { Instagram } from "lucide-react";
import Link from "next/link";

export default function Navbar() {
  return (
    <nav className="flex items-center p-4">
      <div className="flex-1" />
      <h1 className="text-lg font-semibold text-center">Neuro Conexion</h1>
      <div className="flex-1 flex justify-end">
        <Link
          href="https://www.instagram.com/neuroconexion"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="Instagram"
          className="group"
        >
          <Instagram className="w-6 h-6 text-[#4A3B37] transition-transform duration-300 group-hover:scale-110" />
        </Link>
      </div>
    </nav>
  );
}
