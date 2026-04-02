'use client';

export default function Education() {
  const education = [
    {
      degree: "Teknik Rekayasa Perangkat Lunak (TRPL)",
      school: "Vocational School",
      period: "2021 - Present",
      description: "Focused on software engineering and web development",
      details: ["Web Development", "Database Design", "Software Architecture"]
    },
    {
      degree: "Full-Stack Web Development",
      school: "Self-Paced Learning",
      period: "2022 - Present",
      description: "Continuous learning through online courses and projects",
      details: ["Modern JavaScript", "React & Next.js", "Backend Technologies"]
    },
    {
      degree: "Web Development Bootcamp",
      school: "Online Platforms",
      period: "2021 - 2022",
      description: "Intensive training in modern web technologies",
      details: ["Frontend", "Backend", "Full-Stack Projects"]
    }
  ];

  return (
    <section id="education" className="py-20 bg-background relative">
      <div className="max-w-4xl mx-auto px-4 sm:px-6">
        <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-4 flex items-center gap-3">
          <span className="w-12 h-1 bg-accent rounded-full"></span>
          Education
        </h2>

        <div className="mt-12 space-y-8">
          {education.map((item, index) => (
            <div
              key={index}
              className="relative pl-8 pb-8 border-l border-accent/30 hover:border-accent/60 transition-colors duration-300"
            >
              {/* Timeline dot */}
              <div className="absolute -left-4 top-0 w-6 h-6 bg-accent rounded-full border-4 border-background transform hover:scale-125 transition-transform duration-300"></div>

              <div className="p-6 bg-secondary/30 rounded-lg border border-border hover:border-accent/50 transition-all duration-300">
                <div className="flex justify-between items-start mb-2">
                  <h3 className="text-xl font-bold text-foreground">{item.degree}</h3>
                  <span className="text-sm text-accent font-medium">{item.period}</span>
                </div>
                <p className="text-accent text-lg font-semibold mb-2">{item.school}</p>
                <p className="text-muted-foreground mb-4">{item.description}</p>
                <div className="flex flex-wrap gap-2">
                  {item.details.map((detail, i) => (
                    <span
                      key={i}
                      className="px-3 py-1 bg-accent/10 text-accent text-sm rounded-full"
                    >
                      {detail}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
