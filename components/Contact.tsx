'use client';

import { useState } from 'react';

export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });
  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission here
    setSubmitted(true);
    setTimeout(() => {
      setFormData({ name: '', email: '', message: '' });
      setSubmitted(false);
    }, 3000);
  };

  const contactMethods = [
    {
      icon: "✉️",
      label: "Email",
      value: "firmas@example.com",
      href: "mailto:firmas@example.com"
    },
    {
      icon: "💼",
      label: "LinkedIn",
      value: "linkedin.com/in/firmas",
      href: "https://linkedin.com/in/firmas"
    },
    {
      icon: "🐙",
      label: "GitHub",
      value: "github.com/firmas",
      href: "https://github.com/firmas"
    },
    {
      icon: "𝕏",
      label: "Twitter",
      value: "@firmas_dev",
      href: "https://twitter.com/firmas_dev"
    }
  ];

  return (
    <section id="contact" className="py-20 bg-secondary/30 relative overflow-hidden">
      {/* Background accent */}
      <div className="absolute top-20 left-10 w-96 h-96 bg-accent/5 rounded-full blur-3xl"></div>

      <div className="max-w-4xl mx-auto px-4 sm:px-6 relative z-10">
        <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-4 flex items-center gap-3">
          <span className="w-12 h-1 bg-accent rounded-full"></span>
          Get In Touch
        </h2>

        <p className="text-lg text-muted-foreground mt-4 mb-12 max-w-2xl">
          Have a project in mind or want to collaborate? I&apos;d love to hear from you. 
          Feel free to reach out through any of the channels below.
        </p>

        <div className="grid md:grid-cols-2 gap-12">
          {/* Contact Form */}
          <form onSubmit={handleSubmit} className="space-y-6">
            <div>
              <label htmlFor="name" className="block text-sm font-medium text-foreground mb-2">
                Name
              </label>
              <input
                type="text"
                id="name"
                name="name"
                value={formData.name}
                onChange={handleChange}
                required
                className="w-full px-4 py-3 bg-background border border-border rounded-lg text-foreground placeholder-muted-foreground focus:outline-none focus:border-accent focus:ring-2 focus:ring-accent/20 transition-all duration-300"
                placeholder="Your name"
              />
            </div>

            <div>
              <label htmlFor="email" className="block text-sm font-medium text-foreground mb-2">
                Email
              </label>
              <input
                type="email"
                id="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                required
                className="w-full px-4 py-3 bg-background border border-border rounded-lg text-foreground placeholder-muted-foreground focus:outline-none focus:border-accent focus:ring-2 focus:ring-accent/20 transition-all duration-300"
                placeholder="your@email.com"
              />
            </div>

            <div>
              <label htmlFor="message" className="block text-sm font-medium text-foreground mb-2">
                Message
              </label>
              <textarea
                id="message"
                name="message"
                value={formData.message}
                onChange={handleChange}
                required
                rows={5}
                className="w-full px-4 py-3 bg-background border border-border rounded-lg text-foreground placeholder-muted-foreground focus:outline-none focus:border-accent focus:ring-2 focus:ring-accent/20 transition-all duration-300 resize-none"
                placeholder="Your message..."
              ></textarea>
            </div>

            <button
              type="submit"
              className="w-full px-6 py-3 bg-accent text-accent-foreground font-medium rounded-lg hover:bg-accent/90 transition-all duration-300 transform hover:scale-105"
            >
              {submitted ? "Message Sent! ✓" : "Send Message"}
            </button>
          </form>

          {/* Contact Methods */}
          <div className="space-y-6">
            {contactMethods.map((method, index) => (
              <a
                key={index}
                href={method.href}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-start p-6 bg-background border border-border rounded-lg hover:border-accent/50 hover:bg-secondary/20 transition-all duration-300 group"
              >
                <span className="text-3xl mr-4">{method.icon}</span>
                <div className="flex-grow">
                  <p className="text-sm text-muted-foreground font-medium mb-1">{method.label}</p>
                  <p className="text-foreground font-medium group-hover:text-accent transition-colors duration-300">
                    {method.value}
                  </p>
                </div>
                <svg className="w-5 h-5 text-accent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex-shrink-0 ml-2">
                  <path fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 7h10v10M7 17L17 7" />
                </svg>
              </a>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
