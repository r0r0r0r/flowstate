import React from 'react';
import { Zap, Wrench, BadgeDollarSign, ShieldCheck, CheckCircle2 } from 'lucide-react';
import Button from './ui/Button';

// USP Section
export const USPSection: React.FC = () => {
  const items = [
    { icon: Zap, title: "Fast Response", desc: "Average 30-minute response time" },
    { icon: Wrench, title: "Expert Technicians", desc: "Licensed & certified professionals" },
    { icon: BadgeDollarSign, title: "Fair Pricing", desc: "Transparent, upfront quotes" },
    { icon: ShieldCheck, title: "100% Guaranteed", desc: "Quality workmanship warranty" },
  ];

  return (
    <section className="py-12 bg-secondary/5 border-y border-secondary/10">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {items.map((item, index) => (
            <div key={index} className="flex flex-col items-center text-center">
              <div className="w-16 h-16 bg-white rounded-full flex items-center justify-center shadow-soft mb-4 text-primary">
                <item.icon size={32} />
              </div>
              <h4 className="text-lg font-semibold text-dark mb-2">{item.title}</h4>
              <p className="text-text-body">{item.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

// Emergency Banner
export const EmergencyBanner: React.FC = () => {
  return (
    <section id="emergency" className="py-16 lg:py-20 bg-gradient-to-br from-primary to-secondary text-white scroll-mt-28">
      <div className="container mx-auto px-4 text-center">
        <h2 className="text-3xl md:text-5xl font-bold mb-4 lg:mb-6">Emergency Plumbing Service</h2>
        <p className="text-lg md:text-2xl mb-8 lg:mb-10 max-w-2xl mx-auto text-blue-50">
          Available 24/7 for urgent plumbing emergencies. Fast response, expert service.
        </p>
        <div className="flex flex-col sm:flex-row justify-center gap-4 lg:gap-6">
          <Button href="tel:+18552047714" variant="accent" className="text-base lg:text-lg px-8 py-3 lg:px-10 lg:py-4 w-full sm:w-auto justify-center">
            Call Now: (855) 204-7714
          </Button>
          <Button href="#contact" variant="white" className="text-base lg:text-lg px-8 py-3 lg:px-10 lg:py-4 text-primary w-full sm:w-auto justify-center">
            Book Online
          </Button>
        </div>
      </div>
    </section>
  );
};

// Gallery Section
export const GallerySection: React.FC = () => {
  const items = [
    { desc: "Replaced corroded galvanized pipes with long-lasting PEX system.", before: "https://picsum.photos/400/300?random=10", after: "https://picsum.photos/400/300?random=11" },
    { desc: "Restored complete water pressure in a two-story home.", before: "https://picsum.photos/400/300?random=12", after: "https://picsum.photos/400/300?random=13" },
    { desc: "Sewer line cleared after heavy root intrusion.", before: "https://picsum.photos/400/300?random=14", after: "https://picsum.photos/400/300?random=15" },
    { desc: "High-efficiency tankless water heater upgrade.", before: "https://picsum.photos/400/300?random=16", after: "https://picsum.photos/400/300?random=17" },
  ];

  return (
    <section className="py-24 bg-light">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12 lg:mb-16">
          <h2 className="text-2xl lg:text-4xl font-semibold text-dark mb-4">Our Work</h2>
          <p className="text-base lg:text-lg text-text-body">Drag to see the transformation</p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {items.map((item, index) => (
            <div key={index} className="flex flex-col">
              <div className="relative w-full h-64 rounded-xl overflow-hidden shadow-soft group select-none">
                {/* Background (After Image) */}
                <img src={item.after} alt="After" className="absolute inset-0 w-full h-full object-cover" />
                <div className="absolute top-4 right-4 bg-green-500 text-white text-xs font-bold px-2 py-1 rounded shadow-sm z-20">AFTER</div>

                {/* Foreground (Before Image) - Clip Path controlled by slider */}
                <div className="absolute inset-0 w-full h-full overflow-hidden" style={{ clipPath: 'inset(0 50% 0 0)' }}>
                  <img src={item.before} alt="Before" className="absolute inset-0 w-full h-full object-cover" />
                  <div className="absolute top-4 left-4 bg-gray-600 text-white text-xs font-bold px-2 py-1 rounded shadow-sm z-20">BEFORE</div>
                </div>

                {/* Slider Handle (Visual Only for this demo, usually interactive) */}
                <div className="absolute inset-y-0 left-1/2 w-1 bg-white cursor-ew-resize z-30 flex items-center justify-center">
                  <div className="w-8 h-8 bg-white rounded-full shadow-lg flex items-center justify-center text-primary">
                    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><polyline points="15 18 9 12 15 6"></polyline></svg>
                    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><polyline points="9 18 15 12 9 6"></polyline></svg>
                  </div>
                </div>

                {/* Hover overlay to hint interactivity */}
                <div className="absolute inset-0 bg-black/0 group-hover:bg-black/10 transition-colors pointer-events-none"></div>
              </div>
              <p className="mt-4 text-center font-medium text-dark">{item.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

// Blog Section
export const BlogSection: React.FC = () => {
  const posts = [
    { category: "Plumbing Tips", title: "5 Early Signs Your Home Might Have a Hidden Leak", desc: "Small clues can prevent major repairs—here's what to watch for.", img: "https://picsum.photos/400/250?random=20" },
    { category: "Water Heaters", title: "Tankless vs. Tank Water Heaters: Which Is Right for You?", desc: "Breakdown of costs, benefits, and long-term savings.", img: "https://picsum.photos/400/250?random=21" },
    { category: "Maintenance", title: "Why Annual Drain Cleaning Protects Your Home", desc: "Avoid costly backups and maintain smooth water flow.", img: "https://picsum.photos/400/250?random=22" },
  ];

  return (
    <section id="blog" className="py-24 bg-white scroll-mt-28">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12 lg:mb-16">
          <h2 className="text-2xl lg:text-4xl font-semibold text-dark mb-4">Latest from Our Blog</h2>
          <p className="text-base lg:text-lg text-text-body">Tips, insights, and plumbing expertise</p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {posts.map((post, index) => (
            <div key={index} className="bg-white rounded-lg overflow-hidden shadow-soft hover:shadow-hover transition-shadow border border-border">
              <img src={post.img} alt={post.title} className="w-full h-48 object-cover" />
              <div className="p-6">
                <span className="text-xs font-bold text-secondary uppercase tracking-wider mb-2 block">{post.category}</span>
                <h3 className="text-xl font-semibold text-dark mb-3 line-clamp-2">{post.title}</h3>
                <p className="text-text-body mb-4 line-clamp-2">{post.desc}</p>
                <a href="#" className="text-primary font-medium hover:underline inline-flex items-center">Read more →</a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

// Service Areas
import { MapPin } from 'lucide-react';

export const ServiceAreasSection: React.FC = () => {
  const areas = [
    { city: "Seattle, WA", desc: "Homes, condos, and new developments" },
    { city: "Bellevue, WA", desc: "High-end residential plumbing" },
    { city: "Portland, OR", desc: "24/7 emergency response" },
    { city: "Vancouver, WA", desc: "Full-service plumbing support" },
    { city: "Austin, TX", desc: "Water heater & drain specialists" },
    { city: "Denver, CO", desc: "Cold-weather plumbing protection" },
    { city: "San Diego, CA", desc: "Coastal corrosion management" },
  ];

  return (
    <section id="service-areas" className="py-24 bg-white scroll-mt-28 relative overflow-hidden">
      {/* Background Map Effect */}
      <div className="absolute inset-0 opacity-5 pointer-events-none">
        <svg className="w-full h-full" viewBox="0 0 100 100" preserveAspectRatio="none">
          <path d="M0 100 C 20 0 50 0 100 100 Z" fill="currentColor" className="text-primary" />
        </svg>
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center mb-12 lg:mb-16">
          <h2 className="text-2xl lg:text-4xl font-semibold text-dark mb-4">Service Areas</h2>
          <p className="text-base lg:text-lg text-text-body">FlowState proudly serves these communities</p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {areas.map((area, index) => (
            <div key={index} className="group bg-light p-6 rounded-xl border border-transparent hover:border-primary/20 hover:bg-white hover:shadow-lg transition-all duration-300 flex items-start gap-4">
              <div className="mt-1 w-10 h-10 rounded-full bg-blue-100 flex items-center justify-center text-primary shrink-0 group-hover:scale-110 transition-transform">
                <MapPin size={20} />
              </div>
              <div>
                <h3 className="font-bold text-dark text-lg mb-1">{area.city}</h3>
                <p className="text-sm text-text-body leading-snug">{area.desc}</p>
              </div>
            </div>
          ))}

          {/* "And Many More" Card */}
          <div className="bg-primary/5 p-6 rounded-xl border border-primary/10 flex items-center justify-center text-center hover:bg-primary/10 transition-colors cursor-pointer">
            <div>
              <h3 className="font-bold text-primary text-lg mb-1">And Many More</h3>
              <p className="text-sm text-text-body">Contact us to confirm service in your area</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

// Why Choose Us
export const WhyChooseUsSection: React.FC = () => {
  return (
    <section className="py-24 bg-light">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12 lg:mb-16">
          <h2 className="text-2xl lg:text-4xl font-semibold text-dark mb-4">Why Choose FlowState</h2>
          <p className="text-base lg:text-lg text-text-body">What sets us apart from the rest</p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-8">
          <div className="lg:col-span-4 bg-white p-8 rounded-xl shadow-soft border border-border">
            <div className="text-4xl mb-4">🛡️</div>
            <h3 className="text-xl font-bold mb-3">1. Licensed, Bonded & Insured</h3>
            <p className="text-text-body">Your home is protected, and every technician meets local and federal requirements.</p>
          </div>
          <div className="lg:col-span-4 bg-white p-8 rounded-xl shadow-soft border border-border">
            <div className="text-4xl mb-4">🚨</div>
            <h3 className="text-xl font-bold mb-3">2. 24/7 Emergency Support</h3>
            <p className="text-text-body">We respond fast to protect your home from water damage and costly repairs.</p>
          </div>
          <div className="lg:col-span-4 bg-white p-8 rounded-xl shadow-soft border border-border">
            <div className="text-4xl mb-4">💰</div>
            <h3 className="text-xl font-bold mb-3">3. Transparent Pricing</h3>
            <p className="text-text-body">Clear quotes before work begins — no surprise add-ons.</p>
          </div>
          <div className="lg:col-span-6 bg-white p-8 rounded-xl shadow-soft border border-border">
            <div className="text-4xl mb-4">🧹</div>
            <h3 className="text-xl font-bold mb-3">4. Clean, Respectful Technicians</h3>
            <p className="text-text-body">We wear protective gear, sanitize work areas, and leave your home cleaner than we found it.</p>
          </div>
          <div className="lg:col-span-6 bg-white p-8 rounded-xl shadow-soft border border-border">
            <div className="text-4xl mb-4">🔬</div>
            <h3 className="text-xl font-bold mb-3">5. Modern Diagnostic Tools</h3>
            <p className="text-text-body">State-of-the-art equipment ensures accuracy and efficiency.</p>
          </div>
        </div>
      </div>
    </section>
  );
};