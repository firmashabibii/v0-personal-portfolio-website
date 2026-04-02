'use client';

export default function About() {
  return (
    <section id="about" className="py-20 bg-secondary/30 relative">
      <div className="max-w-4xl mx-auto px-4 sm:px-6">
        <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-4 flex items-center gap-3">
          <span className="w-12 h-1 bg-accent rounded-full"></span>
          About
        </h2>

        <div className="grid md:grid-cols-2 gap-12 mt-12">
          <div className="space-y-6">
            <p className="text-lg text-muted-foreground leading-relaxed">
              I&apos;m a passionate web developer and TRPL student dedicated to creating beautiful, 
              functional digital experiences. My journey in web development is driven by a love for 
              clean code and thoughtful design.
            </p>

            <p className="text-lg text-muted-foreground leading-relaxed">
              With expertise in modern web technologies, I focus on building responsive applications 
              that not only look great but perform exceptionally. I believe in the power of combining 
              strong technical fundamentals with creative problem-solving.
            </p>

            <p className="text-lg text-muted-foreground leading-relaxed">
              When I&apos;m not coding, you&apos;ll find me exploring new technologies, contributing to 
              open-source projects, or sharing knowledge with the developer community.
            </p>
          </div>

          <div className="space-y-6">
            <div className="p-6 bg-background/50 rounded-lg border border-border hover:border-accent/50 transition-colors duration-300">
              <h3 className="text-accent font-bold mb-3 text-lg">Expertise</h3>
              <ul className="space-y-2 text-muted-foreground">
                <li>✓ Frontend Development (React, Next.js, TypeScript)</li>
                <li>✓ Responsive Design & UX/UI</li>
                <li>✓ Full-Stack Development</li>
                <li>✓ Modern CSS & Tailwind</li>
              </ul>
            </div>

            <div className="p-6 bg-background/50 rounded-lg border border-border hover:border-accent/50 transition-colors duration-300">
              <h3 className="text-accent font-bold mb-3 text-lg">Approach</h3>
              <ul className="space-y-2 text-muted-foreground">
                <li>✓ User-Centric Design</li>
                <li>✓ Clean, Maintainable Code</li>
                <li>✓ Performance Optimization</li>
                <li>✓ Continuous Learning</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
