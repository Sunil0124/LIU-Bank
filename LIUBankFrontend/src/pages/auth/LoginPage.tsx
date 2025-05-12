import React, { useState } from 'react';
import { Link, Navigate, useNavigate } from 'react-router-dom';
import { useForm } from 'react-hook-form';
import { Mail, Lock, Eye, EyeOff, Building2, Shield, User } from 'lucide-react';
import { motion } from 'framer-motion';
import { useAuth } from '../../context/AuthContext';
import PageLayout from '../../components/layout/PageLayout';
import Input from '../../components/common/Input';
import Button from '../../components/common/Button';
import { LoginCredentials } from '../../types';

const LoginPage: React.FC = () => {
  const { login, isAuthenticated, isLoading } = useAuth();
  const navigate = useNavigate();
  const [showPassword, setShowPassword] = useState(false);
  const [loginError, setLoginError] = useState<string | null>(null);
  
  const { register, handleSubmit, formState: { errors } } = useForm<LoginCredentials>();
  
  const togglePasswordVisibility = () => setShowPassword(!showPassword);
  
  const onSubmit = async (data: LoginCredentials) => {
    try {
      setLoginError(null);
      await login(data);
      navigate('/dashboard');
    } catch (error) {
      setLoginError('Invalid username or password. Please try again.');
    }
  };
  
  if (isAuthenticated && !isLoading) {
    return <Navigate to="/dashboard" />;
  }
  
  return (
    <PageLayout>
      <div className="min-h-screen bg-gradient-to-b from-blue-50 to-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          <div className="flex flex-col lg:flex-row items-center justify-between gap-12">
            <motion.div 
              className="w-full max-w-md"
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5 }}
            >
              <div className="bg-white p-8 rounded-2xl shadow-xl">
                <div className="flex items-center justify-center mb-8">
                  <div className="relative">
                    <Building2 className="w-12 h-12 text-blue-600" />
                    <Shield className="w-6 h-6 text-blue-400 absolute -bottom-1 -right-1" />
                  </div>
                </div>

                <div className="text-center mb-8">
                  <h2 className="text-3xl font-bold text-gray-900 mb-2">Welcome back</h2>
                  <p className="text-gray-600">
                    Sign in to access your LIU Bank account
                  </p>
                </div>
                
                {loginError && (
                  <motion.div 
                    className="mb-6 p-4 bg-red-50 border border-red-100 rounded-lg text-red-600 text-sm"
                    initial={{ opacity: 0, y: -10 }}
                    animate={{ opacity: 1, y: 0 }}
                  >
                    {loginError}
                  </motion.div>
                )}
                
                <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
                  <Input
                    id="username"
                    type="text"
                    label="Username"
                    placeholder="Enter your username (e.g., john.doe)"
                    icon={<User size={18} />}
                    fullWidth
                    helperText="Your unique username for accessing online banking"
                    {...register('username', { 
                      required: 'Username is required'
                    })}
                    error={errors.username?.message}
                  />
                  
                  <div className="relative">
                    <Input
                      id="password"
                      type={showPassword ? 'text' : 'password'}
                      label="Password"
                      placeholder="Enter your secure password"
                      icon={<Lock size={18} />}
                      fullWidth
                      helperText="Enter your secure password to access your account"
                      {...register('password', { 
                        required: 'Password is required',
                        minLength: {
                          value: 8,
                          message: 'Password must be at least 8 characters'
                        }
                      })}
                      error={errors.password?.message}
                    />
                    <button
                      type="button"
                      onClick={togglePasswordVisibility}
                      className="absolute right-3 top-9 text-gray-500 hover:text-gray-700 focus:outline-none"
                    >
                      {showPassword ? <EyeOff size={18} /> : <Eye size={18} />}
                    </button>
                  </div>
                  
                  <div className="flex items-center justify-between">
                    <div className="flex items-center">
                      <input
                        id="remember-me"
                        name="remember-me"
                        type="checkbox"
                        className="h-4 w-4 text-blue-600 focus:ring-blue-500 border-gray-300 rounded"
                      />
                      <label htmlFor="remember-me" className="ml-2 block text-sm text-gray-700">
                        Remember me
                      </label>
                    </div>
                  </div>

                  <div className="flex flex-col space-y-2">
                    <Link 
                      to="/forgot-username" 
                      className="text-sm font-medium text-blue-600 hover:text-blue-500 transition-colors text-right"
                    >
                      Forgot Username?
                    </Link>
                    <Link 
                      to="/forgot-password" 
                      className="text-sm font-medium text-blue-600 hover:text-blue-500 transition-colors text-right"
                    >
                      Forgot Password?
                    </Link>
                  </div>
                  
                  <Button
                    type="submit"
                    variant="primary"
                    fullWidth
                    disabled={isLoading}
                    className="py-3"
                  >
                    {isLoading ? 'Signing in...' : 'Sign in'}
                  </Button>
                </form>

                <div className="mt-6 text-center">
                  <p className="text-sm text-gray-600">
                    Don't have an account?{' '}
                    <Link 
                      to="/signup" 
                      className="font-medium text-blue-600 hover:text-blue-500 transition-colors"
                    >
                      Sign up for Online Banking
                    </Link>
                  </p>
                </div>
              </div>
            </motion.div>

            <motion.div 
              className="hidden lg:block w-full max-w-lg"
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
            >
              <img 
                src="https://images.pexels.com/photos/5905558/pexels-photo-5905558.jpeg?auto=compress&cs=tinysrgb&w=800" 
                alt="Banking features" 
                className="rounded-2xl shadow-xl mb-8"
              />

              <div className="grid grid-cols-2 gap-6">
                <div className="bg-white p-6 rounded-xl shadow-lg">
                  <Shield className="w-8 h-8 text-blue-600 mb-4" />
                  <h3 className="text-lg font-semibold text-gray-900 mb-2">Secure Banking</h3>
                  <p className="text-gray-600 text-sm">
                    Bank with confidence using our state-of-the-art security measures.
                  </p>
                </div>

                <div className="bg-white p-6 rounded-xl shadow-lg">
                  <Building2 className="w-8 h-8 text-blue-600 mb-4" />
                  <h3 className="text-lg font-semibold text-gray-900 mb-2">24/7 Support</h3>
                  <p className="text-gray-600 text-sm">
                    Access your account and get support anytime, anywhere.
                  </p>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </PageLayout>
  );
};

export default LoginPage;