"use client";

import Link from "next/link";
import { useEffect, useState } from "react";
import { Menu, X } from "lucide-react";

const links = [
  { title: "Home", href: "#home" },
  { title: "Impact", href: "#executive-impact" },
  { title: "Career", href: "#career" },
  { title: "Education", href: "#education" },
  { title: "Leadership", href: "#leadership" },
  { title: "Contact", href: "#contact" },
];

export default function Navbar() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("home");

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveSection(entry.target.id);
          }
        });
      },
      {
        threshold: 0.5,
      }
    );

    const ids = [
      "home",
      "executive-impact",
      "career",
      "education",
      "leadership",
      "contact",
    ];

    ids.forEach((id) => {
      const element = document.getElementById(id);

      if (element) {
        observer.observe(element);
      }
    });

    return () => observer.disconnect();
  }, []);

  return (
    <header
      className="
        fixed
        top-0
        left-0
        w-full
        z-50
        bg-white/90
        backdrop-blur-xl
        border-b
        border-slate-200/80
        shadow-sm
        transition-all
        duration-300
      "
    >

      <div className="container flex items-center justify-between h-24">

        <Link href="#home" className="flex flex-col leading-none">

          <span className="text-xl font-semibold text-[#0B2545]">
            Wilhelm Hitz
          </span>

          <span className="mt-2 text-xs uppercase tracking-[0.25em] text-slate-500">
            Managing Director
          </span>

        </Link>


        <nav className="hidden lg:flex items-center gap-8">

          {links.map((item) => {

            const active =
              activeSection === item.href.substring(1);

            return (

              <Link
                key={item.href}
                href={item.href}
                className="relative py-2 group"
              >

                <span
                  className={`text-sm uppercase tracking-[0.18em] transition-colors ${
                    active
                      ? "text-[#B08D57]"
                      : "text-slate-600 hover:text-slate-900"
                  }`}
                >
                  {item.title}
                </span>


                <span
                  className={`absolute left-0 -bottom-1 h-[2px] bg-[#B08D57] transition-all duration-300 ${
                    active
                      ? "w-full"
                      : "w-0 group-hover:w-full"
                  }`}
                />

              </Link>

            );

          })}


          <a
            href="/files/Wilhelm Hitz - Executive CV - July 2026.pdf"
            target="_blank"
            rel="noopener noreferrer"
            className="button-primary"
          >
            Complete CV
          </a>


        </nav>


        <button
          className="lg:hidden text-[#0B2545]"
          onClick={() => setMobileOpen(!mobileOpen)}
          aria-label="Open menu"
        >
          {mobileOpen ? <X size={28} /> : <Menu size={28} />}
        </button>


      </div>


      {mobileOpen && (

        <div className="lg:hidden bg-white border-t border-slate-200">

          <div className="container py-8 flex flex-col gap-6">

            {links.map((item) => (

              <Link
                key={item.href}
                href={item.href}
                onClick={() => setMobileOpen(false)}
                className={`text-lg ${
                  activeSection === item.href.substring(1)
                    ? "text-[#B08D57]"
                    : "text-slate-700"
                }`}
              >

                {item.title}

              </Link>

            ))}


            <a
              href="/files/Wilhelm Hitz - Executive CV - July 2026.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="button-primary"
            >
              Download Executive CV
            </a>


          </div>

        </div>

      )}

    </header>
  );
}