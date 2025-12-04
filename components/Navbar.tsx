import React, { useState, useEffect } from 'react';
import { Menu, X, Phone, ChevronDown } from 'lucide-react';
import Button from './ui/Button';

const Navbar: React.FC = () => {
    const [isScrolled, setIsScrolled] = useState(false);
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
    const [activeDropdown, setActiveDropdown] = useState<string | null>(null);

    useEffect(() => {
        const handleScroll = () => {
            setIsScrolled(window.scrollY > 10);
        };
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    const toggleMobileMenu = () => {
        setIsMobileMenuOpen(!isMobileMenuOpen);
        if (!isMobileMenuOpen) {
            document.body.style.overflow = 'hidden';
        } else {
            document.body.style.overflow = '';
        }
    };

    const closeMobileMenu = () => {
        setIsMobileMenuOpen(false);
        setActiveDropdown(null);
        document.body.style.overflow = '';
    };

    const navLinks = [
        {
            name: 'Home',
            href: '#home',
            role: 'reset'
        },
        {
            name: 'Services',
            href: '#services',
            role: 'menu',
            dropdown: [
                { name: 'Emergency Plumbing', href: '#emergency' },
                { name: 'Leak Detection', href: '#services' },
                { name: 'Water Heaters', href: '#services' },
                { name: 'Drain Cleaning', href: '#services' },
            ]
        },
        { name: 'About', href: '#about', role: 'trust' },
        { name: 'Testimonials', href: '#testimonials', role: 'proof' },
        { name: 'Blog', href: '#blog', role: 'authority' },
        { name: 'Contact', href: '#contact', role: 'communication' },
    ];

    return (
        <header
            className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 bg-white border-b border-border ${isScrolled ? 'h-16 shadow-soft' : 'h-[82px]'
                }`}
        >
            <div className="container mx-auto px-4 h-full flex items-center justify-between">
                {/* 1. LOGO (Home Reset) */}
                <a href="#home" className="flex flex-col justify-center shrink-0 z-50 focus:outline-none">
                    <h2 className="text-xl md:text-2xl font-bold text-dark leading-tight tracking-tight">FlowState</h2>
                    <p className="text-[10px] text-text-body font-medium uppercase tracking-widest hidden xl:block">Precision Plumbing</p>
                </a>

                {/* 2. DESKTOP NAVIGATION */}
                <nav className="hidden md:block">
                    <ul className="flex items-center md:space-x-6 lg:space-x-8">
                        {navLinks.map((link) => (
                            <li key={link.name} className="relative group h-full flex items-center">
                                {link.role === 'menu' ? (
                                    // Dropdown Menu (Services)
                                    <div className="relative h-full flex items-center">
                                        <a
                                            href={link.href}
                                            className="flex items-center gap-1 font-medium text-dark hover:text-primary transition-colors py-2 md:text-sm lg:text-base"
                                        >
                                            {link.name}
                                            <ChevronDown size={14} className="group-hover:rotate-180 transition-transform duration-200" />
                                        </a>

                                        {/* Dropdown Content */}
                                        <div className="absolute top-full left-1/2 -translate-x-1/2 pt-4 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200 transform group-hover:translate-y-0 translate-y-2">
                                            <div className="bg-white rounded-xl shadow-hover border border-border overflow-hidden min-w-[220px]">
                                                <div className="p-1">
                                                    {link.dropdown?.map((subItem) => (
                                                        <a
                                                            key={subItem.name}
                                                            href={subItem.href}
                                                            className="block px-4 py-3 text-sm text-dark hover:bg-blue-50 hover:text-primary rounded-lg transition-colors font-medium"
                                                        >
                                                            {subItem.name}
                                                        </a>
                                                    ))}
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                ) : (
                                    // Standard Link
                                    <a
                                        href={link.href}
                                        className="font-medium text-dark hover:text-primary relative group py-2 md:text-sm lg:text-base"
                                    >
                                        {link.name}
                                        <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-primary transition-all duration-300 group-hover:w-full opacity-0 group-hover:opacity-100"></span>
                                    </a>
                                )}
                            </li>
                        ))}
                    </ul>
                </nav>

                {/* 3. ACTIONS (Book Now & Mobile Toggle) */}
                <div className="flex items-center gap-3 md:gap-4 lg:gap-6 shrink-0">

                    {/* Desktop Phone Number (Trust Anchor) */}
                    <a href="tel:+18552047714" className="hidden lg:flex flex-col items-end text-right group">
                        <span className="text-[10px] font-bold text-accent uppercase tracking-wider flex items-center gap-1">
                            <span className="w-2 h-2 rounded-full bg-accent animate-pulse"></span>
                            24/7 Emergency
                        </span>
                        <span className="font-bold text-dark text-lg group-hover:text-primary transition-colors">
                            (855) 204-7714
                        </span>
                    </a>

                    {/* Book Now Button (Primary CTA) */}

                    {/* Desktop Version: Links to Contact Form */}
                    <Button
                        href="#contact"
                        variant="accent"
                        className="hidden md:inline-flex !px-6 !py-2.5 text-sm shadow-md hover:shadow-lg font-bold"
                    >
                        Book Now
                    </Button>

                    {/* Mobile Version: Executes TEL Action */}
                    <Button
                        href="tel:+18552047714"
                        variant="accent"
                        className="md:hidden !px-4 !py-2 text-sm font-bold shadow-md flex items-center gap-2"
                    >
                        <Phone size={16} className="fill-current" />
                        Book Now
                    </Button>

                    {/* Mobile Menu Toggle */}
                    <button
                        className="md:hidden text-dark p-2 -mr-2 hover:bg-gray-100 rounded-lg transition-colors focus:outline-none"
                        onClick={toggleMobileMenu}
                        aria-label="Toggle menu"
                    >
                        {isMobileMenuOpen ? <X size={28} /> : <Menu size={28} />}
                    </button>
                </div>
            </div>

            {/* MOBILE MENU DRAWER */}
            {/* Background Overlay */}
            <div
                className={`fixed inset-0 bg-dark/60 backdrop-blur-sm z-40 md:hidden transition-opacity duration-300 ${isMobileMenuOpen ? 'opacity-100 pointer-events-auto' : 'opacity-0 pointer-events-none'
                    }`}
                onClick={closeMobileMenu}
            />

            {/* Drawer Content */}
            <div
                className={`fixed left-0 w-full bg-white shadow-xl z-50 md:hidden transform transition-transform duration-300 ease-in-out border-t border-border flex flex-col ${isMobileMenuOpen ? 'translate-y-0' : '-translate-y-[150%]'
                    } ${isScrolled ? 'top-16' : 'top-[82px]'}`}
                style={{ maxHeight: `calc(100vh - ${isScrolled ? '64px' : '82px'})`, overflowY: 'auto' }}
            >
                <div className="p-6 flex flex-col space-y-2">
                    {navLinks.map((link) => (
                        <div key={link.name} className="border-b border-gray-100 last:border-0">
                            {link.dropdown ? (
                                // Mobile Accordion for Services
                                <div>
                                    <button
                                        onClick={() => setActiveDropdown(activeDropdown === link.name ? null : link.name)}
                                        className="w-full flex items-center justify-between py-4 text-lg font-medium text-dark"
                                    >
                                        {link.name}
                                        <ChevronDown
                                            size={20}
                                            className={`transition-transform duration-200 ${activeDropdown === link.name ? 'rotate-180 text-primary' : 'text-gray-400'}`}
                                        />
                                    </button>
                                    <div
                                        className={`overflow-hidden transition-all duration-300 ${activeDropdown === link.name ? 'max-h-64 opacity-100 mb-4' : 'max-h-0 opacity-0'
                                            }`}
                                    >
                                        <div className="bg-light rounded-lg p-2 space-y-1">
                                            {link.dropdown.map((subItem) => (
                                                <a
                                                    key={subItem.name}
                                                    href={subItem.href}
                                                    className="block px-4 py-3 text-dark hover:text-primary hover:bg-white rounded-md transition-colors"
                                                    onClick={closeMobileMenu}
                                                >
                                                    {subItem.name}
                                                </a>
                                            ))}
                                        </div>
                                    </div>
                                </div>
                            ) : (
                                // Standard Mobile Link
                                <a
                                    href={link.href}
                                    className="block py-4 text-lg font-medium text-dark hover:text-primary"
                                    onClick={closeMobileMenu}
                                >
                                    {link.name}
                                </a>
                            )}
                        </div>
                    ))}

                    {/* Mobile Footer Area in Menu */}
                    <div className="pt-6 mt-4 space-y-4">
                        <div className="flex items-center gap-3 p-4 bg-blue-50 rounded-xl border border-blue-100">
                            <div className="w-10 h-10 rounded-full bg-white flex items-center justify-center text-primary shadow-sm">
                                <Phone size={20} />
                            </div>
                            <div>
                                <span className="block text-xs text-text-body uppercase tracking-wider font-semibold">24/7 Support Line</span>
                                <a href="tel:+18552047714" className="text-dark font-bold text-lg">(855) 204-7714</a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </header>
    );
};

export default Navbar;
