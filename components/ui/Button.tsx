import React from 'react';

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'primary' | 'secondary' | 'accent' | 'ghost' | 'outline-white' | 'white';
  children: React.ReactNode;
  href?: string;
}

const Button: React.FC<ButtonProps> = ({ variant = 'primary', children, className = '', href, ...props }) => {
  const baseStyles = "inline-flex items-center justify-center px-8 py-3 rounded-lg font-semibold text-base transition-all duration-200 transform hover:-translate-y-0.5 whitespace-nowrap";
  
  const variants = {
    primary: "bg-primary text-white shadow-soft hover:shadow-hover hover:bg-blue-700",
    secondary: "bg-gradient-to-r from-secondary to-primary text-white shadow-soft hover:shadow-hover",
    accent: "bg-accent text-white hover:bg-orange-600 shadow-soft",
    ghost: "bg-transparent text-primary hover:bg-blue-50/50",
    "outline-white": "bg-transparent border-2 border-white text-white hover:bg-white hover:text-primary",
    white: "bg-white text-primary hover:bg-gray-100 shadow-soft"
  };

  const combinedClasses = `${baseStyles} ${variants[variant]} ${className}`;

  if (href) {
    return (
      <a href={href} className={combinedClasses}>
        {children}
      </a>
    );
  }

  return (
    <button className={combinedClasses} {...props}>
      {children}
    </button>
  );
};

export default Button;