// import TechIcon from '../TechIcon';
// // import { useStaggeredScrollAnimation } from '../../hooks/useScrollAnimation';

// const SkillsSection = () => {
//   // Temporarily comment out scroll animations to fix the app
//   // const { elementRef: headerRef, isInView: headerInView } = useStaggeredScrollAnimation({
//   //   threshold: 0.3,
//   //   rootMargin: '0px 0px -100px 0px'
//   // });

//   // const { elementRef: gridRef, animateChildren } = useStaggeredScrollAnimation({
//   //   threshold: 0.2,
//   //   rootMargin: '0px 0px -50px 0px'
//   // });

//   const technologies = [
//     // Core Programming & Most In-Demand
//     "JavaScript", "TypeScript", "Python", "React.js", "Next.js", "Node.js",
//     // Cloud & DevOps (High Priority for SDE1)
//     "AWS", "Docker", "Git", "PostgreSQL", "MongoDB", "Redis",
//     // Backend & Database Technologies
//     "GraphQL", "Prisma", "MySQL", "Firebase", "GCP",
//     // Mobile & Advanced Frontend
//     "Flutter", "Tailwind CSS", "Jetpack Compose", 
//     // Systems Programming & Others
//     "C++", "Kotlin", "Dart"
//   ];

//   return (
//     <section id="skills" className="py-24 bg-gradient-to-br from-secondary/30 to-card/50">
//       <div className="container mx-auto px-6">
//         <div className="max-w-6xl mx-auto">
//           {/* Section Header */}
//           <div className="text-center mb-16 fade-in-up">
//             <h2 className="text-4xl md:text-5xl font-bold text-gradient mb-6">
//               Technical Skills
//             </h2>
//             <div className="w-24 h-1 bg-gradient-primary mx-auto rounded-full"></div>
//           </div>

//           {/* Enhanced Technology Icons Grid */}
//           <div className="fade-in-up">
//             <div className="grid grid-cols-4 md:grid-cols-6 lg:grid-cols-8 gap-1 justify-items-center">
//               {technologies.map((tech, index) => (
//                 <div 
//                   key={index}
//                   className="relative group"
//                   style={{ 
//                     animationDelay: `${index * 0.08}s`,
//                     animation: 'slideInUp 0.6s ease-out forwards'
//                   }}
//                 >
//                   {/* Clean Icon container with smooth animations */}
//                   <div className="relative w-32 h-32 flex items-center justify-center">
                    
//                     <TechIcon 
//                       name={tech} 
//                       className="w-20 h-20 hover:scale-110 transition-all duration-300 relative z-10 drop-shadow-lg hover:drop-shadow-xl opacity-80 hover:opacity-100" 
//                     />
                    
//                     {/* Clean Tooltip */}
//                     <div className="absolute -top-12 left-1/2 transform -translate-x-1/2 px-3 py-2 bg-black text-white text-sm rounded-lg opacity-0 group-hover:opacity-100 transition-all duration-300 pointer-events-none whitespace-nowrap z-50 shadow-lg group-hover:-translate-y-1">
//                       {tech}
//                       {/* Tooltip arrow */}
//                       <div className="absolute top-full left-1/2 transform -translate-x-1/2 border-4 border-transparent border-t-black"></div>
//                     </div>

//                     {/* Subtle hover background */}
//                     <div className="absolute inset-0 bg-primary/5 opacity-0 group-hover:opacity-100 rounded-full transition-all duration-300 scale-95 group-hover:scale-100"></div>
                    
//                     {/* Enhanced subtle sparkle effects */}
//                     <div className="absolute inset-0 opacity-0 group-hover:opacity-60 transition-opacity duration-500 pointer-events-none">
//                       <div className="absolute top-3 right-3 w-1 h-1 bg-primary rounded-full animate-ping" style={{ animationDelay: '0.2s' }}></div>
//                       <div className="absolute bottom-3 left-3 w-0.5 h-0.5 bg-accent rounded-full animate-ping" style={{ animationDelay: '0.4s' }}></div>
//                       <div className="absolute top-1/2 left-2 w-0.5 h-0.5 bg-secondary rounded-full animate-pulse" style={{ animationDelay: '0.6s' }}></div>
//                     </div>
//                   </div>
//                 </div>
//               ))}
//             </div>
//           </div>
//         </div>
//       </div>
//     </section>
//   );
// };

// export default SkillsSection;


import TechIcon from '../TechIcon';

const SkillsSection = () => {
  const technologies = [
    "Python", "C++", "JavaScript", "TypeScript",
    "FastAPI", "Django", "Node.js", "GraphQL",
    "React.js", "Next.js", "Tailwind CSS",
    "PostgreSQL", "MongoDB", "Redis", "MySQL", "Neo4j", "SQLite",
    "PyTorch", "TensorFlow", "Scikit-learn", "LangChain", "OpenAI", "Deepseek",
    "AWS", "Docker", "Git", "GitHub Actions", "Prisma",
    "MCP", "Gradio", "Plotly",
  ];

  return (
    <section id="skills" className="py-12 bg-gradient-to-br from-secondary/30 to-card/50">
      <div className="container mx-auto px-6">
        <div className="max-w-5xl mx-auto">

          {/* Section Header */}
          <div className="text-center mb-10 fade-in-up">
            <h2 className="text-4xl md:text-5xl font-bold text-gradient mb-4">
              Technical Skills
            </h2>
            <div className="w-24 h-1 bg-gradient-primary mx-auto rounded-full"></div>
          </div>

          {/* Icons Grid */}
          <div className="grid grid-cols-6 md:grid-cols-8 lg:grid-cols-10 gap-2 justify-items-center fade-in-up">
            {technologies.map((tech, index) => (
              <div
                key={index}
                className="relative group"
                style={{
                  animationDelay: `${index * 0.05}s`,
                  animation: 'slideInUp 0.5s ease-out forwards'
                }}
              >
                <div className="relative w-16 h-16 flex items-center justify-center">

                  <TechIcon
                    name={tech}
                    className="w-12 h-12 hover:scale-110 transition-all duration-300 relative z-10 drop-shadow-sm hover:drop-shadow-md opacity-85 hover:opacity-100"                  />

                  {/* Tooltip */}
                  <div className="absolute -top-9 left-1/2 transform -translate-x-1/2 px-2 py-1 bg-black text-white text-xs rounded-md opacity-0 group-hover:opacity-100 transition-all duration-200 pointer-events-none whitespace-nowrap z-50 shadow-lg group-hover:-translate-y-0.5">
                    {tech}
                    <div className="absolute top-full left-1/2 transform -translate-x-1/2 border-4 border-transparent border-t-black"></div>
                  </div>

                  {/* Subtle hover glow */}
                </div>
              </div>
            ))}
          </div>

        </div>
      </div>
    </section>
  );
};

export default SkillsSection;