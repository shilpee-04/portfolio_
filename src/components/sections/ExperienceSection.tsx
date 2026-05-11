import React from 'react';

const ExperienceSection = () => {
  const experiences = [
    {
      role: "Backend Software Engineer",
      company: "Cubastion Consulting Pvt. Ltd.",
      period: "July 2025 - Apr 2026",
      logo: "/assets/institutions/cubastion.jpeg",
      description: "Spearheaded the modernization of enterprise operational workflows and optimized high-traffic API architectures to significantly reduce system latency.",
      achievements: [
        "Architected and deployed highly scalable RESTful APIs using Python, FastAPI, and Django for robust enterprise applications.",
        "Slashed API latency by 45% across high-traffic endpoints via strategic ORM optimizations and advanced caching strategies.",
        "Modernized legacy workflows by developing distributed backend automation and integrating CI/CD pipelines.",
        "Designed multilingual data ingestion pipelines, preserving HTML context to boost overall system response accuracy by 25%.",
        "Engineered resilient integration interfaces enabling secure, real-time communication across 4+ distributed systems."
      ],
      technologies: ["Python", "FastAPI", "Django", "Redis", "Docker", "AWS", "CI/CD"],
      current: true
    },
    {
      role: "Software Engineering Intern (NLP & Backend)", 
      company: "AspireNex",
      period: "May 2024 - July 2024",
      logo: "/assets/institutions/aspirenex.jpg",
      description: "Researched and developed advanced NLP pipelines and intelligent sequence generation models to enhance automated customer query assistance.",
      achievements: [
        "Developed an intelligent autocomplete system integrating sentiment analysis with neural sequence generation.",
        "Architected end-to-end NLP pipelines to efficiently process and manage datasets exceeding 50,000 text samples.",
        "Optimized deep learning architectures (LSTM, GRU, Bi-LSTM), achieving a peak classification accuracy of 88%.",
        "Enhanced model output quality, reducing perplexity by 18% and repetitive outputs by 20% via temperature-based sampling.",
        "Engineered scalable backend components ensuring low-latency responses for real-time text processing tasks."
      ],
      technologies: ["Python", "PyTorch", "Transformers", "NLP", "Flask", "Pandas", "Scikit-learn"],
      current: false
    }
  ];

  return (
    <section id="experience" className="py-12 sm:py-16 lg:py-24 bg-gradient-to-br from-card/50 to-secondary/30">
      <div className="container mx-auto px-4 sm:px-6">
        <div className="max-w-6xl mx-auto">
          {/* Section Header */}
          <div className="text-center mb-12 sm:mb-16 fade-in-up">
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-gradient mb-4 sm:mb-6">
              Experience
            </h2>
            <div className="w-16 sm:w-24 h-1 bg-gradient-primary mx-auto rounded-full"></div>
          </div>

          {/* Enhanced Timeline */}
          <div className="space-y-8 sm:space-y-12">
            {experiences.map((exp, index) => (
              <div 
                key={index} 
                className="relative fade-in-up card-hover" 
                style={{ animationDelay: `${index * 0.2}s` }}
              >
                {/* Enhanced Timeline Line - Hidden on mobile */}
                <div className="absolute left-8 top-8 bottom-0 w-px bg-gradient-primary opacity-30 glow-pulse hidden sm:block"></div>
                
                {/* Enhanced Timeline Dot - Hidden on mobile */}
                <div className="absolute left-6 top-8 w-4 h-4 bg-primary rounded-full border-4 border-background shadow-glow glow-pulse hover:scale-125 transition-transform duration-300 hidden sm:block"></div>

                {/* Enhanced Content Card */}
                <div className="sm:ml-20 glass rounded-xl p-4 sm:p-6 lg:p-8 hover-lift hover:shadow-2xl transition-all duration-500 group">
                  <div className="flex flex-col lg:flex-row lg:items-start lg:justify-between mb-4 sm:mb-6 stagger-children">
                    <div className="flex flex-col sm:flex-row sm:items-start gap-3 sm:gap-4">
                      {/* Enhanced Company Logo */}
                      <div className="flex items-center justify-center sm:justify-start gap-2 flex-shrink-0">
                        <div className="w-10 h-10 sm:w-12 sm:h-12 flex items-center justify-center hover:scale-110 transition-transform duration-300 magnetic-btn">
                          <img 
                            src={exp.logo} 
                            alt={`${exp.company} logo`}
                            className="w-full h-full object-contain group-hover:drop-shadow-xl transition-all duration-300"
                            onError={(e) => {
                              const target = e.target as HTMLImageElement;
                              target.style.display = 'none';
                              const parent = target.parentElement;
                              if (parent) {
                                parent.className = "w-10 h-10 sm:w-12 sm:h-12 bg-gradient-primary rounded-lg flex items-center justify-center text-sm sm:text-lg font-bold text-primary-foreground";
                                parent.innerHTML = exp.company.charAt(0);
                              }
                            }}
                          />
                        </div>
                        {/* Note: secondaryLogo is not used in the current array, but kept for future-proofing your UI component */}
                        {(exp as any).secondaryLogo && (
                          <div className="w-10 h-10 sm:w-12 sm:h-12 flex items-center justify-center">
                            <img 
                              src={(exp as any).secondaryLogo} 
                              alt={`${exp.company} secondary logo`}
                              className="w-full h-full object-contain"
                            />
                          </div>
                        )}
                      </div>
                      
                      {/* Role and Company Info */}
                      <div className="text-center sm:text-left">
                        <h3 className="text-xl sm:text-2xl font-bold text-foreground mb-2">{exp.role}</h3>
                        <div className="flex flex-col sm:flex-row sm:items-center gap-1 sm:gap-2 mb-2">
                          <span className="text-lg sm:text-xl text-primary font-semibold">{exp.company}</span>
                          {exp.current && (
                            <span className="px-3 py-1 bg-primary/10 text-primary text-sm rounded-full self-center sm:self-auto">
                              Current
                            </span>
                          )}
                        </div>
                      </div>
                    </div>
                    <div className="text-sm text-text-muted bg-muted px-3 sm:px-4 py-1 sm:py-2 rounded-full mt-3 sm:mt-4 lg:mt-0 self-center sm:self-auto whitespace-nowrap">
                      {exp.period}
                    </div>
                  </div>

                  <p className="text-sm sm:text-base text-text-secondary mb-4 sm:mb-6 leading-relaxed">
                    {exp.description}
                  </p>

                  {/* Achievements */}
                  <div className="mb-4 sm:mb-6">
                    <h4 className="text-base sm:text-lg font-semibold text-foreground mb-2 sm:mb-3">Key Achievements:</h4>
                    <ul className="space-y-2">
                      {exp.achievements.map((achievement, i) => (
                        <li key={i} className="flex items-start gap-2 sm:gap-3 text-sm sm:text-base text-text-secondary">
                          <span className="w-2 h-2 bg-primary rounded-full mt-1.5 sm:mt-2 flex-shrink-0 group-hover:scale-125 transition-transform duration-300"></span>
                          <span>{achievement}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  {/* Technologies */}
                  <div className="flex flex-wrap gap-2 sm:gap-2.5">
                    {exp.technologies.map((tech, i) => (
                      <span 
                        key={i}
                        className="px-3 py-1 bg-accent/10 text-accent text-xs sm:text-sm rounded-full border border-accent/20 hover:bg-accent/20 hover:border-accent/40 transition-all duration-300 cursor-default"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default ExperienceSection;