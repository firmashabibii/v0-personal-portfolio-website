'use client';

import { useEffect, useState } from 'react';

export default function Projects() {
  const [visibleProjects, setVisibleProjects] = useState<Set<number>>(new Set());

  useEffect(() => {
    const observerOptions = {
      root: null,
      rootMargin: '0px 0px -100px 0px',
      threshold: 0,
    };

    const observerCallback = (entries: IntersectionObserverEntry[]) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          const index = parseInt(entry.target.getAttribute('data-index') || '-1');
          if (index >= 0) {
            setVisibleProjects((prev) => new Set(prev).add(index));
          }
        }
      });
    };

    const observer = new IntersectionObserver(observerCallback, observerOptions);
    const projectElements = document.querySelectorAll('[data-project-card]');
    projectElements.forEach((el) => observer.observe(el));

    return () => {
      projectElements.forEach((el) => observer.unobserve(el));
    };
  }, []);

  const projects = [
    {
      title: "E-Commerce Platform",
      description: "Full-stack e-commerce solution with product catalog, shopping cart, and secure payment integration.",
      tags: ["Next.js", "TypeScript", "Stripe", "PostgreSQL"],
      link: "#",
      featured: true,
      image: "linear-gradient(135deg, #00adb5 0%, #0088a0 100%)"
    },
    {
      title: "Portfolio Website",
      description: "Modern, responsive portfolio website with smooth animations and dark theme design.",
      tags: ["React", "Tailwind CSS", "Next.js"],
      link: "#",
      featured: true,
      image: "linear-gradient(135deg, #009fa6 0%, #005a66 100%)"
    },
    {
      title: "Task Management App",
      description: "Collaborative task management application with real-time updates and team collaboration features.",
      tags: ["React", "Firebase", "Tailwind CSS"],
      link: "#",
      featured: false,
      image: "linear-gradient(135deg, #00d4e0 0%, #00adb5 100%)"
    },
    {
      title: "Weather Dashboard",
      description: "Real-time weather application with location-based data and beautiful data visualization.",
      tags: ["React", "API Integration", "Chart.js"],
      link: "#",
      featured: false,
      image: "linear-gradient(135deg, #0088a0 0%, #003d47 100%)"
    },
    {
      title: "Blog Platform",
      description: "Content management system with markdown support, user authentication, and comment system.",
      tags: ["Next.js", "MongoDB", "JWT"],
      link: "#",
      featured: false,
      image: "linear-gradient(135deg, #005a66 0%, #002d33 100%)"
    },
    {
      title: "Social Media UI",
      description: "Modern social media interface with infinite scroll, notifications, and messaging features.",
      tags: ["React", "Redux", "WebSocket"],
      link: "#",
      featured: false,
      image: "linear-gradient(135deg, #009fa6 0%, #004752 100%)"
    }
  ];

  return (
    <section id="projects" className="py-20 bg-background">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-4 flex items-center gap-3">
          <span className="w-12 h-1 bg-accent rounded-full"></span>
          Projects
        </h2>
        <p className="text-muted-foreground max-w-2xl mt-2 mb-12">
          Showcase of my recent work and projects built with modern technologies
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.map((project, index) => (
            <div
              key={index}
              data-project-card
              data-index={index}
              className={`group relative h-full transition-all duration-500 ${
                visibleProjects.has(index) ? 'animate-fade-in-up' : 'opacity-0'
              }`}
              style={{
                animationDelay: visibleProjects.has(index) ? `${index * 100}ms` : '0ms',
              }}
            >
              <a
                href={project.link}
                className="block h-full rounded-xl overflow-hidden border border-border/30 bg-card hover:border-accent/50 transition-all duration-300 hover:-translate-y-2 hover:shadow-xl hover:shadow-accent/20"
              >
                {/* Image Container */}
                <div className="relative h-48 overflow-hidden bg-secondary">
                  {/* Gradient Background */}
                  <div
                    className="absolute inset-0 transition-transform duration-500 group-hover:scale-110"
                    style={{
                      background: project.image,
                    }}
                  ></div>

                  {/* Dark Gradient Overlay */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/40 to-transparent group-hover:from-black/80 group-hover:via-black/50 transition-all duration-300"></div>

                  {/* Accent Glow on Hover */}
                  <div className="absolute inset-0 opacity-0 group-hover:opacity-20 transition-opacity duration-300 bg-gradient-to-br from-accent/50 to-transparent pointer-events-none"></div>

                  {/* Featured Badge */}
                  {project.featured && (
                    <div className="absolute top-4 right-4 inline-flex items-center gap-2 bg-accent/90 px-3 py-1 rounded-full backdrop-blur-sm border border-accent/50">
                      <span className="w-2 h-2 bg-white rounded-full animate-pulse"></span>
                      <span className="text-xs text-accent-foreground font-bold uppercase tracking-wider">Featured</span>
                    </div>
                  )}
                </div>

                {/* Content Container */}
                <div className="p-6 flex flex-col h-[calc(100%-12rem)]">
                  {/* Title */}
                  <h3 className="text-lg font-bold text-foreground mb-2 group-hover:text-accent transition-colors duration-300 line-clamp-2">
                    {project.title}
                  </h3>

                  {/* Description */}
                  <p className="text-sm text-muted-foreground mb-6 flex-grow line-clamp-3 group-hover:text-foreground/80 transition-colors duration-300">
                    {project.description}
                  </p>

                  {/* Technologies */}
                  <div className="space-y-4">
                    <div className="flex flex-wrap gap-2">
                      {project.tags.map((tag, i) => (
                        <span
                          key={i}
                          className="px-3 py-1 bg-accent/10 hover:bg-accent/20 text-accent text-xs rounded-full font-medium transition-colors duration-300 border border-accent/20"
                        >
                          {tag}
                        </span>
                      ))}
                    </div>

                    {/* View Button */}
                    <div className="flex items-center gap-2 text-accent font-medium group/button hover:gap-3 transition-all duration-300 opacity-0 group-hover:opacity-100">
                      <span>View Project</span>
                      <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                      </svg>
                    </div>
                  </div>
                </div>
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
