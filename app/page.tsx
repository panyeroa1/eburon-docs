import Link from "next/link";

export default function Home() {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen p-8 text-center relative">
      {/* Hero content */}
      <div className="max-w-4xl z-10">
        <h1 className="text-6xl font-bold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-purple-400 via-indigo-400 to-purple-400 animate-gradient">
          Eburon AI API Docs
        </h1>
        <p className="text-xl mb-12 opacity-70 leading-relaxed">
          Comprehensive developer documentation for building with Eburon's AI platform.
          <br />
          Voice synthesis, image generation, and more.
        </p>
        <Link
          href="/docs/best-practices/prompting/eburon-voice-v1"
          className="inline-flex items-center gap-2 px-8 py-4 bg-gradient-to-r from-purple-600 to-indigo-600 rounded-lg font-semibold hover:from-purple-500 hover:to-indigo-500 transition-all transform hover:scale-105 shadow-lg shadow-purple-500/20"
        >
          <span>Get Started</span>
          <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
          </svg>
        </Link>
      </div>

      {/* Decorative gradient orbs */}
      <div className="absolute top-20 left-20 w-96 h-96 bg-purple-500/20 rounded-full blur-3xl animate-pulse"></div>
      <div className="absolute bottom-20 right-20 w-96 h-96 bg-indigo-500/20 rounded-full blur-3xl animate-pulse delay-1000"></div>
    </div>
  );
}
