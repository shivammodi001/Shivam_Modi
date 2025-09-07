import React, { useEffect, useState } from 'react';
import { Code2, Database, Globe, Server, Zap, Shield } from 'lucide-react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';

interface Drone {
  id: number;
  x: number;
  y: number;
  vx: number;
  vy: number;
  size: number;
}

const Skills: React.FC = () => {
  const [drones, setDrones] = useState<Drone[]>([]);

  const skillCategories = [
    {
      title: "Frontend Development",
      icon: <Globe className="h-6 w-6" />,
      skills: ["HTML5", "CSS3", "JavaScript", "React", "Tailwind CSS"]
    },
    {
      title: "Backend Development",
      icon: <Server className="h-6 w-6" />,
      skills: ["Node.js", "Express.js", "Python"]
    },
    {
      title: "Database Technologies",
      icon: <Database className="h-6 w-6" />,
      skills: ["MySQL", "MongoDB"]
    },
    {
      title: "Programming Languages",
      icon: <Code2 className="h-6 w-6" />,
      skills: ["C", "C++", "Python", "JavaScript"]
    },
    {
      title: "Tools & Platforms",
      icon: <Zap className="h-6 w-6" />,
      skills: ["Git", "VS Code", "AWS (Basics)", "Render", "Netlify", "Vercel"]
    },
    {
      title: "Operating Systems & Security",
      icon: <Shield className="h-6 w-6" />,
      skills: ["Ubuntu/Linux", "Cybersecurity (Basics)"]
    }
  ];

  // Initialize drones
  useEffect(() => {
    const initialDrones: Drone[] = Array.from({ length: 8 }, (_, i) => ({
      id: i,
      x: Math.random() * window.innerWidth,
      y: Math.random() * window.innerHeight,
      vx: (Math.random() - 0.5) * 2,
      vy: (Math.random() - 0.5) * 2,
      size: Math.random() * 20 + 10
    }));
    setDrones(initialDrones);
  }, []);

  // Animate drones
  useEffect(() => {
    const interval = setInterval(() => {
      setDrones(prevDrones =>
        prevDrones.map(drone => {
          let newX = drone.x + drone.vx;
          let newY = drone.y + drone.vy;
          let newVx = drone.vx;
          let newVy = drone.vy;

          if (newX <= 0 || newX >= window.innerWidth - drone.size) {
            newVx = -newVx;
            newX = Math.max(0, Math.min(newX, window.innerWidth - drone.size));
          }
          if (newY <= 0 || newY >= window.innerHeight - drone.size) {
            newVy = -newVy;
            newY = Math.max(0, Math.min(newY, window.innerHeight - drone.size));
          }

          return { ...drone, x: newX, y: newY, vx: newVx, vy: newVy };
        })
      );
    }, 50);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="min-h-screen pt-20 pb-12 relative overflow-hidden">
      {/* Animated Background */}
      <div className="fixed inset-0 pointer-events-none z-0">
        {drones.map(drone => (
          <div
            key={drone.id}
            className="absolute transition-all duration-75 ease-linear"
            style={{
              left: `${drone.x}px`,
              top: `${drone.y}px`,
              width: `${drone.size}px`,
              height: `${drone.size}px`,
            }}
          >
            <div className="w-full h-full bg-gradient-hero opacity-20 rounded-full animate-pulse shadow-glow"></div>
          </div>
        ))}
      </div>

      <div className="container mx-auto px-4 relative z-10">
        {/* Header */}
        <div className="text-center mb-16 animate-fade-in">
          <h1 className="text-4xl lg:text-6xl font-bold mb-6 bg-gradient-hero bg-clip-text text-transparent">
            Skills & Expertise
          </h1>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            A quick overview of my technical skills covering frontend, backend,
            databases, programming, tools, platforms, and security.
          </p>
        </div>

        {/* Skills Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {skillCategories.map((category, categoryIndex) => (
            <Card
              key={category.title}
              className="hover-lift hover-glow bg-card/80 backdrop-blur-sm animate-scale-in"
              style={{ animationDelay: `${categoryIndex * 0.1}s` }}
            >
              <CardHeader>
                <CardTitle className="flex items-center space-x-3">
                  <div className="p-2 bg-primary/10 text-primary rounded-lg">
                    {category.icon}
                  </div>
                  <span>{category.title}</span>
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="grid grid-cols-2 gap-3">
                  {category.skills.map((skill, skillIndex) => (
                    <div
                      key={skill}
                      className="group relative p-3 bg-secondary/50 hover:bg-primary hover:text-white rounded-lg text-center transition-all duration-300 cursor-pointer animate-fade-in"
                      style={{
                        animationDelay: `${categoryIndex * 0.1 + skillIndex * 0.05}s`
                      }}
                    >
                      <span className="text-sm font-medium relative z-10">{skill}</span>
                      <div className="absolute inset-0 bg-gradient-hero opacity-0 group-hover:opacity-100 rounded-lg transition-opacity duration-300"></div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Skill Proficiency */}
        <div className="mb-16">
          <h2 className="text-3xl font-bold text-center mb-8">Proficiency Levels</h2>
          <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            {[
              { skill: "Frontend (React, JS, CSS, Tailwind)", level: 90 },
              { skill: "Backend (Node.js, Express, Python)", level: 80 },
              { skill: "Databases (MySQL, MongoDB)", level: 75 },
              { skill: "Programming (C, C++, Python)", level: 85 },
              { skill: "TypeScript", level: 70 },
              { skill: "Cloud & Tools (AWS, Render, Netlify, Vercel, Git)", level: 65 },
              { skill: "Linux & Cybersecurity (Basics)", level: 60 }
            ].map((item, index) => (
              <div key={item.skill} className="animate-slide-up" style={{ animationDelay: `${index * 0.1}s` }}>
                <div className="flex justify-between mb-2">
                  <span className="font-medium">{item.skill}</span>
                  <span className="text-primary font-semibold">{item.level}%</span>
                </div>
                <div className="w-full bg-secondary rounded-full h-3 overflow-hidden">
                  <div
                    className="h-full bg-gradient-hero transition-all duration-1000 ease-out"
                    style={{
                      width: `${item.level}%`,
                      animationDelay: `${index * 0.1 + 0.5}s`
                    }}
                  ></div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Currently Learning - Flip Cards */}
        <div className="text-center animate-fade-in">
          <h2 className="text-2xl font-bold mb-8">Currently Learning</h2>
          <div className="flex flex-wrap justify-center gap-6">
            {[
              { tech: "Next.js", desc: "Full-stack React framework for production apps 🚀" },
              { tech: "DSA", desc: "Mastering problem-solving & algorithms 💡" },
              { tech: "Blockchain", desc: "Exploring decentralized apps & Web3 🔗" }
            ].map((item, index) => (
              <div
                key={item.tech}
                className="w-40 h-40 [perspective:1000px] animate-scale-in"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className="relative w-full h-full transition-transform duration-700 [transform-style:preserve-3d] hover:[transform:rotateY(180deg)]">
                  {/* Front */}
                  <div className="absolute inset-0 bg-gradient-hero text-white rounded-xl shadow-lg flex items-center justify-center text-lg font-bold [backface-visibility:hidden]">
                    {item.tech}
                  </div>
                  {/* Back */}
                  <div className="absolute inset-0 bg-card text-sm text-center p-4 rounded-xl shadow-lg flex items-center justify-center [transform:rotateY(180deg)] [backface-visibility:hidden]">
                    {item.desc}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Skills;
