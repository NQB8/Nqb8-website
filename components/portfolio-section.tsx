const projects = [
  {
    title: "Lupa't Bahay",
    category: "Real Estate Platform",
    description: "A property listing and search platform for the Philippine market—featuring advanced filters, map integration, and agent dashboards for seamless buyer-seller connections.",
  },
  {
    title: "SellerBoost",
    category: "In Development",
    description: "A social commerce management system for online sellers—consolidating orders, chats, and inventory across Facebook, Instagram, and messaging apps into one streamlined dashboard.",
  },
  {
    title: "NQB8 Website",
    category: "Brand Experience",
    description: "Our own site, built with Next.js and WebGL shaders—demonstrating performance optimization, smooth animations, and modern design principles.",
  },
]

export default function PortfolioSection() {
  return (
    <section className="relative z-20 py-24 px-8 bg-[#080808] border-t border-white/5" id="portfolio">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-light text-white mb-4">
            Featured <span className="font-medium italic instrument">Work</span>
          </h2>
          <p className="text-white/60 text-sm max-w-2xl mx-auto">Projects we're building and products that showcase our capabilities</p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          {projects.map((project) => (
            <div
              key={project.title}
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
