"use client";

import Link from "next/link";
import { useState } from "react";

export default function GlobalHeader() {
  const [searchOpen, setSearchOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 w-full border-b border-custom bg-white/95 backdrop-blur supports-[backdrop-filter]:bg-white/60">
      <div className="container flex h-16 items-center px-4">
        {/* Logo */}
        <div className="mr-8 flex">
          <Link href="/" className="flex items-center space-x-2">
            <div className="flex h-8 w-8 items-center justify-center rounded-md bg-gradient-to-br from-indigo-600 to-indigo-700">
              <span className="text-sm font-bold text-white">E</span>
            </div>
            <span className="hidden font-semibold sm:inline-block">
              Eburon AI
            </span>
          </Link>
        </div>

        {/* Main Navigation */}
        <nav className="flex items-center space-x-6 text-sm font-medium">
          <Link
            href="/docs"
            className="transition-colors hover:text-foreground/80 text-foreground/60"
          >
            Docs
          </Link>
          <Link
            href="/docs/playground"
            className="transition-colors hover:text-foreground/80 text-foreground/60"
          >
            Playground
          </Link>
          <Link
            href="/docs/api-reference"
            className="transition-colors hover:text-foreground/80 text-foreground/60"
          >
            API Reference
          </Link>
        </nav>

        <div className="flex flex-1 items-center justify-between space-x-2 md:justify-end">
          {/* Search */}
          <div className="w-full flex-1 md:w-auto md:flex-none">
            <button
              onClick={() => setSearchOpen(true)}
              className="inline-flex items-center rounded-md text-sm font-medium transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50 border border-input bg-transparent hover:bg-accent hover:text-accent-foreground h-9 px-4 py-2 relative w-full justify-start text-sm text-muted-foreground md:w-40 lg:w-64 border-custom"
            >
              <svg
                className="mr-2 h-4 w-4"
                fill="none"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
              </svg>
              <span className="hidden lg:inline-flex">Search documentation...</span>
              <span className="inline-flex lg:hidden">Search...</span>
              <kbd className="pointer-events-none absolute right-1.5 top-1.5 hidden h-6 select-none items-center gap-1 rounded border bg-muted px-1.5 font-mono text-[10px] font-medium opacity-100 sm:flex">
                <span className="text-xs">⌘</span>K
              </kbd>
            </button>
          </div>

          {/* Ask AI Button */}
          <button
            className="inline-flex items-center justify-center rounded-md text-sm font-medium transition-colors focus-visible:outline-none focus-visible:ring-2 disabled:pointer-events-none disabled:opacity-50 bg-indigo-600 text-white hover:bg-indigo-700 h-9 px-4 py-2"
          >
            <svg
              className="mr-2 h-4 w-4"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z"
              />
            </svg>
            Ask AI
          </button>

          {/* Secondary Links */}
          <nav className="hidden md:flex items-center space-x-4 text-sm">
            <Link
              href="https://discord.gg/eburon"
              className="text-foreground/60 transition-colors hover:text-foreground/80"
              target="_blank"
            >
              Community
            </Link>
            <Link
              href="/blog"
              className="text-foreground/60 transition-colors hover:text-foreground/80"
            >
              Blog
            </Link>
            <Link
              href="/help"
              className="text-foreground/60 transition-colors hover:text-foreground/80"
            >
              Help
            </Link>
          </nav>

          {/* Auth Buttons */}
          <div className="hidden lg:flex items-center space-x-2">
            <Link
              href="/login"
              className="inline-flex items-center justify-center rounded-md text-sm font-medium transition-colors focus-visible:outline-none h-9 px-4 py-2 text-foreground/60 hover:text-foreground/80"
            >
              Log in
            </Link>
            <Link
              href="/signup"
              className="inline-flex items-center justify-center rounded-md text-sm font-medium transition-colors focus-visible:outline-none h-9 px-4 py-2 bg-foreground text-background hover:bg-foreground/90"
            >
              Sign up
            </Link>
          </div>
        </div>
      </div>

      {/* Search Modal - placeholder for now */}
      {searchOpen && (
        <div
          className="fixed inset-0 z-50 bg-black/50"
          onClick={() => setSearchOpen(false)}
        >
          <div className="fixed left-[50%] top-[50%] max-h-[85vh] w-full max-w-2xl translate-x-[-50%] translate-y-[-50%] rounded-lg border bg-white p-6 shadow-lg">
            <h2 className="text-lg font-semibold mb-4">Search Documentation</h2>
            <input
              type="text"
              placeholder="Type to search..."
              className="w-full rounded-md border border-custom px-4 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-indigo-600"
              autoFocus
            />
            <p className="mt-4 text-sm text-muted-foreground">
              Search functionality coming soon...
            </p>
          </div>
        </div>
      )}
    </header>
  );
}
