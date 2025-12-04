import React from 'react';
import Button from './ui/Button';
import { Star, Wrench, Siren, Home } from 'lucide-react';

const Hero: React.FC = () => {
  return (
    <section id="home" className="pt-24 lg:pt-32 pb-16 lg:pb-24 bg-gradient-to-b from-light to-blue-50 overflow-hidden relative">
      {/* Decorative background element */}
      <div className="absolute top-[-100px] right-[-100px] w-[300px] lg:w-[600px] h-[300px] lg:h-[600px] bg-secondary/10 rounded-full blur-3xl -z-10"></div>

      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">

          {/* Content */}
          <div className="lg:col-span-7 flex flex-col items-center lg:items-start text-center lg:text-left">
            <h1 className="text-3xl md:text-4xl lg:text-6xl font-bold text-dark mb-4 lg:mb-6 leading-tight">
              Reliable, High-Precision Plumbing—
              <span className="text-primary block mt-2">Anytime You Need It.</span>
            </h1>
            <p className="text-base md:text-lg lg:text-xl text-text-body mb-6 lg:mb-8 max-w-2xl">
              FlowState delivers professional, sanitary, and code-compliant plumbing services with fast response times and skilled, licensed technicians.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 w-full sm:w-auto">
              <Button href="#emergency" variant="primary" className="w-full sm:w-auto justify-center">
                Schedule Emergency Service
              </Button>
              <Button href="#services" variant="ghost" className="w-full sm:w-auto justify-center">
                View All Services
              </Button>
            </div>

            <div className="mt-8 lg:mt-12 flex flex-wrap justify-center lg:justify-start gap-4 lg:gap-6">
              <div className="flex items-center gap-2 bg-white px-3 py-1.5 lg:px-4 lg:py-2 rounded-full shadow-sm animate-fade-in-up" style={{ animationDelay: '0.1s' }}>
                <Star className="text-yellow-400 fill-yellow-400" size={16} />
                <span className="text-xs lg:text-sm font-medium">4.9/5 Average Rating</span>
              </div>
              <div className="flex items-center gap-2 bg-white px-3 py-1.5 lg:px-4 lg:py-2 rounded-full shadow-sm animate-fade-in-up" style={{ animationDelay: '0.2s' }}>
                <Wrench className="text-primary" size={16} />
                <span className="text-xs lg:text-sm font-medium">Licensed, Bonded & Insured</span>
              </div>
              <div className="flex items-center gap-2 bg-white px-3 py-1.5 lg:px-4 lg:py-2 rounded-full shadow-sm animate-fade-in-up" style={{ animationDelay: '0.3s' }}>
                <Siren className="text-accent" size={16} />
                <span className="text-xs lg:text-sm font-medium">24/7 Emergency Service</span>
              </div>
              <div className="flex items-center gap-2 bg-white px-3 py-1.5 lg:px-4 lg:py-2 rounded-full shadow-sm animate-fade-in-up" style={{ animationDelay: '0.4s' }}>
                <Home className="text-secondary" size={16} />
                <span className="text-xs lg:text-sm font-medium">Trusted by 10,000+ Homes</span>
              </div>
            </div>
          </div>

          {/* Image */}
          <div className="lg:col-span-5 relative mt-8 lg:mt-0">
            <div className="relative rounded-2xl overflow-hidden shadow-2xl group">
              <div className="absolute inset-0 bg-gradient-to-br from-primary/80 to-secondary/80 mix-blend-multiply opacity-20 group-hover:opacity-10 transition-opacity duration-500"></div>
              <img
                src="https://picsum.photos/800/800?random=1"
                alt="Professional Plumber"
                className="w-full h-[300px] lg:h-[500px] object-cover"
              />
              <div className="absolute bottom-4 lg:bottom-6 left-4 lg:left-6 right-4 lg:right-6 bg-white/90 backdrop-blur-md p-3 lg:p-4 rounded-xl shadow-lg border border-white/50">
                <div className="flex items-center gap-3 lg:gap-4">
                  <div className="w-10 h-10 lg:w-12 lg:h-12 rounded-full bg-green-100 flex items-center justify-center">
                    <span className="text-green-600 text-lg lg:text-xl">✓</span>
                  </div>
                  <div>
                    <p className="font-bold text-dark text-sm lg:text-base">System Operational</p>
                    <p className="text-[10px] lg:text-xs text-text-body">Last checked: Today at 9:00 AM</p>
                  </div>
                </div>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default Hero;