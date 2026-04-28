"use client";

import Link from "next/link";
import { useState } from "react";

const navLinks = [
  { href: "#home", label: "الرئيسية" },
  { href: "#equipment", label: "المعدات" },
  { href: "#services", label: "الخدمات" },
  { href: "#about", label: "من نحن" },
  { href: "#contact", label: "تواصل معنا" },
];

export function Header() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 w-full border-b border-white/10 bg-[#080C1D]/95 backdrop-blur">
      <div className="mx-auto flex max-w-7xl items-center justify-between px-4 py-3 sm:px-6 lg:px-8">
        <Link href="#home" className="text-lg font-extrabold text-white sm:text-xl">
          السامي
        </Link>

        <nav className="hidden items-center gap-6 md:flex">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="text-sm font-medium text-white/90 transition hover:text-[#F5B82E]"
            >
              {link.label}
            </Link>
          ))}
        </nav>

        <div className="flex items-center gap-3">
          <Link
            href="#contact"
            className="hidden rounded-full bg-[#F5B82E] px-5 py-2 text-sm font-bold text-[#080C1D] transition hover:brightness-105 sm:inline-flex"
          >
            اطلب عرض سعر
          </Link>
          <button
            type="button"
            className="rounded-lg border border-white/20 p-2 text-white md:hidden"
            onClick={() => setIsOpen((prev) => !prev)}
            aria-label="فتح قائمة التنقل"
          >
            <span className="block h-0.5 w-5 bg-white" />
            <span className="my-1 block h-0.5 w-5 bg-white" />
            <span className="block h-0.5 w-5 bg-white" />
          </button>
        </div>
      </div>

      {isOpen && (
        <div className="border-t border-white/10 bg-[#080C1D] px-4 py-3 md:hidden">
          <div className="flex flex-col gap-3">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="text-sm text-white/90"
                onClick={() => setIsOpen(false)}
              >
                {link.label}
              </Link>
            ))}
            <Link
              href="#contact"
              className="mt-1 inline-flex w-fit rounded-full bg-[#F5B82E] px-4 py-2 text-sm font-bold text-[#080C1D]"
            >
              اطلب عرض سعر
            </Link>
          </div>
        </div>
      )}
    </header>
  );
}
