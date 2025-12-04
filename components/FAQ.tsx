import React, { useState } from 'react';
import { ChevronDown } from 'lucide-react';

const FAQ: React.FC = () => {
  const [activeIndex, setActiveIndex] = useState<number | null>(null);

  const faqs = [
    { q: "Do you offer same-day service?", a: "Yes — in most areas we provide same-day and 24/7 emergency support." },
    { q: "Are your technicians background-checked?", a: "Absolutely. Every team member is vetted and professionally trained." },
    { q: "How fast can you arrive?", a: "Response time is typically 30–60 minutes depending on location." },
    { q: "Do you offer warranties?", a: "Yes. All services include a labor warranty, and equipment has manufacturer warranties." },
    { q: "What payment methods do you accept?", a: "Credit/debit cards, digital wallets, and financing for large repairs." },
    { q: "Can you install tankless water heaters?", a: "Yes — we install, repair, and maintain all major brands." },
    { q: "Do you provide preventative maintenance plans?", a: "Yes — annual plans include inspections and priority scheduling." },
    { q: "Will your team clean up afterward?", a: "Always. We treat your home with respect and leave no mess behind." },
    { q: "Do you handle commercial properties?", a: "Yes — offices, restaurants, and retail facilities." },
    { q: "Are your services code-compliant?", a: "Every installation and repair meets local building and safety codes." },
  ];

  const toggleFAQ = (index: number) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  return (
    <section className="py-24 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl lg:text-4xl font-semibold text-dark mb-4">Frequently Asked Questions</h2>
          <p className="text-lg text-text-body">Common questions about our plumbing services</p>
        </div>

        <div className="max-w-3xl mx-auto space-y-4">
          {faqs.map((item, index) => (
            <div key={index} className="border border-border rounded-lg overflow-hidden shadow-sm bg-white">
              <button
                className="w-full flex items-center justify-between p-6 text-left focus:outline-none hover:bg-gray-50 transition-colors"
                onClick={() => toggleFAQ(index)}
              >
                <span className="text-lg font-semibold text-dark">{item.q}</span>
                <ChevronDown 
                    className={`text-primary transition-transform duration-300 ${activeIndex === index ? 'rotate-180' : ''}`} 
                    size={20} 
                />
              </button>
              <div 
                className={`transition-all duration-300 ease-in-out overflow-hidden bg-gray-50/50 ${
                    activeIndex === index ? 'max-h-48 opacity-100' : 'max-h-0 opacity-0'
                }`}
              >
                <div className="p-6 pt-0 text-text-body">
                  {item.a}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FAQ;