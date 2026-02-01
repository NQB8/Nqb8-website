export default async function CTASection() {
  "use cache"

  return (
    <section className="relative z-20 py-32 px-8 bg-linear-to-b from-[#080808] to-[#0a0a0a] scroll-mt-24" id="contact">
      <div className="max-w-4xl mx-auto text-center">
        <h2 className="text-5xl md:text-6xl font-light text-white mb-6 text-balance">
          Let&apos;s Talk About Your <span className="font-medium italic instrument">Project</span>
        </h2>
        <p className="text-white/60 text-base mb-8 max-w-2xl mx-auto leading-relaxed">
          Tell us what you&apos;re building and we&apos;ll reply within 24 hours with next steps.
        </p>
        <a
          href="mailto:hello@nqb8.tech?subject=Project%20Inquiry"
          className="inline-flex items-center px-10 py-4 min-h-[44px] rounded-full bg-white text-black font-medium text-sm transition-colors duration-200 hover:bg-white/90 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-offset-2 focus-visible:ring-offset-black cursor-pointer"
        >
          Send Us an Email
        </a>
      </div>
    </section>
  )
}
