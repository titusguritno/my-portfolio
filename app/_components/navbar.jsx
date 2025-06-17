"use client";

import { useState } from "react";
import { Menu, X } from "lucide-react";
import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const pathname = usePathname();

  const navItems = [
    { label: "Home", href: "/" },
    { label: "About", href: "/about" },
    { label: "Experience", href: "/experience" },
    { label: "Projects", href: "/projects" },
  ];

  const isActive = (href) => pathname === href;

  return (
    <header className="bg-gradient-to-r from-[#1a1d23] to-[#2f343a] text-white w-full z-50 fixed pt-0">
      <div className="max-w-6xl mx-auto px-6 py-4 flex justify-between items-center">
        {/* Logo */}
        <Link href="/" className="text-2xl font-bold text-[#66d9ef]">
          <Image
            src="/images/logo.png"
            alt="Profile"
            width={100}
            height={100}
            className="rounded-full"
          />
        </Link>

        {/* Desktop Menu */}
        <nav className="hidden md:flex space-x-6">
          {navItems.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className={`transition-colors ${
                isActive(item.href)
                  ? "text-[#66d9ef] font-semibold"
                  : "hover:text-[#66d9ef]"
              }`}
            >
              <span className="text-lg font-medium">{item.label}</span>
            </Link>
          ))}
        </nav>

        {/* Mobile Menu Toggle */}
        <button
          className="md:hidden"
          onClick={() => setIsOpen(!isOpen)}
          aria-label="Toggle menu"
        >
          {isOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <nav className="md:hidden bg-gradient-to-r from-[#1a1d23] to-[#2f343a] px-6 pb-4 space-y-4">
          {navItems.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              onClick={() => setIsOpen(false)}
              className={`block transition-colors ${
                isActive(item.href)
                  ? "text-[#66d9ef] font-semibold"
                  : "text-white hover:text-[#66d9ef]"
              }`}
            >
              <span className="text-lg font-medium">{item.label}</span>
            </Link>
          ))}
        </nav>
      )}
    </header>
  );
}
