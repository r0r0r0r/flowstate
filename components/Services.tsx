import React from 'react';
import { Siren, Droplets, Trash2, ShowerHead, Construction } from 'lucide-react';

const Services: React.FC = () => {
  const services = [
    {
      icon: Siren,
      title: "Emergency Plumbing",
      intro: "Burst pipes? Overflowing drains? Sudden leaks?",
      desc: "Our emergency response team is on standby 24/7 to protect your home from water damage.",
      features: ["Quick dispatch", "Fully stocked service vehicles", "Damage prevention & cleanup guidance"],
      highlight: true
    },
    {
      icon: Droplets,
      title: "Leak Detection",
      intro: "Precision diagnostics.",
      desc: "Using thermal imaging, acoustic sensors, and moisture mapping, we pinpoint hard-to-find leaks without opening your walls unnecessarily.",
      features: ["Early damage prevention", "Non-invasive diagnostics", "Protects home structure & air quality"]
    },
    {
      icon: Trash2,
      title: "Drain Cleaning",
      intro: "Clear clogs safely.",
      desc: "We clear clogs, slow drains, and sewer line backups using safe, professional-grade tools — no harsh chemicals.",
      features: ["Long-term blockage prevention", "Odor elimination", "Root intrusion diagnostics"]
    },
    {
      icon: ShowerHead,
      title: "Water Heater Services",
      intro: "Repair & Installation.",
      desc: "From traditional tanks to tankless systems, we repair, replace, and optimize heating efficiency for your entire home.",
      features: ["Energy savings", "Safety inspections", "Brand-neutral expertise"]
    },
    {
      icon: Construction,
      title: "Pipe Repair & Replacement",
      intro: "Aging copper pipes? Corrosion?",
      desc: "We restore your plumbing system with durable, updated materials approved for modern U.S. homes.",
      features: ["PEX & copper replacements", "Long-life materials", "Code-compliant installations"]
    }
  ];

  return (
    <section id="services" className="py-16 lg:py-24 bg-light/30 scroll-mt-28 relative">
      {/* Decorative background blob */}
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden -z-10 pointer-events-none">
        <div className="absolute top-[10%] left-[-5%] w-[500px] h-[500px] bg-blue-100/40 rounded-full blur-3xl"></div>
        <div className="absolute bottom-[10%] right-[-5%] w-[500px] h-[500px] bg-cyan-100/40 rounded-full blur-3xl"></div>
      </div>

      <div className="container mx-auto px-4">
        <div className="text-center mb-12 lg:mb-16">
          <span className="text-primary font-bold tracking-wider uppercase text-sm mb-2 block">What We Do</span>
          <h2 className="text-3xl lg:text-4xl font-bold text-dark mb-4">Professional Plumbing Services</h2>
          <p className="text-base lg:text-lg text-text-body max-w-2xl mx-auto">
            From urgent repairs to planned upgrades, we bring precision and care to every job.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
          {services.map((service, index) => (
            <div
              key={index}
              className={`
                relative group rounded-2xl p-6 lg:p-8 transition-all duration-300 flex flex-col
                ${service.highlight
                  ? 'bg-white border-2 border-primary/10 shadow-lg hover:shadow-xl hover:border-primary/30'
                  : 'bg-white border border-border shadow-soft hover:shadow-hover hover:border-blue-200'
                }
                hover:-translate-y-1
              `}
            >
              {service.highlight && (
                <div className="absolute top-4 right-4">
                  <span className="bg-red-50 text-red-600 text-xs font-bold px-2 py-1 rounded-full border border-red-100 flex items-center gap-1">
                    <span className="w-1.5 h-1.5 rounded-full bg-red-500 animate-pulse"></span>
                    24/7
                  </span>
                </div>
              )}

              <div className={`
                w-14 h-14 rounded-xl flex items-center justify-center mb-6 transition-colors duration-300
                ${service.highlight ? 'bg-primary text-white' : 'bg-blue-50 text-primary group-hover:bg-primary group-hover:text-white'}
              `}>
                <service.icon size={28} />
              </div>

              <h3 className="text-xl font-bold text-dark mb-3 group-hover:text-primary transition-colors">{service.title}</h3>

              {service.intro && (
                <p className="text-sm font-semibold text-text-body mb-2 italic border-l-2 border-accent pl-3">
                  {service.intro}
                </p>
              )}

              <p className="text-text-body mb-6 flex-grow text-sm lg:text-base leading-relaxed">
                {service.desc}
              </p>

              <div className="space-y-3 mb-8 bg-gray-50 p-4 rounded-lg">
                {service.features.map((feature, fIndex) => (
                  <div key={fIndex} className="flex items-start gap-2 text-sm text-text-body">
                    <div className="mt-1 min-w-[16px]">
                      <div className="w-4 h-4 rounded-full bg-green-100 flex items-center justify-center">
                        <span className="text-green-600 text-[10px] font-bold">✓</span>
                      </div>
                    </div>
                    <span>{feature}</span>
                  </div>
                ))}
              </div>

              <a href="#contact" className="mt-auto w-full py-3 rounded-lg border border-primary text-primary font-semibold text-center hover:bg-primary hover:text-white transition-colors text-sm">
                Book This Service
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;