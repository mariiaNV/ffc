"use client";

import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import { Menu, X, Phone } from "lucide-react";

import { Container } from "@/components/Container";
import { getPublicAssetPath, site } from "@/lib/site";

const navItems = [
  { href: "/#pro-nas", label: "Про нас" },
  { href: "/#poslugy", label: "Послуги" },
  { href: "/#etapy", label: "Етапи" },
  { href: "/#perevagy", label: "Переваги" },
  { href: "/#dezinsekciya", label: "Дезінсекція" },
  { href: "/#kontakty", label: "Контакти" },
];

export function SiteHeader() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 w-full border-b border-emerald-200/60 bg-white/85 backdrop-blur-xl shadow-[0_4px_20px_rgba(0,0,0,0.04)]">
      <Container className="flex h-20 items-center justify-between gap-4 xl:h-24">
        {/* LOGO */}
        <Link
          href="/"
          className="group relative flex shrink-0 items-center"
        >
          <Image
            src={getPublicAssetPath("/logo.png")}
            alt={`Логотип ${site.name}`}
            width={900}
            height={500}
            priority
            className="
              h-16
              w-auto
              max-w-[220px]
              object-contain
              transition-all
              duration-300
              group-hover:scale-[1.03]
              group-hover:drop-shadow-[0_8px_20px_rgba(16,185,129,0.25)]

              sm:h-20
              sm:max-w-[280px]

              md:h-24
              md:max-w-[340px]

              xl:h-28
              xl:max-w-[420px]
            "
          />
        </Link>

        {/* DESKTOP NAV */}
        <nav className="hidden items-center gap-1 lg:flex">
          {navItems.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className="
                rounded-full
                px-4
                py-2
                text-sm
                font-medium
                text-zinc-700
                transition-all
                duration-200
                hover:bg-emerald-100
                hover:text-emerald-900
              "
            >
              {item.label}
            </Link>
          ))}
        </nav>

        {/* RIGHT SIDE */}
        <div className="flex items-center gap-2 sm:gap-3">
          {/* PHONE */}
          <a
            href={`tel:${site.phoneTel}`}
            className="
              hidden
              items-center
              gap-2
              rounded-full
              border
              border-emerald-200
              bg-white
              px-4
              py-2.5
              text-sm
              font-semibold
              text-zinc-900
              shadow-sm
              transition-all
              duration-200
              hover:border-emerald-300
              hover:bg-emerald-50
              hover:shadow-md
              md:inline-flex
            "
          >
            <Phone className="h-4 w-4 text-emerald-700" />
            {site.phoneDisplay}
          </a>

          {/* CTA BUTTON */}
          <Link
            href="/#kontakty"
            className="
              inline-flex
              items-center
              justify-center
              rounded-full
              bg-emerald-700
              px-4
              py-2.5
              text-sm
              font-semibold
              text-white
              shadow-lg
              shadow-emerald-700/20
              transition-all
              duration-200
              hover:scale-[1.03]
              hover:bg-emerald-800
              hover:shadow-emerald-700/30

              sm:px-5
            "
          >
            Консультація
          </Link>

          {/* MOBILE MENU BUTTON */}
          <button
            type="button"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="
              inline-flex
              items-center
              justify-center
              rounded-full
              border
              border-zinc-200
              bg-white
              p-2.5
              text-zinc-800
              shadow-sm
              transition-all
              duration-200
              hover:bg-zinc-100
              lg:hidden
            "
            aria-label="Відкрити меню"
          >
            {mobileMenuOpen ? (
              <X className="h-5 w-5" />
            ) : (
              <Menu className="h-5 w-5" />
            )}
          </button>
        </div>
      </Container>

      {/* MOBILE MENU */}
      <div
        className={`
          overflow-hidden
          border-t
          border-emerald-100
          bg-white/95
          backdrop-blur-xl
          transition-all
          duration-300
          lg:hidden

          ${
            mobileMenuOpen
              ? "max-h-[500px] opacity-100"
              : "max-h-0 opacity-0"
          }
        `}
      >
        <Container className="flex flex-col gap-2 py-5">
          {navItems.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              onClick={() => setMobileMenuOpen(false)}
              className="
                rounded-2xl
                px-4
                py-3
                text-base
                font-medium
                text-zinc-700
                transition-all
                duration-200
                hover:bg-emerald-50
                hover:text-emerald-900
              "
            >
              {item.label}
            </Link>
          ))}

          <a
            href={`tel:${site.phoneTel}`}
            className="
              mt-3
              flex
              items-center
              justify-center
              gap-2
              rounded-2xl
              border
              border-emerald-200
              bg-emerald-50
              px-4
              py-3
              text-base
              font-semibold
              text-emerald-900
            "
          >
            <Phone className="h-5 w-5" />
            {site.phoneDisplay}
          </a>
        </Container>
      </div>
    </header>
  );
}
