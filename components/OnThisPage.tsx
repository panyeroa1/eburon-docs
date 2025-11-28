"use client";

export default function OnThisPage({ headings }: { headings?: { id: string; text: string; level: number }[] }) {
  // Placeholder - in a real implementation, this would extract headings from the current page
  const defaultHeadings = [
    { id: "overview", text: "Overview", level: 2 },
    { id: "key-features", text: "Key features", level: 2 },
    { id: "getting-started", text: "Getting started", level: 2 },
    { id: "examples", text: "Examples", level: 2 },
    { id: "api-reference", text: "API reference", level: 2 },
  ];

  const items = headings || defaultHeadings;

  return (
    <div className="space-y-2">
      <p className="font-medium text-sm">On this page</p>
      <nav className="flex flex-col space-y-2">
        {items.map((heading) => (
          <a
            key={heading.id}
            href={`#${heading.id}`}
            className={`text-sm transition-colors hover:text-foreground ${
              heading.level === 3 ? "pl-4" : ""
            } text-muted-foreground`}
          >
            {heading.text}
          </a>
        ))}
      </nav>
    </div>
  );
}
