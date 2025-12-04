import React from 'react';
import Button from './ui/Button';

const About: React.FC = () => {
  return (
    <section id="about" className="py-24 bg-white overflow-hidden scroll-mt-28">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          {/* Image Side */}
          <div className="lg:col-span-5 relative order-2 lg:order-1">
            <div className="relative rounded-xl overflow-hidden shadow-xl h-[400px] lg:h-[500px]">
               <div className="absolute inset-0 bg-gradient-to-br from-secondary/20 to-primary/20 z-10"></div>
               <img 
                 src="https://picsum.photos/600/800?random=2" 
                 alt="FlowState Team" 
                 className="w-full h-full object-cover"
               />
            </div>
            {/* Decorative background box */}
            <div className="absolute -bottom-6 -left-6 w-3/4 h-3/4 bg-secondary/10 rounded-xl -z-10"></div>
          </div>

          {/* Content Side */}
          <div className="lg:col-span-7 lg:pl-12 order-1 lg:order-2">
            <h2 className="text-3xl lg:text-4xl font-semibold text-dark mb-6">About FlowState</h2>
            <p className="text-xl font-medium text-dark mb-6">
              FlowState was founded on a commitment to modernize the plumbing experience for homeowners.
            </p>
            <p className="text-lg text-dark mb-6 border-l-4 border-primary pl-4 font-semibold bg-blue-50/50 py-2">
              No rushed work. No unclear pricing. No temporary fixes.
            </p>
            <p className="text-text-body mb-6">
              Our technicians are trained to deliver precision work with clean, respectful service — using advanced technology, transparent communication, and strict safety standards.
            </p>
            <p className="text-text-body mb-8">
              From our customer care team to our on-site specialists, every member of FlowState is committed to providing solutions that are reliable, sanitary, and built to last.
            </p>
            
            <p className="font-semibold text-dark mb-4">We believe in:</p>
            <ul className="space-y-3 mb-10">
              {['Honest, upfront pricing', 'Quality workmanship', '24/7 emergency availability', 'Respect for your home and time'].map((item, i) => (
                <li key={i} className="flex items-center text-lg text-text-body">
                  <span className="text-primary mr-3 font-bold">✓</span> {item}
                </li>
              ))}
            </ul>
            
            <Button href="#contact" variant="primary">Get Free Quote</Button>
          </div>

        </div>
      </div>
    </section>
  );
};

export default About;