import type { ReactNode } from "react";
import "./globals.css";

export const metadata = {
  title: "Eburon AI API Docs",
  description: "Developer documentation for api.eburon.ai",
};

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="en" className="h-full">
      <body className="h-full antialiased">
        {children}
      </body>
    </html>
  );
}

