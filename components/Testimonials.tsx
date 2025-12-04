import React from 'react';
import { Star } from 'lucide-react';

const Testimonials: React.FC = () => {
  const reviews = [
    {
      text: "FlowState arrived within 30 minutes during a major leak. Their team was calm, organized, and incredibly professional.",
      author: "Jessica M.",
      location: "Seattle, WA",
      img: "https://picsum.photos/100/100?random=50"
    },
    {
      text: "They found a hidden slab leak that two other companies missed. Absolutely worth every penny.",
      author: "David L.",
      location: "Austin, TX",
      img: "https://picsum.photos/100/100?random=51"
    },
    {
      text: "Best plumbing experience I've ever had. Honest pricing, clean work, and friendly techs.",
      author: "Chloe R.",
      location: "Denver, CO",
      img: "https://picsum.photos/100/100?random=52"
    },
    {
      text: "Top-tier service. They explained everything clearly and gave us multiple repair options.",
      author: "Aaron K.",
      location: "San Diego, CA",
      img: "https://picsum.photos/100/100?random=53"
    }
  ];

  return (
    <section id="testimonials" className="py-24 bg-white scroll-mt-28">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl lg:text-4xl font-semibold text-dark mb-4">What Our Customers Say</h2>
          <p className="text-lg text-text-body">Trusted by 10,000+ homeowners</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {reviews.map((review, index) => (
            <div key={index} className="bg-white p-8 rounded-xl shadow-soft border border-border flex flex-col h-full">
              <div className="flex text-yellow-400 mb-4 space-x-1">
                {[...Array(5)].map((_, i) => <Star key={i} size={16} fill="currentColor" />)}
              </div>
              <p className="text-text-body italic mb-6 flex-grow">"{review.text}"</p>
              
              <div className="flex items-center gap-4 mt-auto">
                <img src={review.img} alt={review.author} className="w-12 h-12 rounded-full object-cover bg-gray-200" />
                <div>
                  <strong className="block text-dark">{review.author}</strong>
                  <p className="text-sm text-gray-500">{review.location}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;