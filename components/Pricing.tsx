import React from 'react';
import Button from './ui/Button';

const Pricing: React.FC = () => {
  return (
    <section className="py-24 bg-light">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl lg:text-4xl font-semibold text-dark mb-4">Pricing Plans</h2>
          <p className="text-lg text-text-body">Transparent pricing for every need</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 items-start max-w-6xl mx-auto">
          {/* Basic */}
          <div className="bg-white p-8 rounded-2xl shadow-soft border border-border hover:-translate-y-2 transition-transform duration-300">
            <h3 className="text-xl text-text-body mb-4">Basic Service Call</h3>
            <div className="mb-4">
              <span className="text-4xl font-bold text-dark">$99</span>
              <span className="text-text-body"> – $249</span>
            </div>
            <p className="text-text-body mb-6 min-h-[48px]">Ideal for minor repairs and simple diagnostics.</p>
            <ul className="space-y-3 mb-8">
              {['On-site evaluation', 'Issue diagnosis', 'Basic adjustments', '7-day labor warranty'].map((item, i) => (
                <li key={i} className="text-sm flex items-start text-dark">
                  <span className="text-green-500 mr-2">✓</span> {item}
                </li>
              ))}
            </ul>
            <Button href="#contact" variant="primary" className="w-full">Get Started</Button>
          </div>

          {/* Standard - Popular */}
          <div className="bg-white p-8 rounded-2xl shadow-xl border-2 border-primary relative transform scale-105 z-10">
            <div className="absolute -top-3 left-1/2 transform -translate-x-1/2 bg-primary text-white text-xs font-bold px-3 py-1 rounded-full uppercase tracking-wide">
              Most Popular
            </div>
            <h3 className="text-xl text-text-body mb-4">Standard Repair</h3>
            <div className="mb-4">
              <span className="text-4xl font-bold text-dark">$250</span>
              <span className="text-text-body"> – $799</span>
            </div>
            <p className="text-text-body mb-6 min-h-[48px]">For mid-level issues needing parts, replacements, or deeper troubleshooting.</p>
            <ul className="space-y-3 mb-8">
              {['Full system check', 'Leak or blockage resolution', 'Water heater adjustments', '30-day labor warranty'].map((item, i) => (
                <li key={i} className="text-sm flex items-start text-dark">
                  <span className="text-green-500 mr-2">✓</span> {item}
                </li>
              ))}
            </ul>
            <Button href="#contact" variant="primary" className="w-full">Get Started</Button>
          </div>

          {/* Premium */}
          <div className="bg-white p-8 rounded-2xl shadow-soft border border-border hover:-translate-y-2 transition-transform duration-300">
            <h3 className="text-xl text-text-body mb-4">Premium System Care</h3>
            <div className="mb-4">
              <span className="text-4xl font-bold text-dark">$800</span>
              <span className="text-text-body"> – $2,500+</span>
            </div>
            <p className="text-text-body mb-6 min-h-[48px]">For large repairs, pipe replacements, or complex system failures.</p>
            <ul className="space-y-3 mb-8">
              {['Whole-home inspection', 'Pipe upgrades', 'Water heater installation', '60-day labor warranty'].map((item, i) => (
                <li key={i} className="text-sm flex items-start text-dark">
                  <span className="text-green-500 mr-2">✓</span> {item}
                </li>
              ))}
            </ul>
            <Button href="#contact" variant="primary" className="w-full">Get Started</Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Pricing;