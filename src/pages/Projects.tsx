import React, { useState } from 'react';
import { ExternalLink, Github, Server, Cloud, Database, BookOpen, Code } from 'lucide-react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';

const Projects = () => {
  const [clickedIndex, setClickedIndex] = useState<number | null>(null);

  const projects = [
    {
      title: 'Hospital Management System',
      description: 'A comprehensive healthcare management platform with role-based access control for admins, doctors, and patients. Features full CRUD operations, secure authentication, and real-time dashboard updates.',
      techStack: ['Node.js', 'Express.js', 'React', 'PostgreSQL', 'JWT'],
      highlights: [
        'Role-based authentication & authorization',
        'Real-time appointment scheduling',
        'Patient medical history tracking',
        'Admin dashboard with analytics'
      ],
      icon: Database,
      color: 'from-blue-500 to-cyan-500',
      github: 'https://github.com/Sandalyasaivivek/Hospital_Management_System-main.git',
      live: null
    },
    {
      title: 'Serverless AV Scheduling System',
      description: 'Edge computing optimization system for autonomous vehicles using mobility-aware prefetching and RSU load balancing. Implements custom cost-based deployment algorithms.',
      techStack: ['Python', 'Node.js', 'Docker', 'Kubernetes', 'AWS Lambda'],
      highlights: [
        'Edge computing optimization',
        'Autonomous vehicle scheduling',
        'Load balancing algorithms',
        'Serverless architecture'
      ],
      icon: Cloud,
      color: 'from-green-500 to-teal-500',
      github: null,
      live: 'https://link.springer.com/article/10.1007/s11042-023-16145-4',
      isPublication: true
    },
    {
      title: 'Doctor Appointment System',
      description: 'Full-stack web application built during internship at iPACS. Streamlined booking interface connecting doctors and patients with automated scheduling and notifications.',
      techStack: ['Django', 'PostgreSQL', 'HTML/CSS', 'JavaScript', 'Git'],
      highlights: [
        'Automated appointment scheduling',
        'Email notification system',
        'Doctor availability management',
        'Patient history tracking'
      ],
      icon: Server,
      color: 'from-purple-500 to-pink-500',
      github: null,
      live: 'https://www.ipacs.sport/about-ipacs'
    }
  ];

  return (
    <div className="min-h-screen py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-6xl mx-auto">
        <h1 className="text-4xl font-bold text-gray-900 mb-8 text-center">Projects I've Built</h1>

        <p className="text-xl text-gray-600 text-center mb-12 max-w-3xl mx-auto">
          Here are some of the key projects I've developed, showcasing my skills in 
          full-stack development, cloud computing, and system architecture.
        </p>

        <div className="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-1 gap-8">
          {projects.map((project, index) => (
            <Card key={index} className="shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-2 overflow-hidden">
              <div className={`h-2 bg-gradient-to-r ${project.color}`}></div>
              <CardHeader className="pb-4">
                <CardTitle className="flex items-center gap-3 text-xl">
                  <div className={`p-2 rounded-lg bg-gradient-to-r ${project.color}`}>
                    <project.icon className="w-6 h-6 text-white" />
                  </div>
                  {project.title}
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-6">
                <p className="text-gray-700 leading-relaxed">
                  {project.description}
                </p>

                <div>
                  <h4 className="font-semibold text-gray-900 mb-3">Key Features:</h4>
                  <ul className="space-y-2">
                    {project.highlights.map((highlight, idx) => (
                      <li key={idx} className="flex items-center gap-2 text-sm text-gray-600">
                        <div className="w-1.5 h-1.5 bg-teal-600 rounded-full"></div>
                        {highlight}
                      </li>
                    ))}
                  </ul>
                </div>

                <div>
                  <h4 className="font-semibold text-gray-900 mb-3">Tech Stack:</h4>
                  <div className="flex flex-wrap gap-2">
                    {project.techStack.map((tech, idx) => (
                      <Badge
                        key={idx}
                        variant="secondary"
                        className="bg-gray-100 text-gray-700 hover:bg-gray-200 transition-colors"
                      >
                        {tech}
                      </Badge>
                    ))}
                  </div>
                </div>

                <div className="flex gap-3 pt-4">
                  {project.github && (
                    <Button
                      variant="outline"
                      size="sm"
                      className="flex items-center gap-2"
                      onClick={() => window.open(project.github, '_blank')}
                    >
                      <Github className="w-4 h-4" />
                      View Code
                    </Button>
                  )}
                  {project.live && (
                    <Button
                      variant="outline"
                      size="sm"
                      className="flex items-center gap-2"
                      onClick={() => {
                        if (project.isPublication) {
                          setClickedIndex(index);
                        } else {
                          window.open(project.live, '_blank');
                        }
                      }}
                      disabled={project.isPublication && clickedIndex === index}
                    >
                      {project.isPublication ? (
                        <>
                          <BookOpen className="w-4 h-4" />
                          {clickedIndex === index ? 'Paper Under Review' : 'Publication'}
                        </>
                      ) : (
                        <>
                          <ExternalLink className="w-4 h-4" />
                          Company Link
                        </>
                      )}
                    </Button>
                  )}
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Additional Projects Note */}
        <div className="mt-12 text-center">
          <Card className="max-w-2xl mx-auto shadow-lg">
            <CardContent className="p-8">
              <Code className="w-8 h-8 text-teal-600 mx-auto mb-4" />
              <h2 className="text-2xl font-semibold text-gray-900 mb-4">
                More Projects Coming Soon
              </h2>
              <p className="text-gray-700 leading-relaxed">
                I'm constantly working on new projects and expanding my portfolio. 
                Check back regularly or connect with me to see what I'm currently building!
              </p>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
};

export default Projects;
