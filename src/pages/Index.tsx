import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { ArrowDown, Github, Linkedin, Mail, Download, ExternalLink, Award, Star, FileCode, FileText, Calendar, MapPin, Phone } from "lucide-react";

const Index = () => {
  const [activeSection, setActiveSection] = useState("home");

  const skills = {
    languages: ["C++", "Python", "Java", "HTML", "CSS", "JavaScript", "MySQL"],
    frameworks: ["React", "Angular", "Django", "Node.js", "Express.js"],
    tools: ["Git", "PostgreSQL", "Docker", "AWS", "Kubernetes", "Jenkins", "Terraform"],
    soft: ["Leadership", "Empathy", "Event Management", "Critical Thinking"]
  };

  const projects = [
    {
      title: "Serverless Deployment & Scheduling for Autonomous Vehicles",
      stack: ["Python", "Node.js", "Docker", "Kubernetes", "AWS"],
      description: "Built a low-latency orchestration framework for autonomous vehicle edge services. Implemented mobility-aware prefetching and cost-based service scheduling to reduce latency and resource usage.",
      highlights: [
        "Serverless functions with Docker + AWS",
        "Resource-aware scheduling at RSUs",
        "Outperformed baseline AV deployment methods"
      ]
    },
    {
      title: "Hospital Management System",
      stack: ["Node.js", "Express.js", "PostgreSQL", "React.js"],
      description: "Created a secure hospital platform with role-based access for patients, doctors, nurses, admins, and receptionists. Enabled login control, patient registration, and scheduling via REST APIs.",
      highlights: [
        "Full-stack CRUD operations",
        "Custom dashboards for 5+ roles",
        "PostgreSQL for backend data layer"
      ]
    }
  ];

  const experiences = [
    {
      company: "iPACS",
      role: "Web Developer Intern",
      period: "June 2024 – Sept 2024",
      description: "Built a full-stack Doctor Appointment System using Django, PostgreSQL, Git, HTML/CSS/JS. Streamlined doctor-patient booking interface.",
      icon: "💼"
    },
    {
      company: "NIT Warangal",
      role: "Cloud Security Intern",
      period: "June 2023 – July 2023",
      description: "Developed JWT-based hybrid authentication using MongoDB, Express.js, React, Node.js. Secured cloud access for internal resources.",
      icon: "🔒"
    },
    {
      company: "Samsung Innovation Campus",
      role: "Python Developer Trainee",
      period: "Mar 2023 – May 2023",
      description: "Built alarm clock using NumPy, Pandas, Matplotlib. Strengthened Python fundamentals and data visualization skills.",
      icon: "⏰"
    }
  ];

  const techStack = {
    languages: ["C++", "Python", "Java", "HTML", "CSS", "JavaScript", "MySQL"],
    frameworks: ["React", "Angular", "Django", "Node.js", "Express.js"],
    tools: ["Git", "PostgreSQL", "Docker", "Jenkins", "Terraform"],
    cloud: ["AWS (EC2, S3, CloudFront)", "Kubernetes", "CI/CD pipelines"],
    soft: ["Critical Thinking", "Leadership", "Empathy", "Event Management"]
  };

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  useEffect(() => {
    const handleScroll = () => {
      const sections = ["home", "about", "skills", "projects", "experience", "techstack", "certifications", "achievements", "contact"];
      const scrollPosition = window.scrollY + 100;

      for (const section of sections) {
        const element = document.getElementById(section);
        if (element) {
          const { offsetTop, offsetHeight } = element;
          if (scrollPosition >= offsetTop && scrollPosition < offsetTop + offsetHeight) {
            setActiveSection(section);
            break;
          }
        }
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div className="min-h-screen bg-slate-50">
      {/* Navigation */}
      <nav className="fixed top-0 left-0 right-0 bg-white/80 backdrop-blur-md border-b border-slate-200 z-50">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <div className="font-bold text-xl text-slate-800">
              Sandalya Sai Vivek
            </div>
            
            <div className="hidden md:flex space-x-6">
              {[
                { id: "home", label: "Home" },
                { id: "about", label: "About" },
                { id: "skills", label: "Skills" },
                { id: "projects", label: "Projects" },
                { id: "experience", label: "Experience" },
                { id: "certifications", label: "Certifications" },
                { id: "achievements", label: "Achievements" },
                { id: "contact", label: "Contact" }
              ].map((item) => (
                <button
                  key={item.id}
                  onClick={() => scrollToSection(item.id)}
                  className={`text-sm font-medium transition-colors hover:text-blue-600 ${
                    activeSection === item.id ? "text-blue-600" : "text-slate-600"
                  }`}
                >
                  {item.label}
                </button>
              ))}
            </div>

            <Button 
              variant="outline" 
              size="sm"
              className="hidden sm:flex items-center gap-2 border-blue-200 text-blue-600 hover:bg-blue-50"
            >
              <Download className="h-4 w-4" />
              Resume
            </Button>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section id="home" className="pt-24 pb-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto">
          <div className="text-center space-y-8">
            <div className="space-y-4">
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-slate-800 leading-tight">
                Hi, I'm{" "}
                <span className="text-blue-600">Sandalya Sai Vivek</span>
              </h1>
              <p className="text-xl sm:text-2xl text-slate-600 font-medium">
                Cloud Developer | Full-Stack Engineer | Research Contributor
              </p>
              <p className="text-lg text-slate-500 max-w-2xl mx-auto">
                Blending engineering precision with a research-driven mindset.
              </p>
            </div>

            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <Button 
                size="lg" 
                className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-3"
                onClick={() => scrollToSection("skills")}
              >
                View Projects
                <ExternalLink className="ml-2 h-4 w-4" />
              </Button>
              <Button 
                variant="outline" 
                size="lg"
                className="border-blue-200 text-blue-600 hover:bg-blue-50 px-8 py-3"
              >
                <Download className="mr-2 h-4 w-4" />
                Download Resume
              </Button>
            </div>

            <div className="pt-8">
              <button
                onClick={() => scrollToSection("about")}
                className="text-slate-400 hover:text-slate-600 transition-colors animate-bounce"
              >
                <ArrowDown className="h-6 w-6 mx-auto" />
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-16 px-4 sm:px-6 lg:px-8 bg-white">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl sm:text-4xl font-bold text-slate-800 mb-4">
              About Me
            </h2>
          </div>
          
          <Card className="border-slate-200 shadow-lg">
            <CardContent className="p-8">
              <div className="flex flex-col md:flex-row items-center gap-8">
                <div className="w-32 h-32 bg-gradient-to-br from-blue-400 to-blue-600 rounded-full flex items-center justify-center text-white text-2xl font-bold">
                  SSV
                </div>
                <div className="flex-1 text-center md:text-left">
                  <p className="text-lg text-slate-600 leading-relaxed">
                    Final-year B.Tech CSE student at <span className="font-semibold">IIITDM Kurnool</span>. 
                    I specialize in backend systems, cloud platforms, and full-stack development. 
                    Passionate about solving scalable tech problems and contributing to real-world research.
                  </p>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* Skills Section */}
      <section id="skills" className="py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl sm:text-4xl font-bold text-slate-800 mb-4">
              Skills & Expertise
            </h2>
            <p className="text-lg text-slate-600">
              Technologies and tools I work with
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            <Card className="border-slate-200 hover:shadow-lg transition-shadow">
              <CardContent className="p-6">
                <h3 className="font-semibold text-slate-800 mb-4 text-center">Languages</h3>
                <div className="flex flex-wrap gap-2">
                  {skills.languages.map((skill) => (
                    <Badge key={skill} variant="secondary" className="bg-blue-100 text-blue-700 hover:bg-blue-200">
                      {skill}
                    </Badge>
                  ))}
                </div>
              </CardContent>
            </Card>

            <Card className="border-slate-200 hover:shadow-lg transition-shadow">
              <CardContent className="p-6">
                <h3 className="font-semibold text-slate-800 mb-4 text-center">Frameworks</h3>
                <div className="flex flex-wrap gap-2">
                  {skills.frameworks.map((skill) => (
                    <Badge key={skill} variant="secondary" className="bg-green-100 text-green-700 hover:bg-green-200">
                      {skill}
                    </Badge>
                  ))}
                </div>
              </CardContent>
            </Card>

            <Card className="border-slate-200 hover:shadow-lg transition-shadow">
              <CardContent className="p-6">
                <h3 className="font-semibold text-slate-800 mb-4 text-center">Tools & Cloud</h3>
                <div className="flex flex-wrap gap-2">
                  {skills.tools.map((skill) => (
                    <Badge key={skill} variant="secondary" className="bg-purple-100 text-purple-700 hover:bg-purple-200">
                      {skill}
                    </Badge>
                  ))}
                </div>
              </CardContent>
            </Card>

            <Card className="border-slate-200 hover:shadow-lg transition-shadow">
              <CardContent className="p-6">
                <h3 className="font-semibold text-slate-800 mb-4 text-center">Soft Skills</h3>
                <div className="flex flex-wrap gap-2">
                  {skills.soft.map((skill) => (
                    <Badge key={skill} variant="secondary" className="bg-orange-100 text-orange-700 hover:bg-orange-200">
                      {skill}
                    </Badge>
                  ))}
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section id="projects" className="py-16 px-4 sm:px-6 lg:px-8 bg-white">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl sm:text-4xl font-bold text-slate-800 mb-4">
              Projects
            </h2>
            <p className="text-lg text-slate-600">
              Technical solutions I've built and deployed
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {projects.map((project, index) => (
              <Card key={index} className="border-slate-200 hover:shadow-lg transition-all duration-300 hover:-translate-y-1">
                <CardContent className="p-8">
                  <div className="flex items-start gap-3 mb-4">
                    <FileCode className="h-6 w-6 text-blue-600 mt-1 flex-shrink-0" />
                    <h3 className="text-xl font-semibold text-slate-800 leading-tight">
                      {project.title}
                    </h3>
                  </div>
                  
                  <div className="flex flex-wrap gap-2 mb-4">
                    {project.stack.map((tech) => (
                      <Badge key={tech} variant="secondary" className="bg-blue-100 text-blue-700 hover:bg-blue-200">
                        {tech}
                      </Badge>
                    ))}
                  </div>
                  
                  <p className="text-slate-600 mb-4 leading-relaxed">
                    {project.description}
                  </p>
                  
                  <div className="space-y-2">
                    {project.highlights.map((highlight, idx) => (
                      <div key={idx} className="flex items-center gap-2 text-sm text-slate-500">
                        <Star className="h-3 w-3 text-blue-500" />
                        {highlight}
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Experience Section */}
      <section id="experience" className="py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl sm:text-4xl font-bold text-slate-800 mb-4">
              Experience
            </h2>
            <p className="text-lg text-slate-600">
              Professional internships and industry experience
            </p>
          </div>

          <div className="space-y-8">
            {experiences.map((exp, index) => (
              <Card key={index} className="border-slate-200 hover:shadow-lg transition-all duration-300">
                <CardContent className="p-8">
                  <div className="flex items-start gap-6">
                    <div className="text-3xl">{exp.icon}</div>
                    <div className="flex-1">
                      <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-2">
                        <h3 className="text-xl font-semibold text-slate-800">
                          {exp.role}
                        </h3>
                        <div className="flex items-center gap-2 text-slate-500 text-sm">
                          <Calendar className="h-4 w-4" />
                          {exp.period}
                        </div>
                      </div>
                      <h4 className="text-lg font-medium text-blue-600 mb-3">
                        {exp.company}
                      </h4>
                      <p className="text-slate-600 leading-relaxed">
                        {exp.description}
                      </p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Technology Stack Section */}
      <section id="techstack" className="py-16 px-4 sm:px-6 lg:px-8 bg-white">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl sm:text-4xl font-bold text-slate-800 mb-4">
              Tech Stack
            </h2>
            <p className="text-lg text-slate-600">
              Technologies and tools I work with professionally
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-6">
            <Card className="border-slate-200 hover:shadow-lg transition-shadow">
              <CardContent className="p-6">
                <h3 className="font-semibold text-slate-800 mb-4 text-center">Languages</h3>
                <div className="flex flex-wrap gap-2">
                  {techStack.languages.map((skill) => (
                    <Badge key={skill} variant="secondary" className="bg-blue-100 text-blue-700 hover:bg-blue-200">
                      {skill}
                    </Badge>
                  ))}
                </div>
              </CardContent>
            </Card>

            <Card className="border-slate-200 hover:shadow-lg transition-shadow">
              <CardContent className="p-6">
                <h3 className="font-semibold text-slate-800 mb-4 text-center">Frameworks</h3>
                <div className="flex flex-wrap gap-2">
                  {techStack.frameworks.map((skill) => (
                    <Badge key={skill} variant="secondary" className="bg-green-100 text-green-700 hover:bg-green-200">
                      {skill}
                    </Badge>
                  ))}
                </div>
              </CardContent>
            </Card>

            <Card className="border-slate-200 hover:shadow-lg transition-shadow">
              <CardContent className="p-6">
                <h3 className="font-semibold text-slate-800 mb-4 text-center">Tools & DevOps</h3>
                <div className="flex flex-wrap gap-2">
                  {techStack.tools.map((skill) => (
                    <Badge key={skill} variant="secondary" className="bg-purple-100 text-purple-700 hover:bg-purple-200">
                      {skill}
                    </Badge>
                  ))}
                </div>
              </CardContent>
            </Card>

            <Card className="border-slate-200 hover:shadow-lg transition-shadow">
              <CardContent className="p-6">
                <h3 className="font-semibold text-slate-800 mb-4 text-center">Cloud & Infra</h3>
                <div className="flex flex-wrap gap-2">
                  {techStack.cloud.map((skill) => (
                    <Badge key={skill} variant="secondary" className="bg-orange-100 text-orange-700 hover:bg-orange-200">
                      {skill}
                    </Badge>
                  ))}
                </div>
              </CardContent>
            </Card>

            <Card className="border-slate-200 hover:shadow-lg transition-shadow">
              <CardContent className="p-6">
                <h3 className="font-semibold text-slate-800 mb-4 text-center">Soft Skills</h3>
                <div className="flex flex-wrap gap-2">
                  {techStack.soft.map((skill) => (
                    <Badge key={skill} variant="secondary" className="bg-teal-100 text-teal-700 hover:bg-teal-200">
                      {skill}
                    </Badge>
                  ))}
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Certifications Section */}
      <section id="certifications" className="py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl sm:text-4xl font-bold text-slate-800 mb-4">
              Certifications
            </h2>
            <p className="text-lg text-slate-600">
              Professional credentials and validations
            </p>
          </div>

          <Card className="border-slate-200 hover:shadow-lg transition-shadow">
            <CardContent className="p-8">
              <div className="flex items-center gap-4 mb-4">
                <div className="w-16 h-16 bg-gradient-to-br from-orange-400 to-orange-600 rounded-lg flex items-center justify-center">
                  <Award className="h-8 w-8 text-white" />
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-slate-800">
                    AWS Certified Cloud Practitioner
                  </h3>
                  <p className="text-slate-500 text-sm">
                    Cert ID: 619e3b95313e44819df4c29f4d1020
                  </p>
                </div>
              </div>
              <p className="text-slate-600 leading-relaxed">
                Demonstrated understanding of AWS core services, security, architecture, and cloud economics. 
                Validated expertise in cloud computing fundamentals and AWS platform capabilities.
              </p>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* Achievements Section */}
      <section id="achievements" className="py-16 px-4 sm:px-6 lg:px-8 bg-white">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl sm:text-4xl font-bold text-slate-800 mb-4">
              Achievements & Recognition
            </h2>
            <p className="text-lg text-slate-600">
              Research contributions and competitive programming accomplishments
            </p>
          </div>

          <div className="space-y-6">
            {/* Research Publication */}
            <Card className="border-slate-200 hover:shadow-lg transition-shadow">
              <CardContent className="p-8">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-gradient-to-br from-green-400 to-green-600 rounded-lg flex items-center justify-center flex-shrink-0">
                    <FileText className="h-6 w-6 text-white" />
                  </div>
                  <div className="flex-1">
                    <div className="flex items-center gap-2 mb-2">
                      <h3 className="text-lg font-semibold text-slate-800">
                        Research Publication
                      </h3>
                      <Badge variant="secondary" className="bg-green-100 text-green-700">
                        Springer 2023
                      </Badge>
                    </div>
                    <h4 className="text-slate-700 font-medium mb-2">
                      "Metaheuristic-Based Image Enhancement using Modified SegNet-RBM for Alzheimer Detection"
                    </h4>
                    <p className="text-slate-600 text-sm mb-2">
                      <em>Springer Multimedia Tools and Applications</em>, 2023
                    </p>
                    <p className="text-slate-600 leading-relaxed">
                      Published a novel AI-based segmentation algorithm for Alzheimer disease detection using hybrid deep learning methods.
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Coding Accomplishments */}
            <Card className="border-slate-200 hover:shadow-lg transition-shadow">
              <CardContent className="p-8">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-gradient-to-br from-purple-400 to-purple-600 rounded-lg flex items-center justify-center flex-shrink-0">
                    <FileCode className="h-6 w-6 text-white" />
                  </div>
                  <div className="flex-1">
                    <h3 className="text-lg font-semibold text-slate-800 mb-4">
                      Coding Accomplishments
                    </h3>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                      <div className="flex items-center gap-3">
                        <div className="w-8 h-8 bg-yellow-100 rounded-full flex items-center justify-center">
                          <Star className="h-4 w-4 text-yellow-600" />
                        </div>
                        <div>
                          <p className="font-medium text-slate-700">LeetCode</p>
                          <p className="text-sm text-slate-500">250+ problems solved (Rating 1400+)</p>
                        </div>
                      </div>
                      <div className="flex items-center gap-3">
                        <div className="w-8 h-8 bg-blue-100 rounded-full flex items-center justify-center">
                          <Star className="h-4 w-4 text-blue-600" />
                        </div>
                        <div>
                          <p className="font-medium text-slate-700">CodeChef</p>
                          <p className="text-sm text-slate-500">3-Star Rated</p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl sm:text-4xl font-bold text-slate-800 mb-4">
            Let's Build Something Great Together!
          </h2>
          <p className="text-lg text-slate-600 mb-8">
            I'm always open to discussing new opportunities and collaborations.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-8">
            <Button 
              size="lg" 
              className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-3"
              onClick={() => window.open("mailto:psandalyasaivivek@gmail.com")}
            >
              <Mail className="mr-2 h-4 w-4" />
              Get In Touch
            </Button>
            <Button 
              variant="outline" 
              size="lg"
              className="border-slate-300 text-slate-600 hover:bg-slate-50 px-6 py-3"
              onClick={() => window.open("https://github.com/Sandalyasaivivek", "_blank")}
            >
              <Github className="mr-2 h-4 w-4" />
              GitHub
            </Button>
            <Button 
              variant="outline" 
              size="lg"
              className="border-slate-300 text-slate-600 hover:bg-slate-50 px-6 py-3"
              onClick={() => window.open("https://linkedin.com/in/pssaivivek", "_blank")}
            >
              <Linkedin className="mr-2 h-4 w-4" />
              LinkedIn
            </Button>
          </div>

          <div className="text-slate-500">
            <p>psandalyasaivivek@gmail.com</p>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-12 px-4 sm:px-6 lg:px-8 bg-slate-800 text-slate-200">
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
            {/* Contact Info */}
            <div>
              <h3 className="text-lg font-semibold text-white mb-4">Contact Info</h3>
              <div className="space-y-3">
                <div className="flex items-center gap-3">
                  <Mail className="h-4 w-4 text-blue-400" />
                  <a href="mailto:psandalyasaivivek@gmail.com" className="hover:text-blue-400 transition-colors">
                    psandalyasaivivek@gmail.com
                  </a>
                </div>
                <div className="flex items-center gap-3">
                  <Phone className="h-4 w-4 text-blue-400" />
                  <span>+91 7036959369</span>
                </div>
                <div className="flex items-center gap-3">
                  <MapPin className="h-4 w-4 text-blue-400" />
                  <span>IIITDM Kurnool, India</span>
                </div>
              </div>
            </div>

            {/* Social Links */}
            <div>
              <h3 className="text-lg font-semibold text-white mb-4">Connect</h3>
              <div className="space-y-3">
                <div className="flex items-center gap-3">
                  <Github className="h-4 w-4 text-blue-400" />
                  <a 
                    href="https://github.com/Sandalyasaivivek" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="hover:text-blue-400 transition-colors"
                  >
                    github.com/Sandalyasaivivek
                  </a>
                </div>
                <div className="flex items-center gap-3">
                  <Linkedin className="h-4 w-4 text-blue-400" />
                  <a 
                    href="https://linkedin.com/in/pssaivivek" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="hover:text-blue-400 transition-colors"
                  >
                    linkedin.com/in/pssaivivek
                  </a>
                </div>
              </div>
            </div>

            {/* Resume Download */}
            <div>
              <h3 className="text-lg font-semibold text-white mb-4">Resume</h3>
              <Button 
                className="bg-blue-600 hover:bg-blue-700 text-white"
                onClick={() => window.open("#", "_blank")}
              >
                <Download className="mr-2 h-4 w-4" />
                Download Resume
              </Button>
              <p className="text-sm text-slate-400 mt-2">
                One-page resume for recruiters
              </p>
            </div>
          </div>

          {/* Bottom Line */}
          <div className="pt-8 border-t border-slate-700 text-center">
            <p className="text-slate-400">
              © 2025 Sandalya Sai Vivek Peddisetty — All rights reserved.
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;
