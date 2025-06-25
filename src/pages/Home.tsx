
import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, Code, Cloud, Users, Award, Target, Zap } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';

const Home = () => {
  const techStack = [
    'React', 'Django', 'AWS', 'PostgreSQL', 'Docker', 'Node.js'
  ];

  const quickStats = [
    { icon: Code, label: 'LeetCode Problems', value: '250+' },
    { icon: Award, label: 'CodeChef Rating', value: '3⭐' },
    { icon: Users, label: 'Internships', value: '3' },
    { icon: Target, label: 'Research Papers', value: '1' },
  ];

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="text-4xl sm:text-6xl font-bold text-gray-900 mb-6">
            Hi, I'm{' '}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-teal-600 to-blue-600">
              Sandalya Sai Vivek
            </span>
          </h1>
          <p className="text-xl sm:text-2xl text-gray-600 mb-8 max-w-3xl mx-auto">
            Full-Stack Developer | Cloud Enthusiast | Research Contributor
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button asChild size="lg" className="bg-teal-600 hover:bg-teal-700">
              <Link to="/projects">
                Explore Projects
                <ArrowRight className="ml-2 w-4 h-4" />
              </Link>
            </Button>
            <Button
  onClick={() => window.open('https://drive.google.com/file/d/18CYbR5QeMmmFRmQzPlDZb9bfeBkPRHoJ/view?usp=sharing', '_blank')}
  variant="outline"
  size="lg"
  className="border-teal-600 text-teal-600 hover:bg-teal-50"
>
  Download Resume
</Button>

          </div>
        </div>
      </section>

      {/* Mission Snapshot */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-white">
        <div className="max-w-4xl mx-auto">
          <Card className="border-l-4 border-l-teal-600 shadow-lg">
            <CardContent className="p-8">
              <Zap className="w-8 h-8 text-teal-600 mb-4" />
              <blockquote className="text-xl text-gray-700 italic">
                "I build scalable systems, love backend architecture, and contribute to real-world AI research. 
                My goal is to bridge the gap between innovative technology and practical solutions."
              </blockquote>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* Tech Preview Strip */}
      <section className="py-12 px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-2xl font-bold text-center text-gray-900 mb-8">
            Technologies I Work With
          </h2>
          <div className="flex flex-wrap justify-center gap-4">
            {techStack.map((tech, index) => (
              <div
                key={index}
                className="px-4 py-2 bg-gradient-to-r from-teal-50 to-blue-50 border border-teal-200 rounded-full text-teal-700 font-medium hover:shadow-md transition-shadow"
              >
                {tech}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Quick Stats */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-gray-50">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl font-bold text-center text-gray-900 mb-12">
            Quick Stats
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {quickStats.map((stat, index) => (
              <Card key={index} className="text-center hover:shadow-lg transition-shadow">
                <CardContent className="p-6">
                  <stat.icon className="w-8 h-8 text-teal-600 mx-auto mb-4" />
                  <div className="text-2xl font-bold text-gray-900 mb-2">
                    {stat.value}
                  </div>
                  <div className="text-gray-600 text-sm">
                    {stat.label}
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-gradient-to-r from-teal-600 to-blue-600">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl font-bold text-white mb-6">
            Ready to build something amazing together?
          </h2>
          <p className="text-xl text-teal-100 mb-8">
            Let's connect and discuss how we can create impactful solutions.
          </p>
          <Button asChild size="lg" variant="secondary" className="bg-white text-teal-600 hover:bg-gray-100">
            <Link to="/contact">
              Get In Touch
              <ArrowRight className="ml-2 w-4 h-4" />
            </Link>
          </Button>
        </div>
      </section>
    </div>
  );
};

export default Home;
