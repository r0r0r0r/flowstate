import React from 'react';
import Button from './ui/Button';

const Contact: React.FC = () => {
  return (
    <section id="contact" className="py-24 bg-light scroll-mt-28">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl lg:text-4xl font-semibold text-dark mb-4">Get In Touch</h2>
          <p className="text-lg text-text-body">Contact us for a free quote or emergency service</p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 max-w-6xl mx-auto">
          {/* Info Card */}
          <div className="bg-white p-10 rounded-xl shadow-soft h-full">
            <h3 className="text-2xl font-semibold text-dark mb-8">Contact Information</h3>
            
            <div className="space-y-8">
              <div>
                <strong className="block text-dark mb-2 text-lg">Phone</strong>
                <a href="tel:+18552047714" className="text-primary text-xl font-medium hover:underline">(855) 204-7714</a>
              </div>
              
              <div>
                <strong className="block text-dark mb-2 text-lg">Email</strong>
                <a href="mailto:info@flowstate.com" className="text-primary text-xl font-medium hover:underline">info@flowstate.com</a>
              </div>
              
              <div>
                <strong className="block text-dark mb-2 text-lg">Address</strong>
                <p className="text-text-body text-lg">123 Main Street, City, State 12345</p>
              </div>
              
              <div className="pt-4 border-t border-border">
                <strong className="block text-dark mb-4 text-lg">Business Hours</strong>
                <p className="text-text-body mb-1">Monday - Saturday: 8:00 AM - 6:00 PM</p>
                <p className="text-text-body mb-1">Sunday: Emergency Only</p>
                <p className="text-accent font-bold mt-2">24/7 Emergency Service Available</p>
              </div>
            </div>
          </div>

          {/* Form Card */}
          <div className="bg-white p-10 rounded-xl shadow-soft h-full">
            <h3 className="text-2xl font-semibold text-dark mb-8">Send Us a Message</h3>
            <form className="flex flex-col gap-6">
              <div>
                <label htmlFor="name" className="sr-only">Your Name</label>
                <input 
                  id="name"
                  type="text" 
                  placeholder="Your Name" 
                  required 
                  className="w-full p-4 border border-border rounded-lg text-base focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary transition-colors"
                />
              </div>
              <div>
                <label htmlFor="email" className="sr-only">Your Email</label>
                <input 
                  id="email"
                  type="email" 
                  placeholder="Your Email" 
                  required 
                  className="w-full p-4 border border-border rounded-lg text-base focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary transition-colors"
                />
              </div>
              <div>
                <label htmlFor="phone" className="sr-only">Phone Number</label>
                <input 
                  id="phone"
                  type="tel" 
                  placeholder="Phone Number" 
                  className="w-full p-4 border border-border rounded-lg text-base focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary transition-colors"
                />
              </div>
              <div>
                <label htmlFor="message" className="sr-only">Message</label>
                <textarea 
                  id="message"
                  placeholder="Message" 
                  rows={5} 
                  required 
                  className="w-full p-4 border border-border rounded-lg text-base font-sans focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary transition-colors resize-none"
                ></textarea>
              </div>
              <Button type="submit" variant="primary" className="self-start">Send Message</Button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;