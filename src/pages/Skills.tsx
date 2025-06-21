
import React from 'react';
import { Code, Wrench, Cloud, Users } from 'lucide-react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';

const Skills = () => {
  const skillCategories = [
    {
      title: 'Languages',
      icon: Code,
      skills: ['C++', 'Python', 'Java', 'JavaScript', 'HTML', 'CSS', 'MySQL'],
      color: 'bg-blue-100 text-blue-800 border-blue-200'
    },
    {
      title: 'Frameworks',
      icon: Wrench,
      skills: ['React', 'Angular', 'Django', 'Node.js', 'Express.js'],
      color: 'bg-green-100 text-green-800 border-green-200'
    },
    {
      title: 'Tools & Cloud',
      icon: Cloud,
      skills: ['Git', 'PostgreSQL', 'Docker', 'AWS', 'Kubernetes', 'Jenkins', 'Terraform'],
      color: 'bg-purple-100 text-purple-800 border-purple-200'
    },
    {
      title: 'Soft Skills',
      icon: Users,
      skills: ['Leadership', 'Empathy', 'Event Management', 'Critical Thinking', 'Team Collaboration'],
      color: 'bg-orange-100 text-orange-800 border-orange-200'
    }
  ];

  return (
    <div className="min-h-screen py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-6xl mx-auto">
        <h1 className="text-4xl font-bold text-gray-900 mb-8 text-center">Skills & Expertise</h1>
        
        <p className="text-xl text-gray-600 text-center mb-12 max-w-3xl mx-auto">
          Here's a comprehensive overview of the technologies, tools, and skills I've mastered 
          throughout my journey as a developer and student.
        </p>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {skillCategories.map((category, index) => (
            <Card key={index} className="shadow-lg hover:shadow-xl transition-shadow duration-300 hover:-translate-y-1">
              <CardHeader>
                <CardTitle className="flex items-center gap-3">
                  <category.icon className="w-6 h-6 text-teal-600" />
                  {category.title}
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="flex flex-wrap gap-2">
                  {category.skills.map((skill, skillIndex) => (
                    <Badge
                      key={skillIndex}
                      variant="secondary"
                      className={`${category.color} hover:shadow-md transition-all duration-200 hover:scale-105 cursor-default`}
                    >
                      {skill}
                    </Badge>
                  ))}
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Additional Skills Info */}
        <div className="mt-12 text-center">
          <Card className="max-w-2xl mx-auto shadow-lg hover:shadow-xl transition-shadow duration-300">
            <CardContent className="p-8">
              <h2 className="text-2xl font-semibold text-gray-900 mb-4">
                Continuous Learning
              </h2>
              <p className="text-gray-700 leading-relaxed">
                I'm constantly expanding my skill set by exploring new technologies, 
                taking online courses, and working on personal projects. Currently focusing 
                on advanced cloud architecture patterns, microservices, and AI/ML integration.
              </p>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
};

export default Skills;
