import React from 'react';
import { Link } from 'react-router-dom';
import { Building2, Shield, CircleDollarSign } from 'lucide-react';

interface LogoProps {
  variant?: 'default' | 'white';
  size?: 'sm' | 'md' | 'lg';
}

const Logo: React.FC<LogoProps> = ({ variant = 'default', size = 'md' }) => {
  const sizeClasses = {
    sm: {
      container: 'h-8',
      logo: 'h-6',
      text: 'text-lg',
      icon: 'w-4 h-4'
    },
    md: {
      container: 'h-10',
      logo: 'h-8',
      text: 'text-xl',
      icon: 'w-5 h-5'
    },
    lg: {
      container: 'h-12',
      logo: 'h-10',
      text: 'text-2xl',
      icon: 'w-6 h-6'
    }
  };

  const colorClasses = {
    default: {
      primary: 'text-primary-600',
      secondary: 'text-secondary-600',
      accent: 'text-primary-500',
      text: 'text-gray-800',
      gradient: 'from-primary-500 to-secondary-600'
    },
    white: {
      primary: 'text-white',
      secondary: 'text-white/90',
      accent: 'text-white/80',
      text: 'text-white',
      gradient: 'from-white/90 to-white/70'
    }
  };

  return (
    <Link 
      to="/" 
      className={`flex items-center group ${sizeClasses[size].container}`}
    >
      <div className="relative flex items-center mr-3">
        <div className={`
          relative z-10 transition-transform duration-300 
          group-hover:transform group-hover:scale-110
          ${colorClasses[variant].primary}
        `}>
          <Building2 className={sizeClasses[size].logo} strokeWidth={1.5} />
        </div>
        
        <div className={`
          absolute -bottom-1 -right-1 transition-all duration-300
          group-hover:transform group-hover:translate-x-0.5 group-hover:translate-y-0.5
          ${colorClasses[variant].secondary}
        `}>
          <Shield className={sizeClasses[size].icon} strokeWidth={1.5} />
        </div>
        
        <div className={`
          absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2
          transition-opacity duration-300 opacity-0 group-hover:opacity-100
          ${colorClasses[variant].accent}
        `}>
          <CircleDollarSign className={sizeClasses[size].icon} strokeWidth={1.5} />
        </div>
      </div>

      <div className="flex flex-col">
        <div className="flex items-baseline">
          <span className={`
            font-extrabold tracking-tight ${sizeClasses[size].text}
            bg-gradient-to-r bg-clip-text text-transparent
            ${colorClasses[variant].gradient}
          `}>
            LIU
          </span>
          <span className={`
            font-light ${sizeClasses[size].text} ml-1
            ${colorClasses[variant].text}
          `}>
            BANK
          </span>
        </div>
        <span className={`
          text-xs tracking-wider uppercase
          ${colorClasses[variant].secondary}
        `}>
          Secure • Innovative • Trusted
        </span>
      </div>
    </Link>
  );
};

export default Logo;