"use client"

export default function HeroContent() {
  return (
    <section className="relative z-20 min-h-screen flex items-center px-8 pt-24 pb-32">
      <div className="max-w-7xl mx-auto w-full">
        <div className="max-w-2xl">
          <div
            className="inline-flex items-center px-3 py-1 rounded-full bg-white/5 backdrop-blur-sm mb-6 relative"
            style={{
              filter: "url(#glass-effect)",
            }}
          >
            <div className="absolute top-0 left-1 right-1 h-px bg-gradient-to-r from-transparent via-white/20 to-transparent rounded-full" />
            <span className="text-white/90 text-xs font-light relative z-10">Software for Growing Businesses</span>
          </div>

          <h1 className="text-6xl md:text-7xl lg:text-8xl md:leading-[1.1] tracking-tight font-light text-white mb-6">
            <span className="font-medium italic instrument">Build</span> Software
            <br />
            <span className="font-light tracking-tight text-white">That Scales</span>
          </h1>

          <p className="text-base font-light text-white/70 mb-4 leading-relaxed max-w-xl">
            We build fast, reliable web apps for startups and SMEs—designed to launch quickly, scale smoothly, and
            convert users into customers.
          </p>

          <p className="text-sm font-light text-white/50 mb-8 leading-relaxed max-w-xl">
            Clear communication. Weekly updates. No surprises.
          </p>

          <div className="flex items-center gap-4 flex-wrap">
            <a href="#portfolio" className="px-8 py-3 rounded-full bg-transparent border border-white/30 text-white font-normal text-sm transition-all duration-200 hover:bg-white/10 hover:border-white/50 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white/50 focus-visible:ring-offset-2 focus-visible:ring-offset-black cursor-pointer">
              View Our Work
            </a>
            <a href="mailto:hello@nqb8.tech?subject=Project%20Inquiry" className="px-8 py-3 rounded-full bg-white text-black font-normal text-sm transition-all duration-200 hover:bg-white/90 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-offset-2 focus-visible:ring-offset-black cursor-pointer">
              Get in Touch
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}
