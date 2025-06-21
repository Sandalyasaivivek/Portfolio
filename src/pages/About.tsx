import React from 'react';
import { GraduationCap, MapPin, Calendar, Heart } from 'lucide-react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import logo from './me.svg';

const About = () => {
  return (
    <div className="min-h-screen py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-4xl font-bold text-gray-900 mb-8 text-center">About Me</h1>

        {/* Bio Section */}
        <Card className="mb-8 shadow-lg">
          <CardContent className="p-8">
            <div className="flex flex-col lg:flex-row items-start gap-8">
              <div className="flex-shrink-0">
                <div className="w-32 h-32 rounded-full overflow-hidden flex items-center justify-center">
                  <img src={logo} alt="Logo" className="object-cover w-full h-full" />
                </div>
              </div>
              <div className="flex-grow">
                <p className="text-lg text-gray-700 leading-relaxed mb-6">
                  I'm a final-year B.Tech Computer Science student at IIITDM Kurnool, passionate about 
                  building scalable backend systems and cloud-native applications. My journey in technology 
                  has been driven by curiosity and a desire to solve real-world problems through innovative solutions.
                </p>
                <p className="text-lg text-gray-700 leading-relaxed">
                  I specialize in full-stack development with a strong focus on backend architecture, 
                  cloud platforms, and emerging technologies. Beyond coding, I enjoy contributing to research 
                  and sharing knowledge with the developer community.
                </p>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Education Timeline */}
        <Card className="mb-8 shadow-lg">
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <GraduationCap className="w-6 h-6 text-teal-600" />
              Education
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-6">

              {/* B.Tech */}
              <div className="border-l-4 border-teal-600 pl-6 pb-6">
                <div className="flex items-center gap-2 text-sm text-gray-500 mb-2">
                  <Calendar className="w-4 h-4" />
                  Dec 2021 - Apr 2025
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-2">
                  B.Tech in Computer Science & Engineering
                </h3>
                <div className="flex items-center gap-2 text-gray-600 mb-3">
                  <MapPin className="w-4 h-4" />
                  Indian Institute of Information Technology Design & Manufacturing, Kurnool, AP
                </div>
                <p className="text-gray-700 mb-1">
                  GPA: 7.4
                </p>
              </div>

              {/* Intermediate */}
              <div className="border-l-4 border-teal-600 pl-6 pb-6">
                <div className="flex items-center gap-2 text-sm text-gray-500 mb-2">
                  <Calendar className="w-4 h-4" />
                  Apr 2019 - Mar 2021
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-2">
                  Senior Secondary in Maths, Physics & Chemistry
                </h3>
                <div className="flex items-center gap-2 text-gray-600 mb-3">
                  <MapPin className="w-4 h-4" />
                  Bhashyam Junior College, Guntur, AP
                </div>
                <p className="text-gray-700 mb-1">
                  Percentage: 92.3%
                </p>
              </div>

              {/* High School */}
              <div className="border-l-4 border-teal-600 pl-6 pb-6">
                <div className="flex items-center gap-2 text-sm text-gray-500 mb-2">
                  <Calendar className="w-4 h-4" />
                  Mar 2019
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-2">
                  Board of Secondary Education, AP
                </h3>
                <div className="flex items-center gap-2 text-gray-600 mb-3">
                  <MapPin className="w-4 h-4" />
                  Bhashyam High School, Guntur, AP
                </div>
                <p className="text-gray-700 mb-1">
                  GPA: 10
                </p>
              </div>

            </div>
          </CardContent>
        </Card>

        {/* Personal Story */}
        <Card className="shadow-lg">
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <Heart className="w-6 h-6 text-teal-600" />
              What Drives Me
            </CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-gray-700 leading-relaxed mb-4">
              My passion for technology began in high school when I first discovered programming. 
              What started as curiosity about how software works has evolved into a deep appreciation 
              for the art of building robust, scalable systems.
            </p>
            <p className="text-gray-700 leading-relaxed mb-4">
              I believe in the power of technology to transform lives and solve complex problems. 
              Whether it's optimizing cloud infrastructure, developing intuitive user interfaces, 
              or contributing to AI research, I'm always looking for ways to make a meaningful impact.
            </p>
            <p className="text-gray-700 leading-relaxed">
              When I'm not coding, you'll find me exploring new technologies, contributing to open-source projects, 
              or mentoring fellow students. I'm always eager to learn, share knowledge, and collaborate 
              with like-minded individuals who share my passion for innovation.
            </p>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default About;
