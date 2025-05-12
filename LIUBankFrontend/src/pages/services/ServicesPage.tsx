import React from 'react';
import { useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';
import { CreditCard, Wallet, BanknoteIcon, Home, Calendar, Landmark, Briefcase, Shield, TrendingUp, Building } from 'lucide-react';
import PageLayout from '../../components/layout/PageLayout';
import Card from '../../components/common/Card';
import Button from '../../components/common/Button';

const ServicesPage: React.FC = () => {
  const navigate = useNavigate();
  
  const services = [
    {
      id: 1,
      title: 'Checking & Savings',
      description: 'Manage your daily finances with our flexible checking and high-yield savings accounts.',
      icon: <Wallet className="h-6 w-6" />,
      features: [
        'No monthly maintenance fees',
        'Free online and mobile banking',
        'Competitive interest rates',
        'Overdraft protection'
      ],
      cta: 'Open an Account',
      link: '/services/accounts'
    },
    {
      id: 2,
      title: 'Credit Cards',
      description: 'Find the perfect card with rewards tailored to your lifestyle and spending habits.',
      icon: <CreditCard className="h-6 w-6" />,
      features: [
        'Cash back rewards',
        'Travel benefits',
        'No annual fee options',
        'Fraud protection'
      ],
      cta: 'Apply for a Card',
      link: '/services/cards'
    },
    {
      id: 3,
      title: 'Personal Loans',
      description: 'Get funds for any need with our flexible personal loan options and competitive rates.',
      icon: <BanknoteIcon className="h-6 w-6" />,
      features: [
        'Fixed interest rates',
        'Flexible terms',
        'No collateral required',
        'Fast approval process'
      ],
      cta: 'Apply for a Loan',
      link: '/services/loans'
    },
    {
      id: 4,
      title: 'Home Mortgages',
      description: 'Find the right mortgage solution with expert guidance and competitive rates.',
      icon: <Home className="h-6 w-6" />,
      features: [
        'Fixed and adjustable rates',
        'Refinancing options',
        'First-time homebuyer programs',
        'Pre-approval available'
      ],
      cta: 'Explore Mortgages',
      link: '/services/mortgages'
    },
    {
      id: 5,
      title: 'Investment Services',
      description: 'Build your wealth with our range of investment options and professional advice.',
      icon: <TrendingUp className="h-6 w-6" />,
      features: [
        'Retirement planning',
        'Investment advisory',
        'Portfolio management',
        'Wealth management'
      ],
      cta: 'Start Investing',
      link: '/services/investments'
    },
    {
      id: 6,
      title: 'Business Banking',
      description: 'Comprehensive solutions to help your business thrive and grow.',
      icon: <Briefcase className="h-6 w-6" />,
      features: [
        'Business checking & savings',
        'Merchant services',
        'Business loans',
        'Cash management'
      ],
      cta: 'Business Solutions',
      link: '/services/business'
    }
  ];
  
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
            Banking Services
          </motion.h1>
          <motion.p 
            className="mt-4 text-xl text-blue-100 max-w-2xl mx-auto"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
          >
            Explore our comprehensive range of financial services designed to help you achieve your goals.
          </motion.p>
        </div>
      </section>
      
      {/* Services Grid */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <motion.div 
                key={service.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                <Card 
                  title={service.title} 
                  icon={service.icon}
                  elevated 
                  hover 
                  onClick={() => navigate(service.link)}
                  footer={
                    <Button 
                      variant="primary" 
                      size="sm" 
                      fullWidth
                      onClick={() => navigate(service.link)}
                    >
                      {service.cta}
                    </Button>
                  }
                >
                  <p className="text-gray-600 mb-4">{service.description}</p>
                  <ul className="space-y-2">
                    {service.features.map((feature, i) => (
                      <li key={i} className="flex items-start">
                        <div className="flex-shrink-0 h-5 w-5 text-blue-600">
                          <svg className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                          </svg>
                        </div>
                        <span className="ml-2 text-sm text-gray-600">{feature}</span>
                      </li>
                    ))}
                  </ul>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
      
      {/* Appointment Section */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col lg:flex-row items-center">
            <div className="lg:w-1/2 lg:pr-16 mb-8 lg:mb-0">
              <motion.h2 
                className="text-3xl font-bold text-gray-900"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
                viewport={{ once: true }}
              >
                Need Personalized Assistance?
              </motion.h2>
              <motion.p 
                className="mt-4 text-xl text-gray-600"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.1 }}
                viewport={{ once: true }}
              >
                Schedule an appointment with one of our financial experts to discuss your specific needs and goals.
              </motion.p>
              
              <motion.div 
                className="mt-8 space-y-4"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.2 }}
                viewport={{ once: true }}
              >
                <div className="flex items-start">
                  <div className="flex-shrink-0 h-6 w-6 text-blue-600">
                    <Calendar />
                  </div>
                  <div className="ml-3">
                    <h3 className="text-lg font-medium text-gray-900">Flexible Scheduling</h3>
                    <p className="mt-1 text-gray-600">Choose a time that works for you, including evenings and weekends.</p>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <div className="flex-shrink-0 h-6 w-6 text-blue-600">
                    <Building />
                  </div>
                  <div className="ml-3">
                    <h3 className="text-lg font-medium text-gray-900">Multiple Locations</h3>
                    <p className="mt-1 text-gray-600">Visit us at any of our convenient branch locations.</p>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <div className="flex-shrink-0 h-6 w-6 text-blue-600">
                    <Landmark />
                  </div>
                  <div className="ml-3">
                    <h3 className="text-lg font-medium text-gray-900">Expert Advisors</h3>
                    <p className="mt-1 text-gray-600">Meet with experienced professionals dedicated to your financial success.</p>
                  </div>
                </div>
              </motion.div>
              
              <motion.div 
                className="mt-8"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.3 }}
                viewport={{ once: true }}
              >
                <Button 
                  variant="primary" 
                  size="lg"
                  onClick={() => navigate('/appointments')}
                >
                  <Calendar className="h-5 w-5 mr-2" />
                  Book an Appointment
                </Button>
              </motion.div>
            </div>
            
            <motion.div 
              className="lg:w-1/2"
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.7 }}
              viewport={{ once: true }}
            >
              <img 
                src="https://images.pexels.com/photos/3760067/pexels-photo-3760067.jpeg?auto=compress&cs=tinysrgb&w=800" 
                alt="Financial advisor meeting" 
                className="rounded-xl shadow-lg max-w-full"
              />
            </motion.div>
          </div>
        </div>
      </section>
      
      {/* Trust & Security Section */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.h2 
            className="text-3xl font-bold text-gray-900"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
          >
            Your Trust & Security Is Our Priority
          </motion.h2>
          <motion.p 
            className="mt-4 text-xl text-gray-600 max-w-2xl mx-auto"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            viewport={{ once: true }}
          >
            At LIU Bank, we take the security of your information and assets seriously.
          </motion.p>
          
          <motion.div 
            className="mt-12 flex flex-col md:flex-row justify-center space-y-8 md:space-y-0 md:space-x-12"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            viewport={{ once: true }}
          >
            <div className="flex flex-col items-center">
              <div className="h-16 w-16 rounded-full bg-blue-100 flex items-center justify-center mb-4">
                <Shield className="h-8 w-8 text-blue-600" />
              </div>
              <h3 className="text-lg font-medium text-gray-900">Advanced Encryption</h3>
              <p className="mt-2 text-gray-600 max-w-xs">
                Bank-level encryption to protect your personal and financial information.
              </p>
            </div>
            
            <div className="flex flex-col items-center">
              <div className="h-16 w-16 rounded-full bg-blue-100 flex items-center justify-center mb-4">
                <Shield className="h-8 w-8 text-blue-600" />
              </div>
              <h3 className="text-lg font-medium text-gray-900">Fraud Monitoring</h3>
              <p className="mt-2 text-gray-600 max-w-xs">
                24/7 monitoring and alerts to detect and prevent suspicious activity.
              </p>
            </div>
            
            <div className="flex flex-col items-center">
              <div className="h-16 w-16 rounded-full bg-blue-100 flex items-center justify-center mb-4">
                <Shield className="h-8 w-8 text-blue-600" />
              </div>
              <h3 className="text-lg font-medium text-gray-900">Secure Authentication</h3>
              <p className="mt-2 text-gray-600 max-w-xs">
                Multi-factor authentication to ensure only you can access your accounts.
              </p>
            </div>
          </motion.div>
          
          <motion.div 
            className="mt-12"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.3 }}
            viewport={{ once: true }}
          >
            <Button 
              variant="outline" 
              size="lg"
              onClick={() => navigate('/security')}
            >
              Learn More About Our Security
            </Button>
          </motion.div>
        </div>
      </section>
      
      {/* Call to Action */}
      <section className="py-16 bg-blue-700">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.h2 
            className="text-3xl font-bold text-white"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
          >
            Ready to get started?
          </motion.h2>
          <motion.p 
            className="mt-4 text-xl text-blue-100 max-w-2xl mx-auto"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            viewport={{ once: true }}
          >
            Open an account today and experience the LIU Bank difference.
          </motion.p>
          <motion.div 
            className="mt-8 flex flex-col sm:flex-row space-y-4 sm:space-y-0 sm:space-x-4 justify-center"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            viewport={{ once: true }}
          >
            <Button 
              variant="primary" 
              size="lg" 
              className="bg-white text-blue-700 hover:bg-blue-50"
              onClick={() => navigate('/signup')}
            >
              Open an Account
            </Button>
            <Button 
              variant="outline" 
              size="lg" 
              className="border-white text-white hover:bg-white/10"
              onClick={() => navigate('/contact')}
            >
              Contact Us
            </Button>
          </motion.div>
        </div>
      </section>
    </PageLayout>
  );
};

export default ServicesPage;