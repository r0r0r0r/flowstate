import React from 'react';
import { Facebook, Instagram, Twitter, Linkedin, Phone } from 'lucide-react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-dark text-white pt-16 pb-6">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-12">
          
          {/* Brand Col */}
          <div className="lg:col-span-1">
            <h3 className="text-2xl font-bold mb-4">FlowState</h3>
            <p className="text-gray-400 mb-6 text-sm leading-relaxed">
              We bring precision, cleanliness, and modern plumbing expertise to homes across the country. 
              Experience reliable 24/7 service backed by licensed professionals.
            </p>
            <h4 className="font-semibold mb-3">Follow Us:</h4>
            <div className="flex gap-3 mb-4">
              <a href="#" className="w-10 h-10 border border-gray-600 rounded-full flex items-center justify-center text-white hover:bg-white hover:text-primary hover:border-white transition-all">
                <Facebook size={18} />
              </a>
              <a href="#" className="w-10 h-10 border border-gray-600 rounded-full flex items-center justify-center text-white hover:bg-white hover:text-primary hover:border-white transition-all">
                <Instagram size={18} />
              </a>
              <a href="#" className="w-10 h-10 border border-gray-600 rounded-full flex items-center justify-center text-white hover:bg-white hover:text-primary hover:border-white transition-all">
                <Twitter size={18} />
              </a>
              <a href="#" className="w-10 h-10 border border-gray-600 rounded-full flex items-center justify-center text-white hover:bg-white hover:text-primary hover:border-white transition-all">
                <Linkedin size={18} />
              </a>
            </div>
            <p className="text-gray-500 text-xs">
                Facebook — Tips, updates & alerts<br/>
                Instagram — Transformations<br/>
                Twitter — Real-time updates<br/>
                LinkedIn — Company news
            </p>
          </div>

          {/* Company Links */}
          <div>
            <h4 className="text-lg font-semibold mb-6">Company</h4>
            <ul className="space-y-3 text-gray-400">
              <li><a href="#about" className="hover:text-white transition-colors">About Us</a></li>
              <li><a href="#service-areas" className="hover:text-white transition-colors">Service Areas</a></li>
              <li><a href="#testimonials" className="hover:text-white transition-colors">Testimonials</a></li>
              <li><a href="#contact" className="hover:text-white transition-colors">Contact</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Careers</a></li>
            </ul>
          </div>

          {/* Service Links */}
          <div>
            <h4 className="text-lg font-semibold mb-6">Services</h4>
            <ul className="space-y-3 text-gray-400">
              <li><a href="#services" className="hover:text-white transition-colors">Emergency Plumbing</a></li>
              <li><a href="#services" className="hover:text-white transition-colors">Leak Detection</a></li>
              <li><a href="#services" className="hover:text-white transition-colors">Drain Cleaning</a></li>
              <li><a href="#services" className="hover:text-white transition-colors">Water Heater Services</a></li>
              <li><a href="#services" className="hover:text-white transition-colors">Pipe Repair & Replacement</a></li>
            </ul>
          </div>

          {/* Legal */}
          <div>
            <h4 className="text-lg font-semibold mb-6">Legal</h4>
            <ul className="space-y-3 text-gray-400">
              <li><a href="#" className="hover:text-white transition-colors">Privacy Policy</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Terms of Service</a></li>
            </ul>
            <p className="text-gray-500 text-sm mt-6">Contractor License #PSL-87321</p>
          </div>
        </div>

        {/* Footer Bottom */}
        <div className="pt-8 border-t border-gray-800 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-gray-500 text-sm">© 2024 FlowState. All rights reserved.</p>
          <a href="tel:+18552047714" className="text-gray-400 hover:text-white transition-colors flex items-center gap-2">
            <Phone size={16} /> (855) 204-7714
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;