'use client';

import { useEffect, useState } from 'react';

export default function Navigation() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('');

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    // Set smooth scroll behavior
    document.documentElement.style.scrollBehavior = 'smooth';

    // Intersection Observer for active section detection
    const observerOptions = {
      root: null,
      rootMargin: '-50% 0px -50% 0px',
      threshold: 0,
    };

    const observerCallback = (entries: IntersectionObserverEntry[]) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          setActiveSection(entry.target.id);
        }
      });
    };

    const observer = new IntersectionObserver(observerCallback, observerOptions);

    // Observe all sections
    const sections = ['hero', 'about', 'education', 'skills', 'projects', 'contact'];
    sections.forEach((sectionId) => {
      const element = document.getElementById(sectionId);
      if (element) {
        observer.observe(element);
      }
    });

    return () => {
      sections.forEach((sectionId) => {
        const element = document.getElementById(sectionId);
        if (element) {
          observer.unobserve(element);
        }
      });
    };
  }, []);

  const navLinks = [
    { name: 'About', href: '#about' },
    { name: 'Education', href: '#education' },
    { name: 'Skills', href: '#skills' },
    { name: 'Projects', href: '#projects' },
    { name: 'Contact', href: '#contact' },
  ];

  const isLinkActive = (href: string) => {
    const sectionId = href.replace('#', '');
    return activeSection === sectionId;
  };

  return (
    <nav
      className={`fixed top-0 w-full z-50 transition-all duration-300 ${
        scrolled
          ? 'bg-gradient-to-b from-background via-background to-transparent/50 backdrop-blur border-b border-border/30'
          : 'bg-transparent'
      }`}
    >
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <div className="flex justify-between items-center h-20">
          {/* Logo */}
          <a
            href="#hero"
            className="flex items-center gap-2 hover:opacity-80 transition-opacity duration-300"
            onClick={() => setActiveSection('hero')}
          >
            <div className="w-10 h-10 rounded-lg bg-accent flex items-center justify-center hover:shadow-lg hover:shadow-accent/50 transition-all duration-300">
              <span className="text-accent-foreground font-bold text-lg">FH</span>
            </div>
            <span className="hidden sm:inline text-foreground font-bold">Firmas</span>
          </a>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-8">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                className={`text-sm font-medium relative group transition-all duration-300 ${
                  isLinkActive(link.href)
                    ? 'text-accent'
                    : 'text-muted-foreground hover:text-accent'
                }`}
              >
                {link.name}
                <span
                  className={`absolute bottom-0 left-0 h-0.5 bg-gradient-to-r from-accent to-accent/50 transition-all duration-300 ${
                    isLinkActive(link.href) ? 'w-full' : 'w-0 group-hover:w-full'
                  } ${isLinkActive(link.href) ? 'shadow-lg shadow-accent/50' : ''}`}
                ></span>
              </a>
            ))}
            <a
              href="#contact"
              className="px-6 py-2 bg-accent text-accent-foreground rounded-lg font-medium hover:bg-accent/90 transition-all duration-300 hover:shadow-lg hover:shadow-accent/50"
            >
              Hire Me
            </a>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden p-2 text-foreground hover:bg-secondary/30 rounded-lg transition-colors duration-300"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            aria-label="Toggle menu"
          >
            <svg
              className={`w-6 h-6 transition-transform duration-300 ${mobileMenuOpen ? 'rotate-90' : ''}`}
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              {mobileMenuOpen ? (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              ) : (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              )}
            </svg>
          </button>
        </div>

        {/* Mobile Menu */}
        {mobileMenuOpen && (
          <div className="md:hidden absolute top-20 left-0 right-0 bg-gradient-to-b from-background via-background to-background/80 backdrop-blur border-b border-border/30">
            <div className="px-4 py-4 space-y-3">
              {navLinks.map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  className={`block px-4 py-2 rounded-lg transition-all duration-300 font-medium ${
                    isLinkActive(link.href)
                      ? 'bg-accent/20 text-accent border-l-2 border-accent'
                      : 'text-foreground hover:text-accent hover:bg-secondary/30'
                  }`}
                  onClick={() => {
                    setMobileMenuOpen(false);
                    setActiveSection(link.href.replace('#', ''));
                  }}
                >
                  {link.name}
                </a>
              ))}
              <a
                href="#contact"
                className="block px-4 py-2 bg-accent text-accent-foreground rounded-lg font-medium text-center hover:bg-accent/90 transition-all duration-300 hover:shadow-lg hover:shadow-accent/50"
                onClick={() => setMobileMenuOpen(false)}
              >
                Hire Me
              </a>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
}
