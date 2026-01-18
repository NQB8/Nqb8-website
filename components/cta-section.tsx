"use client"

export default function CTASection() {
  return (
    <section className="relative z-20 py-32 px-8 bg-gradient-to-b from-[#080808] to-[#0a0a0a]" id="contact">
      <div className="max-w-4xl mx-auto text-center">
        <h2 className="text-5xl md:text-6xl font-light text-white mb-6 text-balance">
          Ready to <span className="font-medium italic instrument">Build</span> Something Amazing?
        </h2>
        <p className="text-white/60 text-base mb-8 max-w-2xl mx-auto leading-relaxed">
          Let's discuss your project and explore how we can bring your vision to life with premium development
          solutions.
        </p>
        <div className="flex items-center justify-center gap-4 flex-wrap">
          <button className="px-10 py-4 rounded-full bg-white text-black font-medium text-sm transition-all duration-200 hover:bg-white/90 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-offset-2 focus-visible:ring-offset-black cursor-pointer">
            Start a Project
          </button>
          <button className="px-10 py-4 rounded-full bg-transparent border border-white/30 text-white font-normal text-sm transition-all duration-200 hover:bg-white/10 hover:border-white/50 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white/50 focus-visible:ring-offset-2 focus-visible:ring-offset-black cursor-pointer">
            Schedule a Call
          </button>
        </div>
      </div>
    </section>
  )
}
