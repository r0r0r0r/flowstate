import React from 'react';

const TrustBar: React.FC = () => {
    const brands = [
        "Kohler", "Moen", "Delta", "American Standard", "Toto", "Rheem", "Bradford White"
    ];

    return (
        <div className="bg-white border-b border-border py-8 overflow-hidden">
            <div className="container mx-auto px-4">
                <p className="text-center text-sm font-semibold text-text-body uppercase tracking-widest mb-6">
                    Trusted Service Provider For Leading Brands
                </p>
                <div className="flex flex-wrap justify-center items-center gap-8 md:gap-16 opacity-60 grayscale hover:grayscale-0 transition-all duration-500">
                    {/* In a real project, these would be SVGs. For now, we use text representations styled to look like logos */}
                    {brands.map((brand, index) => (
                        <span key={index} className="text-xl md:text-2xl font-bold font-serif text-dark hover:text-primary cursor-default">
                            {brand}
                        </span>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default TrustBar;
