import type { ReactNode } from "react";
import Link from "next/link";
import CopyPageMenu from "@/components/CopyPageMenu";

export default function DocsLayout({ children }: { children: ReactNode }) {
  return (
    <div className="min-h-screen flex relative">
      {/* Left sidebar with glassmorphism */}
      <aside className="hidden lg:flex lg:flex-col w-64 border-r border-custom backdrop-blur-xl bg-gradient-to-b from-[rgba(26,26,36,0.8)] to-[rgba(18,18,24,0.8)] sticky top-0 h-screen overflow-y-auto">
        
        {/* Logo/Brand */}
        <div className="px-6 py-6 border-b border-custom">
          <Link href="/docs" className="flex items-center gap-2 group">
            <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-purple-500 to-indigo-600 flex items-center justify-center">
              <span className="text-white font-bold text-sm">E</span>
            </div>
            <div>
              <h1 className="text-base font-semibold bg-clip-text text-transparent bg-gradient-to-r from-purple-400 to-indigo-400 group-hover:from-purple-300 group-hover:to-indigo-300 transition-all">
                Eburon AI
              </h1>
              <p className="text-xs opacity-60">Documentation</p>
            </div>
          </Link>
        </div>

        {/* Navigation */}
        <nav className="flex-1 px-4 py-6 space-y-6">
          {/* Best Practices */}
          <div>
            <h3 className="px-3 mb-2 text-xs font-semibold uppercase tracking-wider opacity-50">
              Best Practices
            </h3>
            <Link
              href="/docs/best-practices/prompting/eburon-voice-v1"
              className="flex items-center gap-2 px-3 py-2 rounded-lg text-sm hover:bg-purple-500/10 transition-all group"
            >
              <span className="opacity-70 group-hover:opacity-100 transition-opacity">
                Prompting Eburon Voice v1
              </span>
            </Link>
          </div>

          {/* Playground */}
          <div>
            <h3 className="px-3 mb-2 text-xs font-semibold uppercase tracking-wider opacity-50">
              Playground
            </h3>
            <div className="space-y-1">
              <Link
                href="/docs/playground"
                className="flex items-center gap-2 px-3 py-2 rounded-lg text-sm hover:bg-purple-500/10 transition-all group"
              >
                <span className="opacity-70 group-hover:opacity-100 transition-opacity">
                  Overview
                </span>
              </Link>
              <Link
                href="/docs/playground/image-editor"
                className="flex items-center gap-2 px-3 py-2 rounded-lg text-sm hover:bg-purple-500/10 transition-all group ml-2"
              >
                <span className="text-lg">🎨</span>
                <span className="opacity-70 group-hover:opacity-100 transition-opacity">
                  Image Editor
                </span>
              </Link>
              <Link
                href="/docs/playground/image-generation"
                className="flex items-center gap-2 px-3 py-2 rounded-lg text-sm hover:bg-purple-500/10 transition-all group ml-2"
              >
                <span className="text-lg">🖼️</span>
                <span className="opacity-70 group-hover:opacity-100 transition-opacity">
                  Image Generation API
                </span>
              </Link>
              <Link
                href="/docs/playground/voice-synthesis"
                className="flex items-center gap-2 px-3 py-2 rounded-lg text-sm hover:bg-purple-500/10 transition-all group ml-2"
              >
                <span className="text-lg">🗣️</span>
                <span className="opacity-70 group-hover:opacity-100 transition-opacity">
                  Voice Synthesis
                </span>
              </Link>
              <Link
                href="/docs/playground/chat"
                className="flex items-center gap-2 px-3 py-2 rounded-lg text-sm hover:bg-purple-500/10 transition-all group ml-2"
              >
                <span className="text-lg">💬</span>
                <span className="opacity-70 group-hover:opacity-100 transition-opacity">
                  Chat Interface
                </span>
              </Link>
              <Link
                href="/docs/playground/text-generation"
                className="flex items-center gap-2 px-3 py-2 rounded-lg text-sm hover:bg-purple-500/10 transition-all group ml-2"
              >
                <span className="text-lg">✍️</span>
                <span className="opacity-70 group-hover:opacity-100 transition-opacity">
                  Text Generation
                </span>
              </Link>
            </div>
          </div>
        </nav>

        {/* Footer */}
        <div className="px-4 py-4 border-t border-custom text-xs opacity-50">
          <p>© 2024 Eburon AI</p>
        </div>
      </aside>

      {/* Main content area */}
      <div className="flex-1 flex flex-col min-h-screen">
        {/* Header with gradient */}
        <header className="sticky top-0 z-10 backdrop-blur-xl bg-gradient-to-r from-[rgba(26,26,36,0.9)] to-[rgba(18,18,24,0.9)] border-b border-custom">
          <div className="flex items-center justify-between px-6 py-4">
            <div className="flex items-center gap-4">
              <h2 className="text-sm font-medium opacity-80">
                API Documentation
              </h2>
            </div>
            <CopyPageMenu />
          </div>
        </header>

        <div className="flex-1 flex">
          {/* Article content */}
          <article className="flex-1 max-w-4xl px-8 py-12 prose prose-invert prose-purple">
            {children}
          </article>

          {/* Table of contents - right sidebar */}
          <aside className="hidden xl:block w-64 border-l border-custom backdrop-blur-xl bg-gradient-to-b from-[rgba(26,26,36,0.4)] to-transparent px-6 py-8 sticky top-16 h-[calc(100vh-4rem)] overflow-y-auto">
            <h3 className="text-xs font-semibold uppercase tracking-wider opacity-50 mb-4">
              On this page
            </h3>
            <nav className="space-y-2 text-sm">
              <a href="#voice-selection" className="block py-1 opacity-70 hover:opacity-100 hover:text-purple-400 transition-all">
                Voice selection
              </a>
              <a href="#settings" className="block py-1 opacity-70 hover:opacity-100 hover:text-purple-400 transition-all">
                Settings
              </a>
              <a href="#audio-tags" className="block py-1 opacity-70 hover:opacity-100 hover:text-purple-400 transition-all">
                Audio tags
              </a>
              <a href="#punctuation" className="block py-1 opacity-70 hover:opacity-100 hover:text-purple-400 transition-all">
                Punctuation
              </a>
              <a href="#single-speaker" className="block py-1 opacity-70 hover:opacity-100 hover:text-purple-400 transition-all">
                Single speaker
              </a>
              <a href="#multi-speaker" className="block py-1 opacity-70 hover:opacity-100 hover:text-purple-400 transition-all">
                Multi-speaker
              </a>
              <a href="#enhancing-input" className="block py-1 opacity-70 hover:opacity-100 hover:text-purple-400 transition-all">
                Enhancing input
              </a>
              <a href="#tips" className="block py-1 opacity-70 hover:opacity-100 hover:text-purple-400 transition-all">
                Tips
              </a>
            </nav>
          </aside>
        </div>
      </div>
    </div>
  );
}
