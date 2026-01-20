"use client"

export default function Footer() {
  return (
    <footer className="relative z-20 border-t border-white/10 py-12 px-8 bg-black/50">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-8">
          <div className="col-span-1 md:col-span-2">
            <div className="flex items-center gap-3 mb-4">
              <img src="/images/nqb8-icon-logo.png" alt="NQB8 logo" width={32} height={32} className="h-8 w-auto" />
              <span className="text-white font-medium text-lg">NQB8</span>
            </div>
            <p className="text-white/60 text-sm leading-relaxed max-w-md mb-4">
              A focused team building modern software for startups and growing businesses. We ship fast, communicate
              clearly, and build things that last.
            </p>
            <div className="flex flex-col gap-2 text-sm">
              <span className="text-white/40">Founded 2025</span>
              <a href="mailto:hello@nqb8.tech" className="text-white/60 hover:text-white transition-colors">
                hello@nqb8.tech
              </a>
            </div>
          </div>

          <div>
            <h4 className="text-white font-medium mb-4">Services</h4>
            <ul className="space-y-2 text-sm">
              <li>
                <a href="#services" className="text-white/60 hover:text-white transition-colors">
                  Custom Development
                </a>
              </li>
              <li>
                <a href="#services" className="text-white/60 hover:text-white transition-colors">
                  UI/UX Design
                </a>
              </li>
              <li>
                <a href="#services" className="text-white/60 hover:text-white transition-colors">
                  Product Strategy
                </a>
              </li>
              <li>
                <a href="#services" className="text-white/60 hover:text-white transition-colors">
                  Brand Experience
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="text-white font-medium mb-4">Connect</h4>
            <ul className="space-y-2 text-sm">
              <li>
                <a href="#portfolio" className="text-white/60 hover:text-white transition-colors">
                  Sample Work
                </a>
              </li>
              <li>
                <a href="#process" className="text-white/60 hover:text-white transition-colors">
                  Our Process
                </a>
              </li>
              <li>
                <a href="#contact" className="text-white/60 hover:text-white transition-colors">
                  Get in Touch
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="pt-8 border-t border-white/10 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-white/40 text-xs">© 2025 NQB8 Software Development Services</p>
          <div className="flex gap-6 text-xs">
            <a href="/privacy" className="text-white/60 hover:text-white transition-colors">
              Privacy Policy
            </a>
            <a href="/terms" className="text-white/60 hover:text-white transition-colors">
              Terms of Service
            </a>
          </div>
        </div>
      </div>
    </footer>
  )
}
