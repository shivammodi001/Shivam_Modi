import React, { useEffect } from "react";
import { GraduationCap, Heart, Code, Users } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const About: React.FC = () => {
  useEffect(() => {
    // Hero Section
    gsap.fromTo(
      ".hero-section",
      { opacity: 0, y: -50 },
      {
        opacity: 1,
        y: 0,
        duration: 1.2,
        ease: "power3.out",
        scrollTrigger: {
          trigger: ".hero-section",
          start: "top 80%",
          toggleActions: "play reverse play reverse",
        },
      }
    );

    // Bio & Quick Facts
    gsap.fromTo(
      ".bio-section, .quick-facts",
      { opacity: 0, y: 50 },
      {
        opacity: 1,
        y: 0,
        duration: 1,
        stagger: 0.3,
        ease: "power3.out",
        scrollTrigger: {
          trigger: ".bio-section",
          start: "top 85%",
          toggleActions: "play reverse play reverse",
        },
      }
    );

    // Education Cards
    gsap.fromTo(
      ".education-card",
      { opacity: 0, scale: 0.9, y: 50 },
      {
        opacity: 1,
        scale: 1,
        y: 0,
        duration: 1,
        stagger: 0.3,
        ease: "power3.out",
        scrollTrigger: {
          trigger: ".education-card",
          start: "top 85%",
          toggleActions: "play reverse play reverse",
        },
      }
    );

    // Tech Stack Cards
    gsap.fromTo(
      ".tech-card",
      { opacity: 0, y: 60, rotateY: 20 },
      {
        opacity: 1,
        y: 0,
        rotateY: 0,
        duration: 0.8,
        stagger: 0.2,
        ease: "power3.out",
        scrollTrigger: {
          trigger: ".tech-stack",
          start: "top 85%",
          toggleActions: "play reverse play reverse",
        },
      }
    );
  }, []);

  return (
    <div className="min-h-screen pt-20 pb-12">
      <div className="container mx-auto px-4">
        {/* Hero Section */}
        <div className="text-center mb-16 hero-section">
          {/* Profile Picture */}
          <div className="relative w-40 h-40 mx-auto mb-6">
            <img
              src="/profile.png"
              alt="Shivam Modi"
              className="w-40 h-40 rounded-full object-cover border-4 border-primary shadow-xl animate-float"
            />
            <div className="absolute inset-0 rounded-full border-4 border-primary opacity-30 animate-ping"></div>
          </div>

          <h1 className="text-4xl lg:text-6xl font-bold mb-6 bg-gradient-hero bg-clip-text text-transparent">
            About Shivam Modi
          </h1>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            A passionate full-stack developer with a heart for social
            contribution, currently pursuing Computer Science Engineering and
            building innovative solutions.
          </p>
        </div>

        {/* Main Content */}
        <div className="grid lg:grid-cols-2 gap-12 mb-16">
          {/* Bio Section */}
          <div className="space-y-6 bio-section">
            <h2 className="text-3xl font-bold mb-4">My Journey</h2>
            <p className="text-muted-foreground leading-relaxed">
              Currently in my 3rd year of B.Tech Computer Science Engineering at
              Lovely Professional University, I'm passionate about creating
              technology solutions that make a difference. My journey began with
              a curiosity about how things work, which evolved into a deep love
              for programming and problem-solving.
            </p>
            <p className="text-muted-foreground leading-relaxed">
              Beyond academics, I'm actively involved in NGO work and social
              contributions, believing that technology should serve humanity and
              create positive change in our communities.
            </p>
            <p className="text-muted-foreground leading-relaxed">
              My hobbies include exploring new technologies, contributing to
              open-source projects, reading about emerging tech trends, and
              volunteering for social causes.
            </p>
          </div>

          {/* Quick Facts */}
          <div className="grid gap-6 quick-facts">
            <Card className="hover-lift">
              <CardHeader className="pb-3">
                <CardTitle className="flex items-center space-x-2">
                  <Code className="h-5 w-5 text-primary" />
                  <span>Full-Stack Developer</span>
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">
                  Proficient in modern web technologies and passionate about
                  creating seamless user experiences.
                </p>
              </CardContent>
            </Card>

            <Card className="hover-lift">
              <CardHeader className="pb-3">
                <CardTitle className="flex items-center space-x-2">
                  <Heart className="h-5 w-5 text-primary" />
                  <span>Social Contributor</span>
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">
                  Actively involved in NGO work and community service, using
                  technology for social good.
                </p>
              </CardContent>
            </Card>

            <Card className="hover-lift">
              <CardHeader className="pb-3">
                <CardTitle className="flex items-center space-x-2">
                  <Users className="h-5 w-5 text-primary" />
                  <span>Team Player</span>
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">
                  Collaborative mindset with excellent communication skills and
                  leadership experience.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>

        {/* Education Section */}
        <div className="mb-16">
          <h2 className="text-3xl font-bold mb-8 text-center">Education</h2>
          <div className="grid md:grid-cols-2 gap-8">
            <Card className="hover-lift education-card">
              <CardHeader>
                <div className="flex items-center space-x-3 mb-2">
                  <GraduationCap className="h-8 w-8 text-primary" />
                  <div>
                    <CardTitle className="text-xl">
                      B.Tech Computer Science Engineering
                    </CardTitle>
                    <p className="text-muted-foreground">
                      Lovely Professional University
                    </p>
                  </div>
                </div>
              </CardHeader>
              <CardContent>
                <div className="space-y-2">
                  <p className="font-semibold">2023 - Present (3rd Year)</p>
                  <p className="text-muted-foreground">
                    Specializing in software development, data structures,
                    algorithms, and modern web technologies. Active participant
                    in coding competitions and tech events.
                  </p>
                </div>
              </CardContent>
            </Card>

            <Card className="hover-lift education-card">
              <CardHeader>
                <div className="flex items-center space-x-3 mb-2">
                  <GraduationCap className="h-8 w-8 text-primary" />
                  <div>
                    <CardTitle className="text-xl">Class 12th</CardTitle>
                    <p className="text-muted-foreground">
                      Mahatma Buddha Memorial Inter College
                    </p>
                  </div>
                </div>
              </CardHeader>
              <CardContent>
                <div className="space-y-2">
                  <p className="font-semibold">85% Marks</p>
                  <p className="text-muted-foreground">
                    Strong foundation in mathematics, physics, and computer
                    science, which laid the groundwork for my engineering
                    pursuits.
                  </p>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>

        {/* Technology Stack Overview */}
        <div className="text-center tech-stack">
          <h2 className="text-3xl font-bold mb-6">Technology Stack</h2>
          <p className="text-muted-foreground mb-8 max-w-2xl mx-auto">
            Experienced in a diverse range of technologies spanning frontend,
            backend, databases, and more.
          </p>
          <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-6 max-w-4xl mx-auto">
            {[
              "HTML",
              "CSS",
              "JavaScript",
              "React",
              "Node.js",
              "MongoDB",
              "SQL",
              "Python",
              "C",
              "C++",
            ].map((tech, index) => (
              <Card key={tech} className="hover-lift tech-card">
                <CardContent className="py-4">
                  <p className="font-medium">{tech}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
