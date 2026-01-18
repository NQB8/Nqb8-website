"use client"

export default function ProcessSection() {
  const steps = [
    {
      number: "01",
      title: "Discovery",
      description: "We dive deep into your goals, audience, and vision to understand what success looks like.",
    },
    {
      number: "02",
      title: "Design",
      description: "Crafting beautiful, user-centered designs that align with your brand and objectives.",
    },
    {
      number: "03",
      title: "Development",
      description: "Building robust, scalable solutions with clean code and modern technologies.",
    },
    {
      number: "04",
      title: "Launch",
      description: "Deploying your product with confidence and providing ongoing support as you grow.",
    },
  ]

  return (
    <section className="relative z-20 py-24 px-8 bg-gradient-to-b from-[#0a0a0a] to-[#0f0f0f]" id="process">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-light text-white mb-4">
            Our <span className="font-medium italic instrument">Process</span>
          </h2>
          <p className="text-white/60 text-sm max-w-2xl mx-auto">
            A streamlined approach to turning ideas into reality
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {steps.map((step, index) => (
            <div key={index} className="relative">
              <div className="text-6xl font-light text-white/10 mb-4">{step.number}</div>
              <h3 className="text-2xl font-medium text-white mb-3">{step.title}</h3>
              <p className="text-white/60 text-sm leading-relaxed">{step.description}</p>
              {index < steps.length - 1 && (
                <div className="hidden lg:block absolute top-12 -right-4 w-8 h-px bg-gradient-to-r from-white/20 to-transparent" />
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
