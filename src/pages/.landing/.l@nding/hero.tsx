"use client";

import Link from "next/link";
import { ChatBubbleLeftRightIcon, BookOpenIcon, CpuChipIcon } from "@heroicons/react/24/outline";

export default function Hero() {
  return (
    <section className="relative bg-black text-white pt-32 pb-40 overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 flex flex-col lg:flex-row items-start gap-16">
        
        {/* Left: Headline + Subheadline */}
        <div className="max-w-2xl flex flex-col gap-6">
          <h1 className="text-5xl lg:text-7xl font-bold leading-tight tracking-tight">
            Study. Chat. Collaborate. <span className="text-cyan-400">Aether</span>
          </h1>

          <p className="text-xl lg:text-2xl text-white/70 leading-relaxed">
            Aether is the platform where communities chat like Discord while building AI-powered study assistants to answer questions — smart, filtered, and tailored for learning.
          </p>

          <div className="mt-6 flex gap-4">
            <Link
              href="#get-started"
              className="inline-block px-8 py-4 bg-cyan-500 hover:bg-cyan-400 text-black font-semibold rounded-lg transition-colors"
            >
              Get Started
            </Link>
            <Link
              href="#features"
              className="inline-block px-8 py-4 border border-white/30 hover:border-white/50 text-white font-semibold rounded-lg transition-colors"
            >
              Learn More
            </Link>
          </div>
        </div>

        {/* Right: Icons illustration */}
        <div className="flex-1 relative flex justify-center items-center gap-6">
          {/* Gradient abstract shape */}
          <div className="absolute inset-0 -z-10 bg-gradient-to-tr from-cyan-500/20 via-purple-500/20 to-pink-500/20 rounded-3xl blur-3xl" />

          {/* Icons stack */}
          <div className="flex flex-col gap-8">
            <div className="flex items-center gap-4 bg-white/5 p-6 rounded-2xl hover:bg-white/10 transition-colors">
              <ChatBubbleLeftRightIcon className="w-10 h-10 text-cyan-400" />
              <span className="text-lg font-semibold">Real-time Chat</span>
            </div>
            <div className="flex items-center gap-4 bg-white/5 p-6 rounded-2xl hover:bg-white/10 transition-colors">
              <BookOpenIcon className="w-10 h-10 text-purple-400" />
              <span className="text-lg font-semibold">Study Together</span>
            </div>
            <div className="flex items-center gap-4 bg-white/5 p-6 rounded-2xl hover:bg-white/10 transition-colors">
              <CpuChipIcon className="w-10 h-10 text-pink-400" />
              <span className="text-lg font-semibold">Custom AI Assistants</span>
            </div>
          </div>
        </div>
      </div>

      {/* Subtle top glow line */}
      <div className="absolute top-0 left-0 w-full h-[1px] bg-gradient-to-r from-transparent via-white/10 to-transparent" />
    </section>
  );
}
