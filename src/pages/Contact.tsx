'use client';
import React, { useState } from 'react';
import { Mail, Phone, MapPin, Github, Linkedin, Send, Download, Check } from 'lucide-react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSent, setIsSent] = useState(false);

  const handleResumeDownload = () => {
    window.open('https://drive.google.com/file/d/1cwjP6wwV5xk1VBoayrr3Ja4F5kfbO6kg/view?usp=sharing', '_blank');
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    setIsSent(false);

    try {
      const response = await fetch('https://formspree.io/f/mqabdgwp', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(formData)
      });

      if (response.ok) {
        setIsSent(true);
        setFormData({
          name: '',
          email: '',
          subject: '',
          message: ''
        });
      } else {
        alert('Something went wrong. Please try again.');
      }
    } catch (err) {
      alert('Network error. Please try again.');
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="min-h-screen py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-6xl mx-auto">
        <h1 className="text-4xl font-bold text-gray-900 mb-8 text-center">Get In Touch</h1>
        
        <p className="text-xl text-gray-600 text-center mb-12 max-w-3xl mx-auto">
          I'm always open to discussing new opportunities, collaborations, or just having a 
          conversation about technology. Feel free to reach out!
        </p>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Contact Information */}
          <div className="space-y-8">
            <Card className="shadow-lg">
              <CardHeader>
                <CardTitle>Contact Information</CardTitle>
              </CardHeader>
              <CardContent className="space-y-6">
                <div className="flex items-center gap-4">
                  <Mail className="w-6 h-6 text-teal-600" />
                  <div>
                    <p className="font-medium text-gray-900">Email</p>
                    <a href="mailto:psandalyasaivivek@gmail.com" className="text-teal-600 hover:text-teal-700 transition-colors">
                      psandalyasaivivek@gmail.com
                    </a>
                  </div>
                </div>
                <div className="flex items-center gap-4">
                  <Phone className="w-6 h-6 text-teal-600" />
                  <div>
                    <p className="font-medium text-gray-900">Phone</p>
                    <p className="text-gray-700">+91 7036959369</p>
                  </div>
                </div>
                <div className="flex items-center gap-4">
                  <MapPin className="w-6 h-6 text-teal-600" />
                  <div>
                    <p className="font-medium text-gray-900">Location</p>
                    <p className="text-gray-700">Kurnool, Andhra Pradesh, India</p>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Social Links */}
            <Card className="shadow-lg">
              <CardHeader>
                <CardTitle>Connect Online</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <a href="https://github.com/Sandalyasaivivek" target="_blank" rel="noopener noreferrer" className="flex items-center gap-4 p-3 rounded-lg border border-gray-200 hover:border-teal-300 hover:bg-teal-50 transition-colors">
                  <Github className="w-6 h-6 text-gray-700" />
                  <div>
                    <p className="font-medium text-gray-900">GitHub</p>
                    <p className="text-sm text-gray-600">github.com/Sandalyasaivivek</p>
                  </div>
                </a>
                <a href="https://linkedin.com/in/pssaivivek" target="_blank" rel="noopener noreferrer" className="flex items-center gap-4 p-3 rounded-lg border border-gray-200 hover:border-blue-300 hover:bg-blue-50 transition-colors">
                  <Linkedin className="w-6 h-6 text-blue-600" />
                  <div>
                    <p className="font-medium text-gray-900">LinkedIn</p>
                    <p className="text-sm text-gray-600">linkedin.com/in/pssaivivek</p>
                  </div>
                </a>
              </CardContent>
            </Card>

            {/* Resume Download */}
            <Card className="shadow-lg">
              <CardHeader>
                <CardTitle>Resume</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-700 mb-4">
                  Download my resume to get a comprehensive overview of my experience, 
                  skills, and achievements.
                </p>
                <Button onClick={handleResumeDownload} className="w-full bg-teal-600 hover:bg-teal-700">
                  <Download className="w-4 h-4 mr-2" />
                  Download Resume
                </Button>
              </CardContent>
            </Card>
          </div>

          {/* Contact Form */}
          <Card className="shadow-lg">
            <CardHeader>
              <CardTitle>Send a Message</CardTitle>
            </CardHeader>
            <CardContent>
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-2">Name</label>
                    <Input id="name" name="name" type="text" required placeholder="Your full name" value={formData.name} onChange={handleChange} />
                  </div>
                  <div>
                    <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">Email</label>
                    <Input id="email" name="email" type="email" required placeholder="your.email@example.com" value={formData.email} onChange={handleChange} />
                  </div>
                </div>

                <div>
                  <label htmlFor="subject" className="block text-sm font-medium text-gray-700 mb-2">Subject</label>
                  <Input id="subject" name="subject" type="text" required placeholder="What's this about?" value={formData.subject} onChange={handleChange} />
                </div>

                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-2">Message</label>
                  <Textarea id="message" name="message" rows={6} required placeholder="Tell me more about your project, opportunity, or question..." value={formData.message} onChange={handleChange} />
                </div>

                <Button type="submit" disabled={isSubmitting} className="w-full bg-teal-600 hover:bg-teal-700">
                  {isSent ? (
                    <>
                      <Check className="w-4 h-4 mr-2" />
                      Sent
                    </>
                  ) : (
                    <>
                      <Send className="w-4 h-4 mr-2" />
                      {isSubmitting ? 'Sending...' : 'Send Message'}
                    </>
                  )}
                </Button>
              </form>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
};

export default Contact;
