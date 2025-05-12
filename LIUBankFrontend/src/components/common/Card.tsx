import React from 'react';
import { motion } from 'framer-motion';

interface CardProps {
  children: React.ReactNode;
  title?: string;
  className?: string;
  onClick?: () => void;
  elevated?: boolean;
  hover?: boolean;
  footer?: React.ReactNode;
  icon?: React.ReactNode;
}

const Card: React.FC<CardProps> = ({
  children,
  title,
  className = '',
  onClick,
  elevated = false,
  hover = true,
  footer,
  icon
}) => {
  const baseStyles = 'bg-white rounded-xl overflow-hidden transition-all duration-300';
  const elevationStyles = elevated ? 'shadow-lg' : 'shadow-md';
  const hoverStyles = hover && onClick ? 'hover:shadow-xl cursor-pointer transform hover:-translate-y-1' : '';
  const cardClasses = `${baseStyles} ${elevationStyles} ${hoverStyles} ${className}`;

  return (
    <motion.div
      className={cardClasses}
      onClick={onClick}
      whileHover={hover ? { y: -5 } : {}}
      transition={{ type: 'spring', stiffness: 300 }}
    >
      {(title || icon) && (
        <div className="flex items-center px-6 py-4 border-b border-gray-100">
          {icon && <div className="mr-3 text-blue-600">{icon}</div>}
          {title && <h3 className="text-lg font-semibold text-gray-800">{title}</h3>}
        </div>
      )}
      <div className="p-6">{children}</div>
      {footer && <div className="px-6 py-4 bg-gray-50 border-t border-gray-100">{footer}</div>}
    </motion.div>
  );
};

export default Card;