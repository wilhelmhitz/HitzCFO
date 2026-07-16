"use client";

import Link from "next/link";
import { useEffect, useState } from "react";
import { Menu, X } from "lucide-react";

const links = [
  { title: "Leadership", href: "#leadership" },
  { title: "Transformation", href: "#transformation" },
  { title: "Experience", href: "#career" },
  { title: "Insights", href: "#insights" },
  { title: "Contact", href: "#contact" },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 40);
    };

    handleScroll();

    window.addEventListener("scroll", handleScroll);

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 w-full z-50 transition-all duration-500 ${
        scrolled
          ? "backdrop-blur-xl bg-white/80 border-b border-slate-200 shadow-sm"
          : "bg-transparent"
      }`}
    >
      <div className="container flex items-center justify-between h-24">

        {/* Logo */}

        <Link
          href="/"
          className="flex flex-col leading-none"
        >
          <span className="text-xl font-semibold tracking-tight">
            Wilhelm Hitz
          </span>

          <span className="text-xs uppercase tracking-[0.25em] text-slate-500 mt-2">
            Managing Director
          </span>
        </Link>

        {/* Desktop */}

        <nav className="hidden lg:flex items-center gap-10">

          {links.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className="text-sm tracking-wide text-slate-600 hover:text-slate-900 transition"
            >
              {item.title}
            </Link>
          ))}

          <a
            href="/files/Wilhelm_Hitz_Executive_CV.pdf"
            className="button-primary"
          >
            Executive CV
          </a>

        </nav>

        {/* Mobile */}

        <button
          className="lg:hidden"
          onClick={() => setMobileOpen(!mobileOpen)}
        >
          {mobileOpen ? (
            <X size={28} />
          ) : (
            <Menu size={28} />
          )}
        </button>

      </div>

      {/* Mobile Menu */}

      {mobileOpen && (

        <div className="lg:hidden bg-white border-t border-slate-200">

          <div className="container py-8 flex flex-col gap-8">

            {links.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                onClick={() => setMobileOpen(false)}
                className="text-lg text-slate-700"
              >
                {item.title}
              </Link>
            ))}

            <a
              href="/files/Wilhelm_Hitz_Executive_CV.pdf"
              className="button-primary w-full"
            >
              Download Executive CV
            </a>

          </div>

        </div>

      )}
    </header>
  );
}