import React, { forwardRef } from 'react';

export interface InputProps extends React.InputHTMLAttributes<HTMLInputElement> {
  label?: string;
  error?: string;
  fullWidth?: boolean;
  icon?: React.ReactNode;
  variant?: 'outlined' | 'filled';
  helperText?: string;
  required?: boolean;
  endIcon?: React.ReactNode;
}

const Input = forwardRef<HTMLInputElement, InputProps>(({
  label,
  error,
  className = '',
  fullWidth = false,
  icon,
  variant = 'outlined',
  helperText,
  required,
  endIcon,
  ...props
}, ref) => {
  const inputBaseStyles = 'rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full px-4 py-2.5';
  const variantStyles = {
    outlined: 'border border-gray-300',
    filled: 'bg-gray-100 border border-transparent'
  };
  
  const errorClass = error ? 'border-red-500 focus:ring-red-500 focus:border-red-500' : '';
  const iconClass = icon ? 'pl-10' : '';
  const endIconClass = endIcon ? 'pr-10' : '';
  
  const inputClasses = `${inputBaseStyles} ${variantStyles[variant]} ${errorClass} ${iconClass} ${endIconClass} ${className}`;
  
  return (
    <div className={`mb-4 ${fullWidth ? 'w-full' : ''}`}>
      {label && (
        <label className="block text-gray-700 text-sm font-medium mb-2" htmlFor={props.id}>
          {label}
          {required && <span className="text-red-500 ml-1">*</span>}
        </label>
      )}
      <div className="relative flex items-center">
        {icon && (
          <div className="absolute left-3 flex items-center pointer-events-none text-gray-500">
            {icon}
          </div>
        )}
        <input
          ref={ref}
          className={inputClasses}
          {...props}
        />
        {endIcon && (
          <div className="absolute right-3 flex items-center text-gray-500">
            {endIcon}
          </div>
        )}
      </div>
      {error && <p className="mt-1 text-sm text-red-600">{error}</p>}
      {helperText && !error && (
        <p className="mt-1 text-sm text-gray-500">{helperText}</p>
      )}
    </div>
  );
});

Input.displayName = 'Input';

export default Input;

export { Input };