"use client";

import Image from "next/image";
import Link from "next/link";

export default function Navbar() {
  return (
    <header className="fixed top-0 left-0 w-full z-50 bg-black text-white">
      <div className="max-w-7xl mx-auto px-6 py-6 flex items-center justify-between">
        
        {/* Logo on the left */}
        <Link href="/" className="flex items-center">
          <Image
            src="/logo.svg"
            alt="Bionic"
            width={40}
            height={40}
            priority
            className="transition-transform duration-300 hover:scale-105"
          />
        </Link>

        {/* Sidebar-style nav items on the right */}
        <nav className="flex items-center space-x-10 text-sm uppercase tracking-wider">
          <Link
            href="#platform"
            className="relative group"
          >
            <span className="transition-all duration-300 group-hover:text-cyan-400">
              Platform
            </span>
            <span className="absolute -bottom-1 left-0 h-[2px] w-0 bg-cyan-400 transition-all duration-300 group-hover:w-full" />
          </Link>

          <Link
            href="#features"
            className="relative group"
          >
            <span className="transition-all duration-300 group-hover:text-purple-400">
              Features
            </span>
            <span className="absolute -bottom-1 left-0 h-[2px] w-0 bg-purple-400 transition-all duration-300 group-hover:w-full" />
          </Link>

          <Link
            href="#pricing"
            className="relative group"
          >
            <span className="transition-all duration-300 group-hover:text-pink-400">
              Pricing
            </span>
            <span className="absolute -bottom-1 left-0 h-[2px] w-0 bg-pink-400 transition-all duration-300 group-hover:w-full" />
          </Link>

          <Link
            href="#docs"
            className="relative group"
          >
            <span className="transition-all duration-300 group-hover:text-white/70">
              Docs
            </span>
            <span className="absolute -bottom-1 left-0 h-[2px] w-0 bg-white/70 transition-all duration-300 group-hover:w-full" />
          </Link>
        </nav>
      </div>

      {/* Subtle divider */}
      <div className="h-[1px] w-full bg-gradient-to-r from-transparent via-white/15 to-transparent" />
    </header>
  );
}
