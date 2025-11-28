import type { ReactNode } from "react";
import Link from "next/link";
import GlobalHeader from "@/components/GlobalHeader";
import OnThisPage from "@/components/OnThisPage";

export default function DocsLayout({ children }: { children: ReactNode }) {
  return (
    <div className="min-h-screen">
      <GlobalHeader />
      
      <div className="flex">
        {/* Left Sidebar - Navigation */}
        <aside className="hidden lg:block w-64 shrink-0 border-r border-custom bg-gray-50/40 sticky top-16 h-[calc(100vh-4rem)] overflow-y-auto">
          <nav className="px-3 py-6 space-y-8">
            {/* Get Started */}
            <div>
              <h4 className="mb-3 text-xs font-semibold uppercase tracking-wider text-foreground/60">
                Get Started
              </h4>
              <div className="space-y-1">
                <Link
                  href="/docs"
                  className="block px-3 py-2 text-sm rounded-md hover:bg-gray-100 transition-colors"
                >
                  Quick Start
                </Link>
                <Link
                  href="/docs/best-practices/prompting/eburon-voice-v1"
                  className="block px-3 py-2 text-sm rounded-md hover:bg-gray-100 transition-colors"
                >
                  Best Practices
                </Link>
              </div>
            </div>

            {/* Build */}
            <div>
              <h4 className="mb-3 text-xs font-semibold uppercase tracking-wider text-foreground/60">
                Build
              </h4>
              <div className="space-y-1">
                <Link
                  href="/docs/playground"
                  className="block px-3 py-2 text-sm rounded-md hover:bg-gray-100 transition-colors font-medium"
                >
                  Playground
                </Link>
                <div className="pl-3 space-y-1">
                  <Link
                    href="/docs/playground/image-editor"
                    className="flex items-center gap-2 px-3 py-2 text-sm rounded-md hover:bg-gray-100 transition-colors"
                  >
                    <span>🎨</span>
                    Image Editor
                  </Link>
                  <Link
                    href="/docs/playground/image-generation"
                    className="flex items-center gap-2 px-3 py-2 text-sm rounded-md hover:bg-gray-100 transition-colors"
                  >
                    <span>🖼️</span>
                    Image Generation
                  </Link>
                  <Link
                    href="/docs/playground/voice-synthesis"
                    className="flex items-center gap-2 px-3 py-2 text-sm rounded-md hover:bg-gray-100 transition-colors"
                  >
                    <span>🗣️</span>
                    Voice Synthesis
                  </Link>
                  <Link
                    href="/docs/playground/chat"
                    className="flex items-center gap-2 px-3 py-2 text-sm rounded-md hover:bg-gray-100 transition-colors"
                  >
                    <span>💬</span>
                    Chat Interface
                  </Link>
                  <Link
                    href="/docs/playground/text-generation"
                    className="flex items-center gap-2 px-3 py-2 text-sm rounded-md hover:bg-gray-100 transition-colors"
                  >
                    <span>✍️</span>
                    Text Generation
                  </Link>
                </div>
              </div>
            </div>

            {/* API Reference */}
            <div>
              <h4 className="mb-3 text-xs font-semibold uppercase tracking-wider text-foreground/60">
                API Reference
              </h4>
              <div className="space-y-1">
                <Link
                  href="/docs/api-reference"
                  className="block px-3 py-2 text-sm rounded-md hover:bg-gray-100 transition-colors"
                >
                  Authentication
                </Link>
                <Link
                  href="/docs/api-reference/endpoints"
                  className="block px-3 py-2 text-sm rounded-md hover:bg-gray-100 transition-colors"
                >
                  Endpoints
                </Link>
              </div>
            </div>

            {/* Resources */}
            <div>
              <h4 className="mb-3 text-xs font-semibold uppercase tracking-wider text-foreground/60">
                Resources
              </h4>
              <div className="space-y-1">
                <Link
                  href="/docs/examples"
                  className="block px-3 py-2 text-sm rounded-md hover:bg-gray-100 transition-colors"
                >
                  Examples
                </Link>
                <Link
                  href="/docs/guides"
                  className="block px-3 py-2 text-sm rounded-md hover:bg-gray-100 transition-colors"
                >
                  Guides
                </Link>
              </div>
            </div>
          </nav>
        </aside>

        {/* Main Content Area */}
        <main className="flex-1 flex">
          <div className="flex-1 max-w-4xl">
            {/* Content */}
            <article className="px-8 py-8 lg:px-12 lg:py-12">
              <div className="prose prose-slate max-w-none">
                {children}
              </div>

              {/* Feedback Widget */}
              <div className="mt-12 pt-8 border-t border-custom">
                <div className="flex items-center gap-4">
                  <span className="text-sm text-foreground/60">Was this page helpful?</span>
                  <div className="flex gap-2">
                    <button className="inline-flex items-center justify-center rounded-md text-sm font-medium transition-colors border border-input bg-transparent hover:bg-accent hover:text-accent-foreground h-9 px-4">
                      Yes
                    </button>
                    <button className="inline-flex items-center justify-center rounded-md text-sm font-medium transition-colors border border-input bg-transparent hover:bg-accent hover:text-accent-foreground h-9 px-4">
                      No
                    </button>
                  </div>
                </div>
              </div>
            </article>
          </div>

          {/* Right Sidebar - On This Page */}
          <aside className="hidden xl:block w-64 shrink-0 border-l border-custom bg-gray-50/40 sticky top-16 h-[calc(100vh-4rem)] overflow-y-auto px-6 py-8">
            <OnThisPage />
          </aside>
        </main>
      </div>
    </div>
  );
}
