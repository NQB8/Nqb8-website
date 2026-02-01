const steps = [
  {
    number: "01",
    title: "Discovery",
    description: "You email us about your project. We reply within 24 hours with questions to understand your goals, users, and constraints—then schedule a call to align on scope.",
  },
  {
    number: "02",
    title: "Design",
    description: "You'll see clickable prototypes and wireframes before development begins—so you can test ideas early and avoid costly changes later.",
  },
  {
    number: "03",
    title: "Development",
    description: "We build in short cycles with weekly updates and demos. You'll always know what's happening and can give feedback along the way.",
  },
  {
    number: "04",
    title: "Launch",
    description: "We handle deployment, monitoring, and provide post-launch support to make sure everything runs smoothly after go-live.",
  },
]

export default async function ProcessSection() {
  "use cache"

  return (
    <section className="relative z-20 py-24 px-8 bg-linear-to-b from-[#0a0a0a] to-[#0f0f0f] scroll-mt-24" id="process">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-light text-white mb-4">
            How We <span className="font-medium italic instrument">Work</span>
          </h2>
          <p className="text-white/60 text-sm max-w-2xl mx-auto">
            A transparent process designed to keep you informed and in control
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {steps.map((step, index) => (
            <div key={step.number} className="relative">
              <div className="text-6xl font-light text-white/10 mb-4">{step.number}</div>
              <h3 className="text-2xl font-medium text-white mb-3">{step.title}</h3>
              <p className="text-white/60 text-sm leading-relaxed">{step.description}</p>
              {index < steps.length - 1 && (
                <div className="hidden lg:block absolute top-12 -right-4 w-8 h-px bg-linear-to-r from-white/20 to-transparent" />
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
