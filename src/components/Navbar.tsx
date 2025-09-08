"use client";

import Image from "next/image";
import Link from "next/link";
import { Instagram } from "lucide-react";
import { FaWhatsapp } from "react-icons/fa"; // necesitas instalar react-icons si no lo tenés

export default function Navbar() {
  return (
    <nav className="sticky top-0 z-50 bg-[#F5F0E8]/80 backdrop-blur border-b border-[#E6D9CD]">
      <div className="mx-auto max-w-6xl px-4">
        <div className="flex items-center justify-between ">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-2">
            <Image
              src="/logonav.png" // asegurate que esté en la carpeta /public
              alt="Neuro Conexión"
              width={120}
              height={450}
              priority
            />
          </Link>

          {/* Badges */}
          <div className="flex items-center gap-3">
            {/* Instagram */}
            <Link
              href="https://www.instagram.com/neuroconexion33"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Instagram de Neuro Conexión"
              className="group inline-flex items-center gap-2 rounded-full border border-[#D8CABB] bg-white/70 px-2.5 py-1.5 text-sm text-[#4A3B37] shadow-sm transition-colors hover:bg-[#4A3B37] hover:text-[#F5F0E8]"
            >
              <span className="grid h-6 w-6 place-items-center rounded-full bg-[#4A3B37] text-[#F5F0E8] transition-colors group-hover:bg-[#F5F0E8] group-hover:text-[#4A3B37]">
                <Instagram className="h-3.5 w-3.5" />
              </span>
              <span className="hidden sm:inline font-medium">
                @neuroconexion33
              </span>
            </Link>

            {/* WhatsApp */}
            <Link
              href="https://wa.me/54358446357"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="WhatsApp de Neuro Conexión"
              className="group inline-flex items-center gap-2 rounded-full border border-[#D8CABB] bg-white/70 px-2.5 py-1.5 text-sm text-[#4A3B37] shadow-sm transition-colors hover:bg-green-600 hover:text-white"
            >
              <span className="grid h-6 w-6 place-items-center rounded-full bg-green-600 text-white transition-colors group-hover:bg-white group-hover:text-green-600">
                <FaWhatsapp className="h-4 w-4" />
              </span>
              <span className="hidden sm:inline font-medium">WhatsApp</span>
            </Link>
          </div>
        </div>
      </div>
    </nav>
  );
}
