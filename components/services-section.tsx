"use client"

import { Code2, Palette, Rocket, Sparkles } from "lucide-react"

export default function ServicesSection() {
  const services = [
    {
      icon: <Code2 className="w-8 h-8" />,
      title: "Custom Development",
      description: "Tailored web and mobile applications built with modern technologies and best practices.",
    },
    {
      icon: <Palette className="w-8 h-8" />,
      title: "UI/UX Design",
      description: "Beautiful, intuitive interfaces that delight users and drive engagement.",
    },
    {
      icon: <Rocket className="w-8 h-8" />,
      title: "Product Strategy",
      description: "From concept to launch, we help shape and refine your digital product vision.",
    },
    {
      icon: <Sparkles className="w-8 h-8" />,
      title: "Brand Experience",
      description: "Cohesive digital experiences that reflect your unique brand identity.",
    },
  ]

  return (
    <section className="relative z-20 py-24 px-8 bg-[#0a0a0a]" id="services">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-light text-white mb-4">
            What We <span className="font-medium italic instrument">Create</span>
          </h2>
          <p className="text-white/60 text-sm max-w-2xl mx-auto">
            Comprehensive digital solutions tailored to bring your vision to life
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
