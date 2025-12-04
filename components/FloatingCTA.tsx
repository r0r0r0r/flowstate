import React, { useState, useEffect } from 'react';
import { Phone, Calendar } from 'lucide-react';

const FloatingCTA: React.FC = () => {
    const [isVisible, setIsVisible] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            // Show after scrolling down 300px
            setIsVisible(window.scrollY > 300);
        };

        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    if (!isVisible) return null;

    return (
        <div className="fixed bottom-6 right-6 z-40 flex flex-col gap-3 animate-fade-in-up">
            {/* Desktop/Tablet: Stacked buttons */}
            <div className="hidden md:flex flex-col gap-3">
                <a
                    href="#contact"
                    className="flex items-center justify-center gap-2 bg-white text-dark hover:text-primary px-6 py-3 rounded-full shadow-lg border border-border font-bold transition-all hover:-translate-y-1"
                >
                    <Calendar size={20} />
                    Book Online
                </a>
                <a
                    href="tel:+18552047714"
                    className="flex items-center justify-center gap-2 bg-accent text-white hover:bg-orange-600 px-6 py-3 rounded-full shadow-lg shadow-orange-500/30 font-bold transition-all hover:-translate-y-1"
                >
                    <Phone size={20} />
                    (855) 204-7714
                </a>
            </div>

            {/* Mobile: Bottom Bar (Different layout) */}
            <div className="md:hidden fixed bottom-4 left-4 right-4 flex gap-3">
                <a
                    href="#contact"
                    className="flex-1 flex items-center justify-center gap-2 bg-white text-dark px-4 py-3 rounded-lg shadow-lg border border-border font-bold text-sm"
                >
                    <Calendar size={18} />
                    Book
                </a>
                <a
                    href="tel:+18552047714"
                    className="flex-[2] flex items-center justify-center gap-2 bg-accent text-white px-4 py-3 rounded-lg shadow-lg shadow-orange-500/30 font-bold text-sm"
                >
                    <Phone size={18} />
                    Call Now
                </a>
            </div>
        </div>
    );
};

export default FloatingCTA;
