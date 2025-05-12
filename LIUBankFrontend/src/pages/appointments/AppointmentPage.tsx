import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useForm } from 'react-hook-form';
import { motion } from 'framer-motion';
import { Calendar, Clock, MapPin, CheckCircle, Calendar as CalendarIcon } from 'lucide-react';
import PageLayout from '../../components/layout/PageLayout';
import Card from '../../components/common/Card';
import Button from '../../components/common/Button';
import Input from '../../components/common/Input';
import { Appointment } from '../../types';
import { appointmentService } from '../../services/api';
import { useAuth } from '../../context/AuthContext';

interface AppointmentFormData extends Omit<Appointment, 'id' | 'status'> {}

const AppointmentPage: React.FC = () => {
  const navigate = useNavigate();
  const { isAuthenticated } = useAuth();
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);
  const { register, handleSubmit, reset, formState: { errors } } = useForm<AppointmentFormData>();
  
  const locations = [
    { id: 1, name: 'Downtown Financial Center', address: '123 Main Street, New York, NY 10001' },
    { id: 2, name: 'Midtown Branch', address: '456 Park Avenue, New York, NY 10022' },
    { id: 3, name: 'Uptown Office', address: '789 Broadway, New York, NY 10025' },
    { id: 4, name: 'Brooklyn Heights', address: '321 Atlantic Avenue, Brooklyn, NY 11201' }
  ];
  
  const purposes = [
    { id: 1, name: 'Personal Banking Consultation' },
    { id: 2, name: 'Mortgage Application' },
    { id: 3, name: 'Investment Planning' },
    { id: 4, name: 'Loan Application' },
    { id: 5, name: 'Credit Card Services' },
    { id: 6, name: 'Business Banking' },
    { id: 7, name: 'Wealth Management' },
    { id: 8, name: 'Other Services' }
  ];

  const onSubmit = async (data: AppointmentFormData) => {
    try {
      setIsSubmitting(true);
      
      // In a real application, this would call the API
      // await appointmentService.bookAppointment(data);
      
      // Mock successful submission
      setTimeout(() => {
        setIsSuccess(true);
        setIsSubmitting(false);
        reset();
      }, 1500);
    } catch (error) {
      console.error('Error booking appointment:', error);
      setIsSubmitting(false);
      // Would show error message here
    }
  };
  
  return (
    <PageLayout>
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-blue-800 to-indigo-900 pt-20 pb-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.h1 
            className="text-4xl font-bold text-white"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            Book an Appointment
          </motion.h1>
          <motion.p 
            className="mt-4 text-xl text-blue-100 max-w-2xl mx-auto"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
          >
            Schedule a meeting with our financial experts to discuss your banking needs.
          </motion.p>
        </div>
      </section>
      
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col lg:flex-row">
            {/* Appointment Form */}
            <div className="lg:w-2/3 lg:pr-12">
              {isSuccess ? (
                <motion.div 
                  className="bg-white p-8 rounded-xl shadow-md text-center"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ duration: 0.5 }}
                >
                  <div className="flex justify-center mb-6">
                    <div className="h-16 w-16 rounded-full bg-green-100 flex items-center justify-center">
                      <CheckCircle className="h-8 w-8 text-green-600" />
                    </div>
                  </div>
                  <h2 className="text-2xl font-bold text-gray-900 mb-4">Appointment Scheduled Successfully!</h2>
                  <p className="text-gray-600 mb-8">
                    Your appointment has been confirmed. We look forward to meeting with you to discuss your financial needs.
                  </p>
                  <div className="flex flex-col sm:flex-row justify-center space-y-4 sm:space-y-0 sm:space-x-4">
                    <Button 
                      variant="primary"
                      onClick={() => navigate('/dashboard')}
                    >
                      Go to Dashboard
                    </Button>
                    <Button 
                      variant="outline"
                      onClick={() => setIsSuccess(false)}
                    >
                      Book Another Appointment
                    </Button>
                  </div>
                </motion.div>
              ) : (
                <Card elevated>
                  <h2 className="text-2xl font-bold text-gray-900 mb-6">Schedule Your Appointment</h2>
                  
                  {!isAuthenticated && (
                    <div className="bg-yellow-50 border border-yellow-200 text-yellow-800 px-4 py-3 rounded-lg mb-6">
                      <p className="flex items-center">
                        <svg className="h-5 w-5 mr-2" fill="currentColor" viewBox="0 0 20 20">
                          <path fillRule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7-4a1 1 0 11-2 0 1 1 0 012 0zM9 9a1 1 0 000 2v3a1 1 0 001 1h1a1 1 0 100-2v-3a1 1 0 00-1-1H9z" clipRule="evenodd" />
                        </svg>
                        Having an account allows you to manage your appointments. 
                        <Button 
                          variant="text" 
                          className="ml-2 text-blue-600 p-0"
                          onClick={() => navigate('/login')}
                        >
                          Sign in
                        </Button> 
                        or 
                        <Button 
                          variant="text" 
                          className="ml-2 text-blue-600 p-0"
                          onClick={() => navigate('/signup')}
                        >
                          Create an account
                        </Button>
                      </p>
                    </div>
                  )}
                  
                  <form onSubmit={handleSubmit(onSubmit)}>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                      <div>
                        <label className="block text-gray-700 text-sm font-medium mb-2">
                          Appointment Date
                        </label>
                        <div className="relative">
                          <Input
                            id="date"
                            type="date"
                            fullWidth
                            icon={<Calendar size={18} />}
                            {...register('date', { required: 'Date is required' })}
                            error={errors.date?.message}
                            min={new Date().toISOString().split('T')[0]}
                          />
                        </div>
                      </div>
                      
                      <div>
                        <label className="block text-gray-700 text-sm font-medium mb-2">
                          Appointment Time
                        </label>
                        <div className="relative">
                          <Input
                            id="time"
                            type="time"
                            fullWidth
                            icon={<Clock size={18} />}
                            {...register('time', { required: 'Time is required' })}
                            error={errors.time?.message}
                          />
                        </div>
                      </div>
                    </div>
                    
                    <div className="mb-6">
                      <label className="block text-gray-700 text-sm font-medium mb-2">
                        Branch Location
                      </label>
                      <div className="relative">
                        <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none text-gray-500">
                          <MapPin size={18} />
                        </div>
                        <select
                          id="branchLocation"
                          className="border border-gray-300 rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full pl-10 pr-4 py-2.5"
                          {...register('branchLocation', { required: 'Branch location is required' })}
                        >
                          <option value="">Select a location</option>
                          {locations.map(location => (
                            <option key={location.id} value={location.name}>
                              {location.name} - {location.address}
                            </option>
                          ))}
                        </select>
                      </div>
                      {errors.branchLocation && (
                        <p className="mt-1 text-sm text-red-600">{errors.branchLocation.message}</p>
                      )}
                    </div>
                    
                    <div className="mb-6">
                      <label className="block text-gray-700 text-sm font-medium mb-2">
                        Purpose of Appointment
                      </label>
                      <div className="relative">
                        <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none text-gray-500">
                          <CalendarIcon size={18} />
                        </div>
                        <select
                          id="purpose"
                          className="border border-gray-300 rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full pl-10 pr-4 py-2.5"
                          {...register('purpose', { required: 'Purpose is required' })}
                        >
                          <option value="">Select a purpose</option>
                          {purposes.map(purpose => (
                            <option key={purpose.id} value={purpose.name}>
                              {purpose.name}
                            </option>
                          ))}
                        </select>
                      </div>
                      {errors.purpose && (
                        <p className="mt-1 text-sm text-red-600">{errors.purpose.message}</p>
                      )}
                    </div>
                    
                    <div className="mb-6">
                      <label className="block text-gray-700 text-sm font-medium mb-2">
                        Additional Notes (Optional)
                      </label>
                      <textarea
                        id="notes"
                        rows={4}
                        className="border border-gray-300 rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full px-4 py-2.5"
                        placeholder="Please share any additional details or questions you'd like to discuss during your appointment."
                        {...register('notes')}
                      />
                    </div>
                    
                    <Button
                      type="submit"
                      variant="primary"
                      fullWidth
                      disabled={isSubmitting}
                    >
                      {isSubmitting ? 'Scheduling...' : 'Schedule Appointment'}
                    </Button>
                  </form>
                </Card>
              )}
            </div>
            
            {/* Sidebar */}
            <div className="lg:w-1/3 mt-8 lg:mt-0">
              <Card>
                <h3 className="text-xl font-bold text-gray-900 mb-4">Why Meet With Us?</h3>
                <ul className="space-y-4">
                  <li className="flex items-start">
                    <div className="flex-shrink-0 h-5 w-5 text-blue-600">
                      <CheckCircle />
                    </div>
                    <div className="ml-3">
                      <p className="text-gray-600">Get personalized financial advice tailored to your specific needs.</p>
                    </div>
                  </li>
                  <li className="flex items-start">
                    <div className="flex-shrink-0 h-5 w-5 text-blue-600">
                      <CheckCircle />
                    </div>
                    <div className="ml-3">
                      <p className="text-gray-600">Discuss complex financial matters with our expert advisors face-to-face.</p>
                    </div>
                  </li>
                  <li className="flex items-start">
                    <div className="flex-shrink-0 h-5 w-5 text-blue-600">
                      <CheckCircle />
                    </div>
                    <div className="ml-3">
                      <p className="text-gray-600">Explore banking products and services that align with your goals.</p>
                    </div>
                  </li>
                  <li className="flex items-start">
                    <div className="flex-shrink-0 h-5 w-5 text-blue-600">
                      <CheckCircle />
                    </div>
                    <div className="ml-3">
                      <p className="text-gray-600">Receive guidance on improving your financial well-being.</p>
                    </div>
                  </li>
                </ul>
                
                <div className="mt-6 pt-6 border-t border-gray-200">
                  <h4 className="font-semibold text-gray-900">What to Bring</h4>
                  <ul className="mt-2 space-y-2">
                    <li className="flex items-start">
                      <span className="text-sm text-gray-600">• Valid ID (driver's license, passport)</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-sm text-gray-600">• Relevant financial documents</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-sm text-gray-600">• List of questions or concerns</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-sm text-gray-600">• Any applicable statements or bills</span>
                    </li>
                  </ul>
                </div>
                
                <div className="mt-6 pt-6 border-t border-gray-200">
                  <h4 className="font-semibold text-gray-900">Need Help?</h4>
                  <p className="mt-2 text-sm text-gray-600">
                    If you have questions or need assistance, please contact our customer service team at:
                  </p>
                  <p className="mt-2 text-sm font-medium text-blue-600">
                    1-800-123-4567
                  </p>
                </div>
              </Card>
            </div>
          </div>
        </div>
      </section>
    </PageLayout>
  );
};

export default AppointmentPage;