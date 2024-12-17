import React from 'react';
import { Icons } from '../../../public/icons';

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'primary' | 'secondary';
  children: React.ReactNode;
  icon?: keyof typeof Icons;
}

export function Button({ 
  variant = 'primary', 
  children, 
  icon,
  className = '',
  ...props 
}: ButtonProps) {
  const baseStyles = "px-6 py-2 rounded-full transition-all duration-300 transform hover:scale-105 flex items-center space-x-2";
  const variants = {
    primary: "bg-[#0d3445] text-white hover:bg-blue-700",
    secondary: "border-2 border-[#0d3445] text-[#0d3445] hover:bg-blue-50"
  };

  const Icon = icon ? Icons[icon] : null;

  return (
    <button 
      className={`${baseStyles} ${variants[variant]} ${className}`}
      {...props}
    >
      <span>{children}</span>
      {Icon && <Icon className="h-5 w-5" />}
    </button>
  );
}