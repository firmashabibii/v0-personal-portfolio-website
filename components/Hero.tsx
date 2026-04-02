'use client';

import React from 'react';

export default function Hero() {
  return (
    <section id="hero" className="min-h-screen flex items-center justify-center bg-background pt-20 relative overflow-hidden">
      {/* Background accent */}
      <div className="absolute top-20 right-10 w-96 h-96 bg-accent/5 rounded-full blur-3xl"></div>
      <div className="absolute bottom-0 left-10 w-80 h-80 bg-accent/5 rounded-full blur-3xl"></div>

      <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 text-center">
        <h1 className="animate-fade-in-up text-5xl sm:text-6xl md:text-7xl font-bold text-foreground mb-6">
          Firmas Habibi
        </h1>
        
        <p className="animate-fade-in-up text-xl sm:text-2xl text-muted-foreground mb-2 delay-100">
          TRPL Student
        </p>

        <p className="animate-fade-in-up text-lg sm:text-xl text-accent mb-12 delay-200 font-medium">
          Web Developer
        </p>

        <p className="animate-fade-in-up text-base sm:text-lg text-muted-foreground max-w-2xl mx-auto mb-12 leading-relaxed delay-300">
          Crafting elegant digital experiences with modern web technologies. 
          Passionate about clean code, beautiful design, and user-focused development.
        </p>

        <div className="animate-fade-in-up flex gap-4 justify-center delay-400">
          <a
            href="#contact"
            className="px-8 py-3 bg-accent text-accent-foreground rounded-lg font-medium hover:bg-accent/90 transition-all duration-300 transform hover:scale-105"
          >
            Get in Touch
          </a>
          <a
            href="#projects"
            className="px-8 py-3 border border-accent text-accent rounded-lg font-medium hover:bg-accent/10 transition-all duration-300"
          >
            View Projects
          </a>
        </div>

        {/* Scroll indicator */}
        <div className="animate-fade-in-up absolute bottom-10 left-1/2 transform -translate-x-1/2 delay-500">
          <svg
            className="w-6 h-6 text-accent animate-bounce"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M19 14l-7 7m0 0l-7-7m7 7V3"
            />
          </svg>
        </div>
      </div>
    </section>
  );
}
