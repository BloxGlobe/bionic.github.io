"use client";

import Image from "next/image";
import Link from "next/link";

export default function Footer() {
  return (
    <footer className="relative bg-black text-white overflow-hidden">
      {/* Subtle glowing background accent */}
      <div className="absolute inset-0 bg-gradient-to-tr from-cyan-500/10 via-purple-500/10 to-pink-500/10 blur-3xl opacity-30 pointer-events-none" />

      <div className="relative max-w-7xl mx-auto px-6 py-24 flex flex-col lg:flex-row justify-between gap-16">
        
        {/* Left: Brand + statement */}
        <div className="max-w-xl">
          <div className="flex items-center gap-3">
            <Image
              src="/logo.svg"
              alt="Bionic Logo"
              width={48}
              height={48}
              priority
            />
            <span className="text-2xl font-bold tracking-wide">Bionic</span>
          </div>

          <p className="mt-6 text-3xl font-light leading-snug">
            Powering digital systems with <span className="italic">precision</span> and speed.
          </p>
        </div>

        {/* Right: Minimal nav links */}
        <div className="flex flex-col items-end gap-6">
          <Link
            href="#platform"
            className="text-sm uppercase tracking-widest transition-colors hover:text-cyan-400"
          >
            Platform
          </Link>
          <Link
            href="#features"
            className="text-sm uppercase tracking-widest transition-colors hover:text-purple-400"
          >
            Features
          </Link>
          <Link
            href="#pricing"
            className="text-sm uppercase tracking-widest transition-colors hover:text-pink-400"
          >
            Pricing
          </Link>
          <Link
            href="#docs"
            className="text-sm uppercase tracking-widest transition-colors hover:text-white/70"
          >
            Docs
          </Link>

          {/* Bottom copyright */}
          <p className="mt-10 text-xs text-white/40">
            © {new Date().getFullYear()} Bionic. All rights reserved.
          </p>
        </div>
      </div>

      {/* Subtle top divider line */}
      <div className="absolute top-0 left-0 w-full h-[1px] bg-gradient-to-r from-transparent via-white/20 to-transparent" />
    </footer>
  );
}
