"use client"

import Code2 from "lucide-react/dist/esm/icons/code-2"
import Palette from "lucide-react/dist/esm/icons/palette"
import Rocket from "lucide-react/dist/esm/icons/rocket"
import Sparkles from "lucide-react/dist/esm/icons/sparkles"

export default function ServicesSection() {
  const services = [
    {
      icon: <Code2 className="w-8 h-8" aria-hidden="true" />,
      title: "Custom Development",
      description: "SaaS platforms, admin dashboards, internal tools, and marketing websites—built with modern tech stacks that scale.",
    },
    {
      icon: <Palette className="w-8 h-8" aria-hidden="true" />,
      title: "UI/UX Design",
      description: "Wireframes, prototypes, and polished interfaces designed around your users' needs—not just aesthetics.",
    },
    {
      icon: <Rocket className="w-8 h-8" aria-hidden="true" />,
      title: "Product Strategy",
      description: "MVP planning, feature prioritization, and roadmapping to help you launch the right thing at the right time.",
    },
    {
      icon: <Sparkles className="w-8 h-8" aria-hidden="true" />,
      title: "Brand Experience",
      description: "Websites and digital branding that communicate who you are clearly and consistently across every touchpoint.",
    },
  ]

  return (
    <section className="relative z-20 py-24 px-8 bg-[#0a0a0a]" id="services">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-light text-white mb-4">
            What We <span className="font-medium italic instrument">Build</span>
          </h2>
          <p className="text-white/60 text-sm max-w-2xl mx-auto">
            End-to-end development services to take your idea from concept to production
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {services.map((service, index) => (
            <div
              key={index}
              className="group p-8 rounded-2xl bg-white/5 backdrop-blur-sm border border-white/10 hover:bg-white/10 hover:border-white/20 transition-all duration-300"
            >
              <div className="text-white/80 mb-4 group-hover:text-white transition-colors">{service.icon}</div>
              <h3 className="text-xl font-medium text-white mb-3">{service.title}</h3>
              <p className="text-white/60 text-sm leading-relaxed">{service.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
