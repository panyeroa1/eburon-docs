"use client";

import { useState } from "react";

type MenuItem = {
  id: string;
  label: string;
  description?: string;
  action: () => void;
};

export default function CopyPageMenu() {
  const [open, setOpen] = useState(false);

  const pageUrl =
    typeof window !== "undefined"
      ? window.location.href
      : "https://api.eburon.ai/docs";

  // In a real implementation, inject the raw Markdown via props or data attr.
  const fakeMarkdownPlaceholder =
    "# Prompting Eburon Voice v1 (alpha)\n\n" +
    "_Full page markdown would be injected here from the MDX source._\n";

  const items: MenuItem[] = [
    {
      id: "ask-eburon-ai",
      label: "Ask Eburon Docs AI",
      description: "Chat about this page using Eburon’s assistant.",
      action: () => {
        // Replace with your own docs assistant URL
        window.open(
          `https://api.eburon.ai/docs/assistant?source=${encodeURIComponent(
            pageUrl,
          )}`,
          "_blank",
        );
      },
    },
    {
      id: "copy-markdown",
      label: "Copy page",
      description: "Copy this page as Markdown for LLMs.",
      action: async () => {
        try {
          await navigator.clipboard.writeText(fakeMarkdownPlaceholder);
          alert("Page markdown copied to clipboard.");
        } catch (err) {
          console.error(err);
          alert("Unable to copy markdown. Check browser permissions.");
        }
      },
    },
    {
      id: "copy-url",
      label: "Copy link",
      description: "Copy this page URL.",
      action: async () => {
        try {
          await navigator.clipboard.writeText(pageUrl);
          alert("Page URL copied to clipboard.");
        } catch (err) {
          console.error(err);
          alert("Unable to copy URL.");
        }
      },
    },
    {
      id: "open-chatgpt",
      label: "Open in ChatGPT",
      description: "Ask ChatGPT about this page.",
      action: () => {
        const chatUrl =
          "https://chat.openai.com/?ref=api.eburon.ai&docs=" +
          encodeURIComponent(pageUrl);
        window.open(chatUrl, "_blank");
      },
    },
    {
      id: "open-claude",
      label: "Open in Claude",
      description: "Ask Claude about this page.",
      action: () => {
        const claudeUrl =
          "https://claude.ai/new?source=eburon-docs&url=" +
          encodeURIComponent(pageUrl);
        window.open(claudeUrl, "_blank");
      },
    },
    {
      id: "open-cursor",
      label: "Connect to Cursor",
      description: "Send this page to Cursor for coding.",
      action: () => {
        const cursorUrl =
          "https://www.cursor.com/import?url=" +
          encodeURIComponent(pageUrl);
        window.open(cursorUrl, "_blank");
      },
    },
  ];

  return (
    <div className="relative">
      <button
        type="button"
        onClick={() => setOpen((v) => !v)}
        className="inline-flex items-center gap-2 rounded-md border border-custom bg-[var(--background-elevated)] px-3 py-1.5 text-sm font-medium text-[var(--foreground)] hover:bg-[var(--background-card)] transition-colors"
      >
        <span>Copy page</span>
        <span className="text-xs opacity-50">▾</span>
      </button>

      {open && (
        <div
          className="absolute right-0 mt-2 w-72 rounded-lg border border-custom bg-[var(--background-elevated)]/95 backdrop-blur-xl shadow-xl z-40 overflow-hidden"
          onMouseLeave={() => setOpen(false)}
        >
          <ul className="py-1 text-sm text-[var(--foreground)]">
            {items.map((item) => (
              <li key={item.id}>
                <button
                  type="button"
                  onClick={() => {
                    item.action();
                    setOpen(false);
                  }}
                  className="w-full text-left px-4 py-3 hover:bg-purple-500/10 transition-colors group"
                >
                  <div className="font-medium group-hover:text-purple-400 transition-colors">{item.label}</div>
                  {item.description && (
                    <div className="text-xs opacity-50 group-hover:opacity-70 transition-opacity mt-0.5">
                      {item.description}
                    </div>
                  )}
                </button>
              </li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
}
