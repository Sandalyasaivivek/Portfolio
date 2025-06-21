import React, { useState } from 'react';
import { Award, BookOpen, Code, Trophy, ExternalLink, Download, Mail } from 'lucide-react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';

const Certificates = () => {
  const [isUnderReview, setIsUnderReview] = useState(false);
  const [isMailMe, setIsMailMe] = useState(false);

  return (
    <div className="min-h-screen py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-6xl mx-auto">
        <h1 className="text-4xl font-bold text-gray-900 mb-8 text-center">Certifications & Achievements</h1>

        <p className="text-xl text-gray-600 text-center mb-12 max-w-3xl mx-auto">
          My professional certifications, research contributions, and coding achievements 
          that demonstrate continuous learning and technical excellence.
        </p>

        {/* AWS Certification */}
        <div className="mb-12">
          <h2 className="text-2xl font-semibold text-gray-900 mb-6 flex items-center gap-3">
            <Award className="w-6 h-6 text-teal-600" />
            Professional Certifications
          </h2>

          <Card className="shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-1">
            <CardHeader className="bg-gradient-to-r from-orange-500 to-red-500 text-white">
              <CardTitle className="flex items-center gap-3">
                <div className="p-2 bg-white/20 rounded-lg">
                  <Award className="w-6 h-6" />
                </div>
                AWS Certified Cloud Practitioner
              </CardTitle>
            </CardHeader>
            <CardContent className="p-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <h4 className="font-semibold text-gray-900 mb-2">Certification Details</h4>
                  <p className="text-sm text-gray-600 mb-4">
                    Fundamental understanding of AWS services, cloud computing concepts, 
                    security, architecture, pricing, and support.
                  </p>
                  <div className="space-y-2">
                    <p className="text-sm"><strong>ID:</strong> 619e3b95313e44819df4c29f4d1020</p>
                    <p className="text-sm"><strong>Provider:</strong> Amazon Web Services</p>
                    <p className="text-sm"><strong>Status:</strong> <Badge className="bg-green-100 text-green-800">Active</Badge></p>
                  </div>
                </div>
                <div>
                  <h4 className="font-semibold text-gray-900 mb-3">Key Areas Covered</h4>
                  <ul className="space-y-2 text-sm text-gray-600">
                    <li className="flex items-center gap-2">
                      <div className="w-1.5 h-1.5 bg-teal-600 rounded-full"></div>
                      Cloud Computing Fundamentals
                    </li>
                    <li className="flex items-center gap-2">
                      <div className="w-1.5 h-1.5 bg-teal-600 rounded-full"></div>
                      AWS Core Services
                    </li>
                    <li className="flex items-center gap-2">
                      <div className="w-1.5 h-1.5 bg-teal-600 rounded-full"></div>
                      Security & Compliance
                    </li>
                    <li className="flex items-center gap-2">
                      <div className="w-1.5 h-1.5 bg-teal-600 rounded-full"></div>
                      Billing & Pricing Models
                    </li>
                  </ul>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Research Publication */}
        <div className="mb-12">
          <h2 className="text-2xl font-semibold text-gray-900 mb-6 flex items-center gap-3">
            <BookOpen className="w-6 h-6 text-teal-600" />
            Research Publication
          </h2>

          <Card className="shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-1">
            <CardHeader className="bg-gradient-to-r from-blue-500 to-purple-500 text-white">
              <CardTitle className="flex items-center gap-3">
                <div className="p-2 bg-white/20 rounded-lg">
                  <BookOpen className="w-6 h-6" />
                </div>
                Springer Research Paper
              </CardTitle>
            </CardHeader>
            <CardContent className="p-6">
              <h3 className="text-lg font-semibold text-gray-900 mb-3">
                "A Novel Metaheuristic-Based Image Quality Enhancement Approach with Modified 
                SegNet-RBM-Based Alzheimer Segmentation and Classification"
              </h3>
              <div className="space-y-4">
                <div className="flex items-center gap-4 text-sm text-gray-600">
                  <Badge variant="secondary">Springer</Badge>
                  <Badge variant="secondary">Multimedia Tools and Applications</Badge>
                  <Badge variant="secondary">2023</Badge>
                </div>
                <p className="text-gray-700 leading-relaxed">
                  Published research on advanced image processing techniques for medical imaging, 
                  focusing on Alzheimer's disease detection using deep learning and metaheuristic optimization.
                </p>
                <Button
                  variant="outline"
                  size="sm"
                  className="flex items-center gap-2"
                  onClick={() => setIsUnderReview(true)}
                  disabled={isUnderReview}
                >
                  <BookOpen className="w-4 h-4" />
                  {isUnderReview ? 'Under Review' : 'Publication'}
                </Button>
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Coding Achievements */}
        <div className="mb-12">
          <h2 className="text-2xl font-semibold text-gray-900 mb-6 flex items-center gap-3">
            <Code className="w-6 h-6 text-teal-600" />
            Coding Platform Achievements
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {/* LeetCode */}
            <Card className="shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-1">
              <CardHeader className="bg-gradient-to-r from-yellow-400 to-orange-500 text-white">
                <CardTitle className="flex items-center gap-3">
                  <div className="p-2 bg-white/20 rounded-lg">
                    <Code className="w-6 h-6" />
                  </div>
                  LeetCode
                </CardTitle>
              </CardHeader>
              <CardContent className="p-6">
                <div className="space-y-4">
                  <div className="text-center">
                    <div className="text-3xl font-bold text-gray-900 mb-1">250+</div>
                    <div className="text-sm text-gray-600">Problems Solved</div>
                  </div>
                  <div className="text-center">
                    <div className="text-xl font-semibold text-gray-900 mb-1">1400+</div>
                    <div className="text-sm text-gray-600">Current Rating</div>
                  </div>
                  <div className="flex justify-center">
                    <Badge className="bg-yellow-100 text-yellow-800">Active Solver</Badge>
                  </div>
                  <div className="flex justify-center pt-4">
                    <Button
                      variant="outline"
                      size="sm"
                      className="flex items-center gap-2"
                      onClick={() => window.open('https://leetcode.com/u/sandalyasai_vivek/', '_blank')}
                    >
                      <ExternalLink className="w-4 h-4" />
                      LeetCode Profile
                    </Button>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* CodeChef */}
            <Card className="shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-1">
              <CardHeader className="bg-gradient-to-r from-red-500 to-pink-500 text-white">
                <CardTitle className="flex items-center gap-3">
                  <div className="p-2 bg-white/20 rounded-lg">
                    <Trophy className="w-6 h-6" />
                  </div>
                  CodeChef
                </CardTitle>
              </CardHeader>
              <CardContent className="p-6">
                <div className="space-y-4">
                  <div className="text-center">
                    <div className="text-3xl font-bold text-gray-900 mb-1">3⭐</div>
                    <div className="text-sm text-gray-600">Star Rating</div>
                  </div>
                  <div className="text-center">
                    <div className="text-lg font-semibold text-gray-900 mb-1">Competitive</div>
                    <div className="text-sm text-gray-600">Programming</div>
                  </div>
                  <div className="flex justify-center">
                    <Badge className="bg-red-100 text-red-800">3-Star Coder</Badge>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>

        {/* Summary Card */}
        <div className="text-center">
          <Card className="max-w-2xl mx-auto shadow-lg hover:shadow-xl transition-shadow duration-300">
            <CardContent className="p-8">
              <Trophy className="w-8 h-8 text-teal-600 mx-auto mb-4" />
              <h2 className="text-2xl font-semibold text-gray-900 mb-4">
                Continuous Growth
              </h2>
              <p className="text-gray-700 leading-relaxed mb-6">
                These achievements represent my commitment to continuous learning and professional development. 
                I regularly participate in coding contests, pursue certifications, and contribute to research 
                to stay at the forefront of technology.
              </p>
              <div className="flex justify-center mb-4">
                <Button
                  className="bg-teal-600 hover:bg-teal-700 flex items-center gap-2"
                  onClick={() => setIsMailMe(true)}
                >
                  {isMailMe ? (
                    <>
                      <Mail className="w-4 h-4" />
                      Mail Me
                    </>
                  ) : (
                    <>
                      <Download className="w-4 h-4" />
                      Download All Certificates
                    </>
                  )}
                </Button>
              </div>
              {isMailMe && (
                <p className="text-teal-700 text-lg font-semibold">
psandalyasaivivek@gmail.com</p>
              )}
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
};

export default Certificates;
