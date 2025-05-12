import React, { useState } from 'react';
import { Link, Navigate, useNavigate } from 'react-router-dom';
import { useForm } from 'react-hook-form';
import { Mail, Lock, User, Eye, EyeOff, Building2, Shield, Calendar, Hash } from 'lucide-react';
import { motion } from 'framer-motion';
import { useAuth } from '../../context/AuthContext';
import PageLayout from '../../components/layout/PageLayout';
import Input from '../../components/common/Input';
import Button from '../../components/common/Button';
import { SignupCredentials } from '../../types';

const SignupPage: React.FC = () => {
  const { signup, isAuthenticated, isLoading } = useAuth();
  const navigate = useNavigate();
  const [showPassword, setShowPassword] = useState(false);
  const [signupError, setSignupError] = useState<string | null>(null);

  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm<SignupCredentials>();

  const password = watch('password', '');

  const togglePasswordVisibility = () => setShowPassword(!showPassword);

  const onSubmit = async (data: SignupCredentials) => {
    try {
      setSignupError(null);
      await signup(data);
      navigate('/dashboard');
    } catch (error) {
      setSignupError('Registration failed. Please try again.');
    }
  };

  if (isAuthenticated && !isLoading) {
    return <Navigate to="/dashboard" />;
  }

  return (
    <PageLayout>
      <div className="min-h-screen bg-gradient-to-b from-blue-50 to-white py-8">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col lg:flex-row items-start justify-between gap-8">
            <motion.div
              className="w-full max-w-2xl"
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5 }}
            >
              <div className="bg-white p-6 rounded-2xl shadow-xl">
                <div className="flex items-center justify-center mb-4">
                  <div className="relative">
                    <Building2 className="w-10 h-10 text-blue-600" />
                    <Shield className="w-5 h-5 text-blue-400 absolute -bottom-1 -right-1" />
                  </div>
                </div>

                <div className="text-center mb-6">
                  <h2 className="text-2xl font-bold text-gray-900 mb-1">
                    Sign Up for Online Banking
                  </h2>
                  <p className="text-sm text-gray-600">
                    Already have an account with us? Register for online access
                  </p>
                </div>

                {signupError && (
                  <motion.div
                    className="mb-4 p-3 bg-red-50 border border-red-100 rounded-lg text-red-600 text-sm"
                    initial={{ opacity: 0, y: -10 }}
                    animate={{ opacity: 1, y: 0 }}
                  >
                    {signupError}
                  </motion.div>
                )}

                <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <Input
                      id="accountNumber"
                      type="text"
                      label="Account Number"
                      maxLength={10}
                      inputMode="numeric"
                      pattern="[0-9]*"
                      placeholder="10-digit number"
                      icon={<Hash size={18} />}
                      helperText="Found on statement"
                      required
                      {...register('accountNumber', {
                        required: 'Account number is required',
                        pattern: {
                          value: /^[0-9]{10}$/,
                          message: 'Enter valid 10-digit number',
                        },
                      })}
                      error={errors.accountNumber?.message}
                      onInput={(e) => {
                        const input = e.target as HTMLInputElement;
                        input.value = input.value.replace(/\D/g, '');
                      }}
                    />

                    <Input
                      id="ssn"
                      type="password"
                      maxLength={9}
                      label="Social Security Number"
                      placeholder="9-digit SSN"
                      icon={<Hash size={18} />}
                      helperText="For verification"
                      required
                      {...register('ssn', {
                        required: 'SSN is required',
                        pattern: {
                          value: /^\d{9}$/,
                          message: 'Enter valid 9-digit SSN',
                        },
                      })}
                      error={errors.ssn?.message}
                      onInput={(e) => {
                        const input = e.target as HTMLInputElement;
                        input.value = input.value.replace(/\D/g, '');
                      }}
                    />
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <Input
                      id="dateOfBirth"
                      type="date"
                      label="Date of Birth"
                      icon={<Calendar size={18} />}
                      helperText="Must be 18+"
                      required
                      {...register('dateOfBirth', {
                        required: 'Date of birth is required',
                        validate: (value) => {
                          const age = new Date().getFullYear() - new Date(value).getFullYear();
                          return age >= 18 || 'Must be 18+';
                        },
                      })}
                      error={errors.dateOfBirth?.message}
                    />

                    <Input
                      id="username"
                      type="text"
                      label="Choose Username"
                      placeholder="e.g., john.doe2024"
                      icon={<User size={18} />}
                      helperText="5+ chars, letters & numbers"
                      required
                      {...register('username', {
                        required: 'Username required',
                        pattern: {
                          value: /^[a-zA-Z0-9.]+$/,
                          message: 'Letters & numbers only',
                        },
                        minLength: {
                          value: 5,
                          message: 'Min 5 characters',
                        },
                      })}
                      error={errors.username?.message}
                    />
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <Input
                      id="firstName"
                      type="text"
                      label="First Name"
                      placeholder="Enter first name"
                      icon={<User size={18} />}
                      required
                      {...register('firstName', {
                        required: 'First name is required',
                      })}
                      error={errors.firstName?.message}
                    />

                    <Input
                      id="lastName"
                      type="text"
                      label="Last Name"
                      placeholder="Enter last name"
                      icon={<User size={18} />}
                      required
                      {...register('lastName', {
                        required: 'Last name is required',
                      })}
                      error={errors.lastName?.message}
                    />
                  </div>

                  <Input
                    id="email"
                    type="email"
                    label="Email Address"
                    placeholder="Enter your email"
                    icon={<Mail size={18} />}
                    required
                    {...register('email', {
                      required: 'Email required',
                      pattern: {
                        value: /^\S+@\S+$/i,
                        message: 'Enter valid email',
                      },
                    })}
                    error={errors.email?.message}
                  />

                  <Input
                    id="password"
                    type={showPassword ? 'text' : 'password'}
                    label="Create Password"
                    placeholder="Create strong password"
                    icon={<Lock size={18} />}
                    endIcon={
                      <button
                        type="button"
                        onClick={togglePasswordVisibility}
                        className="text-gray-500 hover:text-gray-700 focus:outline-none"
                      >
                        {showPassword ? <EyeOff size={18} /> : <Eye size={18} />}
                      </button>
                    }
                    helperText="8+ chars with letters, numbers & symbols"
                    required
                    {...register('password', {
                      required: 'Password required',
                      pattern: {
                        value: /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/,
                        message: 'Must meet requirements',
                      },
                    })}
                    error={errors.password?.message}
                  />

                  <div className="flex items-start">
                    <div className="flex items-center h-5">
                      <input
                        id="terms"
                        type="checkbox"
                        className="h-4 w-4 text-blue-600 focus:ring-blue-500 border-gray-300 rounded"
                        {...register('terms', {
                          required: 'Must accept terms',
                        })}
                      />
                    </div>
                    <div className="ml-3">
                      <label htmlFor="terms" className="text-sm text-gray-700">
                        I agree to the{' '}
                        <Link to="/terms" className="font-medium text-blue-600 hover:text-blue-500">
                          Terms
                        </Link>{' '}
                        and{' '}
                        <Link to="/privacy" className="font-medium text-blue-600 hover:text-blue-500">
                          Privacy Policy
                        </Link>
                      </label>
                      {errors.terms && (
                        <p className="mt-1 text-xs text-red-600">{errors.terms.message}</p>
                      )}
                    </div>
                  </div>

                  <Button type="submit" variant="primary" fullWidth disabled={isLoading}>
                    {isLoading ? 'Creating Account...' : 'Create Account'}
                  </Button>

                  <div className="text-center">
                    <p className="text-sm text-gray-600">
                      Already have an account?{' '}
                      <Link to="/login" className="font-medium text-blue-600 hover:text-blue-500">
                        Sign in
                      </Link>
                    </p>
                  </div>
                </form>
              </div>
            </motion.div>

            <motion.div
              className="hidden lg:block w-full max-w-md"
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
            >
              <div className="bg-white p-6 rounded-xl shadow-lg">
                <h3 className="text-xl font-semibold text-gray-900 mb-4">
                  Why Register for Online Banking?
                </h3>

                <div className="space-y-3">
                  {[
                    'Access accounts 24/7',
                    'View statements & transactions',
                    'Transfer funds between accounts',
                    'Pay bills online',
                    'Mobile check deposit',
                    'Set up account alerts',
                    'Secure messaging',
                  ].map((feature, index) => (
                    <div key={index} className="flex items-center">
                      <Shield className="w-5 h-5 text-green-500 mr-2" />
                      <span className="text-gray-700 text-sm">{feature}</span>
                    </div>
                  ))}
                </div>

                <div className="mt-6 p-4 bg-blue-50 rounded-lg">
                  <h4 className="font-semibold text-gray-900 mb-2">Need Help?</h4>
                  <p className="text-gray-600 text-sm">Contact our support team:</p>
                  <p className="text-blue-600 font-medium mt-1">1-800-123-4567</p>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </PageLayout>
  );
};

export default SignupPage;
