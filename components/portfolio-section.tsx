"use client"

export default function PortfolioSection() {
  const projects = [
    {
      title: "SaaS Dashboard",
      category: "Concept Project",
      description: "A metrics dashboard concept demonstrating real-time data visualization and responsive design patterns.",
    },
    {
      title: "Booking Platform",
      category: "Concept Project",
      description: "An appointment scheduling system prototype showcasing calendar integration and user flow optimization.",
    },
    {
      title: "Portfolio Template",
      category: "Concept Project",
      description: "A modern portfolio design exploring animation techniques and performance-focused development.",
    },
  ]

  return (
    <section className="relative z-20 py-24 px-8 bg-[#080808] border-t border-white/5" id="portfolio">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-light text-white mb-4">
            Sample <span className="font-medium italic instrument">Work</span>
          </h2>
          <p className="text-white/60 text-sm max-w-2xl mx-auto">Concept projects that demonstrate our approach and capabilities</p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          {projects.map((project, index) => (
            <div
              key={index}
              className="group relative overflow-hidden rounded-2xl bg-white/5 backdrop-blur-sm border border-white/10 hover:border-white/20 transition-all duration-300"
            >
              <div className="aspect-[4/3] bg-gradient-to-br from-white/10 to-white/5" />
              <div className="p-6">
                <div className="text-xs text-white/50 mb-2">{project.category}</div>
                <h3 className="text-xl font-medium text-white mb-2">{project.title}</h3>
                <p className="text-white/60 text-sm leading-relaxed">{project.description}</p>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  )
}
