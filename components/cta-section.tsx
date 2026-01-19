"use client"

export default function CTASection() {
  return (
    <section className="relative z-20 py-32 px-8 bg-gradient-to-b from-[#080808] to-[#0a0a0a]" id="contact">
      <div className="max-w-4xl mx-auto text-center">
        <h2 className="text-5xl md:text-6xl font-light text-white mb-6 text-balance">
          Let's Talk About Your <span className="font-medium italic instrument">Project</span>
        </h2>
        <p className="text-white/60 text-base mb-8 max-w-2xl mx-auto leading-relaxed">
          Tell us what you're building and we'll reply within 24 hours with next steps.
        </p>
        <a href="mailto:hello@nqb8.tech?subject=Project%20Inquiry" className="inline-block px-10 py-4 rounded-full bg-white text-black font-medium text-sm transition-all duration-200 hover:bg-white/90 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-offset-2 focus-visible:ring-offset-black cursor-pointer">
          Send Us an Email
        </a>
      </div>
    </section>
  )
}
