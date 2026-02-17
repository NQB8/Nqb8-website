import type React from "react"
import { ArrowLeft } from "lucide-react"

interface LegalLayoutProps {
  title: string
  lastUpdated: string
  children: React.ReactNode
}

export default function LegalLayout({ title, lastUpdated, children }: LegalLayoutProps) {
  return (
    <div className="min-h-screen bg-[#0a0a0a]">
      <header className="border-b border-white/10 bg-black/50 backdrop-blur-sm sticky top-0 z-50">
        <div className="max-w-4xl mx-auto px-6 py-4">
          <a
            href="/"
            className="inline-flex items-center gap-2 text-white/60 hover:text-white transition-colors text-sm"
          >
            <ArrowLeft className="w-4 h-4" />
            Back to home
          </a>
        </div>
      </header>

      <main className="max-w-4xl mx-auto px-6 py-12">
        <div className="mb-8">
          <h1 className="text-4xl font-bold text-white mb-2">{title}</h1>
          <p className="text-white/40 text-sm">Last updated: {lastUpdated}</p>
        </div>

        <article className="prose prose-invert max-w-none">{children}</article>
      </main>

      <footer className="border-t border-white/10 py-8 px-6">
        <div className="max-w-4xl mx-auto flex flex-col sm:flex-row justify-between items-center gap-4">
          <p className="text-white/40 text-xs">
            &copy; 2025 NQB8 Software Development Services. All rights reserved.
          </p>
          <div className="flex gap-6 text-xs">
            <a href="/privacy" className="text-white/60 hover:text-white transition-colors">
              Privacy Policy
            </a>
            <a href="/terms" className="text-white/60 hover:text-white transition-colors">
              Terms of Service
            </a>
          </div>
        </div>
      </footer>
    </div>
  )
}
