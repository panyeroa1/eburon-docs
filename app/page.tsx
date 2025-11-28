import Link from "next/link";
import GlobalHeader from "@/components/GlobalHeader";

export default function Home() {
  return (
    <div className="min-h-screen flex flex-col">
      <GlobalHeader />
      
      {/* Hero Section */}
      <main className="flex-1 flex flex-col items-center justify-center px-4 py-20 text-center">
        <div className="max-w-3xl">
          <h1 className="text-5xl font-bold text-foreground mb-6">
            Eburon AI Developer Documentation
          </h1>
          <p className="text-xl text-foreground/60 mb-12 leading-relaxed">
            Build powerful AI applications with our comprehensive API documentation, 
            interactive playground, and developer resources.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/docs"
              className="inline-flex items-center justify-center rounded-md text-sm font-medium transition-colors h-11 px-8 bg-foreground text-background hover:bg-foreground/90"
            >
              Get Started
            </Link>
            <Link
              href="/docs/playground"
              className="inline-flex items-center justify-center rounded-md text-sm font-medium transition-colors h-11 px-8 border border-input bg-transparent hover:bg-accent hover:text-accent-foreground"
            >
              Try Playground
            </Link>
          </div>
        </div>

        {/* Feature Cards */}
        <div className="mt-24 grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl">
          <div className="p-6 rounded-lg border bg-card text-card-foreground">
            <div className="mb-4 text-3xl">📚</div>
            <h3 className="text-lg font-semibold mb-2">Comprehensive Docs</h3>
            <p className="text-sm text-muted-foreground">
              Clear, concise documentation with real-world examples and best practices.
            </p>
          </div>
          
          <div className="p-6 rounded-lg border bg-card text-card-foreground">
            <div className="mb-4 text-3xl">🎮</div>
            <h3 className="text-lg font-semibold mb-2">Interactive Playground</h3>
            <p className="text-sm text-muted-foreground">
              Test AI models directly in your browser with our interactive tools.
            </p>
          </div>
          
          <div className="p-6 rounded-lg border bg-card text-card-foreground">
            <div className="mb-4 text-3xl">🚀</div>
            <h3 className="text-lg font-semibold mb-2">Production Ready</h3>
            <p className="text-sm text-muted-foreground">
              Enterprise-grade APIs with reliability, scalability, and support.
            </p>
          </div>
        </div>
      </main>
    </div>
  );
}
