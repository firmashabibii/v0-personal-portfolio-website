'use client';

export default function Skills() {
  const skills = [
    {
      category: "Frontend",
      items: [
        { name: "React", level: 90 },
        { name: "Next.js", level: 85 },
        { name: "TypeScript", level: 85 },
        { name: "Tailwind CSS", level: 90 },
        { name: "JavaScript", level: 90 },
      ]
    },
    {
      category: "Backend",
      items: [
        { name: "Node.js", level: 80 },
        { name: "Express", level: 80 },
        { name: "PostgreSQL", level: 75 },
        { name: "MongoDB", level: 75 },
        { name: "REST APIs", level: 85 },
      ]
    },
    {
      category: "Tools & Others",
      items: [
        { name: "Git & GitHub", level: 85 },
        { name: "Vercel", level: 80 },
        { name: "Docker", level: 70 },
        { name: "Figma", level: 75 },
        { name: "UI/UX Design", level: 80 },
      ]
    }
  ];

  return (
    <section id="skills" className="py-20 bg-secondary/30">
      <div className="max-w-4xl mx-auto px-4 sm:px-6">
        <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-4 flex items-center gap-3">
          <span className="w-12 h-1 bg-accent rounded-full"></span>
          Skills
        </h2>

        <div className="grid md:grid-cols-3 gap-8 mt-12">
          {skills.map((skillGroup, idx) => (
            <div key={idx} className="space-y-6">
              <h3 className="text-2xl font-bold text-accent">{skillGroup.category}</h3>
              <div className="space-y-6">
                {skillGroup.items.map((skill, i) => (
                  <div key={i} className="space-y-2">
                    <div className="flex justify-between items-center">
                      <span className="text-foreground font-medium">{skill.name}</span>
                      <span className="text-xs text-muted-foreground">{skill.level}%</span>
                    </div>
                    <div className="h-2 bg-background rounded-full overflow-hidden border border-border">
                      <div
                        className="h-full bg-accent rounded-full transition-all duration-500 ease-out"
                        style={{ width: `${skill.level}%` }}
                      ></div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
