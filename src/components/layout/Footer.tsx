
import React from 'react';
import { Github, Linkedin, Mail, Phone, Download } from 'lucide-react';
import { Button } from '@/components/ui/button';

const Footer = () => {
  const handleResumeDownload = () => {
    window.open('https://drive.google.com/file/d/1cwjP6wwV5xk1VBoayrr3Ja4F5kfbO6kg/view?usp=sharing', '_blank');
  };

  return (
    <footer className="bg-slate-800 text-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Contact Info */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Contact</h3>
            <div className="space-y-3">
              <a 
                href="mailto:psandalyasaivivek@gmail.com" 
                className="flex items-center space-x-2 text-slate-300 hover:text-white transition-colors"
              >
                <Mail className="w-4 h-4" />
                <span>psandalyasaivivek@gmail.com</span>
              </a>
              <div className="flex items-center space-x-2 text-slate-300">
                <Phone className="w-4 h-4" />
                <span>+91 7036959369</span>
              </div>
            </div>
          </div>

          {/* Social Links */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Connect</h3>
            <div className="space-y-3">
              <a 
                href="https://github.com/Sandalyasaivivek" 
                target="_blank" 
                rel="noopener noreferrer"
                className="flex items-center space-x-2 text-slate-300 hover:text-white transition-colors"
              >
                <Github className="w-4 h-4" />
                <span>GitHub</span>
              </a>
              <a 
                href="https://linkedin.com/in/pssaivivek" 
                target="_blank" 
                rel="noopener noreferrer"
                className="flex items-center space-x-2 text-slate-300 hover:text-white transition-colors"
              >
                <Linkedin className="w-4 h-4" />
                <span>LinkedIn</span>
              </a>
            </div>
          </div>

          {/* Resume */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Resume</h3>
     <Button 
  onClick={handleResumeDownload}
  variant="outline"
  className="bg-white border-slate-400 hover:bg-teal-700 group transition-all duration-300"
>
  <Download className="w-4 h-4 mr-2 text-black group-hover:text-white transition-colors duration-300" />
  <span className="text-black group-hover:text-white transition-colors duration-300">
    Download Resume
  </span>
</Button>




            <p className="text-sm text-slate-400 mt-2">
              One-page resume for recruiters
            </p>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-slate-700 mt-8 pt-8 text-center">
          <p className="text-slate-400 text-sm">
            © 2025 Sandalya Sai Vivek Peddisetty — All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
