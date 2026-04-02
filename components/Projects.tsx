'use client';

export default function Projects() {
  const projects = [
    {
      title: "E-Commerce Platform",
      description: "Full-stack e-commerce solution with product catalog, shopping cart, and secure payment integration.",
      tags: ["Next.js", "TypeScript", "Stripe", "PostgreSQL"],
      link: "#",
      featured: true
    },
    {
      title: "Portfolio Website",
      description: "Modern, responsive portfolio website with smooth animations and dark theme design.",
      tags: ["React", "Tailwind CSS", "Next.js"],
      link: "#",
      featured: true
    },
    {
      title: "Task Management App",
      description: "Collaborative task management application with real-time updates and team collaboration features.",
      tags: ["React", "Firebase", "Tailwind CSS"],
      link: "#",
      featured: false
    },
    {
      title: "Weather Dashboard",
      description: "Real-time weather application with location-based data and beautiful data visualization.",
      tags: ["React", "API Integration", "Chart.js"],
      link: "#",
      featured: false
    },
    {
      title: "Blog Platform",
      description: "Content management system with markdown support, user authentication, and comment system.",
      tags: ["Next.js", "MongoDB", "JWT"],
      link: "#",
      featured: false
    },
    {
      title: "Social Media UI",
      description: "Modern social media interface with infinite scroll, notifications, and messaging features.",
      tags: ["React", "Redux", "WebSocket"],
      link: "#",
      featured: false
    }
  ];

  return (
    <section id="projects" className="py-20 bg-background">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-4 flex items-center gap-3">
          <span className="w-12 h-1 bg-accent rounded-full"></span>
          Projects
        </h2>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mt-12">
          {projects.map((project, index) => (
            <a
              key={index}
              href={project.link}
              className="group relative overflow-hidden rounded-lg border border-border hover:border-accent/50 transition-all duration-300 hover:shadow-lg hover:shadow-accent/10"
            >
              <div className="p-6 bg-secondary/20 h-full flex flex-col">
                {/* Featured badge */}
                {project.featured && (
                  <div className="inline-flex items-center gap-2 mb-4 w-fit">
                    <span className="w-2 h-2 bg-accent rounded-full animate-pulse"></span>
                    <span className="text-xs text-accent font-medium uppercase tracking-wider">Featured</span>
                  </div>
                )}

                <h3 className="text-xl font-bold text-foreground mb-3 group-hover:text-accent transition-colors duration-300">
                  {project.title}
                </h3>

                <p className="text-muted-foreground mb-6 flex-grow text-sm leading-relaxed">
                  {project.description}
                </p>

                <div className="flex flex-wrap gap-2">
                  {project.tags.map((tag, i) => (
                    <span
                      key={i}
                      className="px-3 py-1 bg-accent/10 text-accent text-xs rounded-full font-medium"
                    >
                      {tag}
                    </span>
                  ))}
                </div>

                {/* Hover arrow */}
                <div className="absolute top-6 right-6 text-accent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 7h10v10M7 17L17 7" />
                  </svg>
                </div>
              </div>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}
