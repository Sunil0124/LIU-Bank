import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';
import { Shield, TrendingUp, CreditCard, Building, Users, ArrowRight, CheckCircle } from 'lucide-react';
import Button from '../../components/common/Button';
import Card from '../../components/common/Card';
import PageLayout from '../../components/layout/PageLayout';

const HomePage: React.FC = () => {
  const navigate = useNavigate();

  const features = [
    {
      icon: <Shield className="h-6 w-6 text-blue-600" />,
      title: 'Secure Banking',
      description: 'Bank with confidence knowing your money and information are protected with industry-leading security.',
    },
    {
      icon: <TrendingUp className="h-6 w-6 text-blue-600" />,
      title: 'Investment Options',
      description: 'Grow your wealth with our range of investment options tailored to your financial goals.',
    },
    {
      icon: <CreditCard className="h-6 w-6 text-blue-600" />,
      title: 'Premium Cards',
      description: 'Enjoy exclusive benefits and rewards with our premium credit and debit cards.',
    },
    {
      icon: <Building className="h-6 w-6 text-blue-600" />,
      title: 'Mortgage Solutions',
      description: 'Find the right mortgage solution with competitive rates for your dream home.',
    },
  ];

  const testimonials = [
    {
      name: 'Sarah Johnson',
      role: 'Small Business Owner',
      content: 'LIU Bank has transformed how I manage my business finances. Their user-friendly platform and dedicated support team have made banking a breeze.',
      image: 'https://images.pexels.com/photos/774909/pexels-photo-774909.jpeg?auto=compress&cs=tinysrgb&w=150'
    },
    {
      name: 'Michael Chen',
      role: 'Investment Advisor',
      content: 'As someone who works in finance, I appreciate LIU Bank&#39;s attention to detail and innovative approach. Their investment platform is simply exceptional.',
      image: 'https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg?auto=compress&cs=tinysrgb&w=150'
    },
    {
      name: 'Emily Rodriguez',
      role: 'Homeowner',
      content: 'Getting my mortgage through LIU Bank was the best decision. They offered competitive rates and guided me through every step of the process.',
      image: 'https://images.pexels.com/photos/1239291/pexels-photo-1239291.jpeg?auto=compress&cs=tinysrgb&w=150'
    },
  ];

  return (
    <PageLayout>
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-blue-800 to-indigo-900 pt-20 pb-32">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col lg:flex-row items-center">
            <div className="lg:w-1/2 text-center lg:text-left mb-12 lg:mb-0">
              <motion.h1 
                className="text-4xl md:text-5xl font-bold text-white leading-tight"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
              >
                Leading Innovative <br />
                User-centric Banking
              </motion.h1>
              <motion.p 
                className="mt-4 text-xl text-blue-100 max-w-lg mx-auto lg:mx-0"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.1 }}
              >
                Experience the future of banking with personalized solutions 
                designed around your needs.
              </motion.p>
              <motion.div 
                className="mt-8 flex flex-col sm:flex-row space-y-4 sm:space-y-0 sm:space-x-4 justify-center lg:justify-start"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.2 }}
              >
                <Button 
                  variant="primary" 
                  size="lg" 
                  className="bg-white text-blue-700 hover:bg-blue-50"
                  onClick={() => navigate('/signup')}
                >
                  Get Started
                </Button>
                <Button 
                  variant="outline" 
                  size="lg" 
                  className="border-white text-white hover:bg-white/10"
                  onClick={() => navigate('/services')}
                >
                  Explore Services
                </Button>
              </motion.div>
            </div>
            <motion.div 
              className="lg:w-1/2"
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.7 }}
            >
              <img 
                src="https://images.pexels.com/photos/6802049/pexels-photo-6802049.jpeg?auto=compress&cs=tinysrgb&w=800" 
                alt="Banking made simple" 
                className="rounded-xl shadow-2xl max-w-full"
              />
            </motion.div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-gray-900">Why Choose LIU Bank</h2>
            <p className="mt-4 text-xl text-gray-600 max-w-2xl mx-auto">
              We combine innovative technology with personalized service to deliver an exceptional banking experience.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {features.map((feature, index) => (
              <motion.div 
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                <Card elevated hover>
                  <div className="p-2 bg-blue-100 rounded-full w-12 h-12 flex items-center justify-center mb-4">
                    {feature.icon}
                  </div>
                  <h3 className="text-xl font-bold text-gray-900 mb-2">{feature.title}</h3>
                  <p className="text-gray-600">{feature.description}</p>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Banking Services Section */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-gray-900">Our Banking Services</h2>
            <p className="mt-4 text-xl text-gray-600 max-w-2xl mx-auto">
              Comprehensive financial solutions designed for every stage of your life.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              viewport={{ once: true }}
            >
              <Card 
                title="Personal Banking" 
                icon={<Users className="h-6 w-6" />}
                elevated 
                hover 
                onClick={() => navigate('/services/personal')}
                footer={
                  <Button variant="text" className="text-blue-600 p-0">
                    Learn More <ArrowRight className="w-4 h-4 ml-1" />
                  </Button>
                }
              >
                <ul className="space-y-3">
                  <li className="flex items-start">
                    <CheckCircle className="h-5 w-5 text-green-500 mr-2 flex-shrink-0 mt-0.5" />
                    <span>Checking & Savings Accounts</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="h-5 w-5 text-green-500 mr-2 flex-shrink-0 mt-0.5" />
                    <span>Credit & Debit Cards</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="h-5 w-5 text-green-500 mr-2 flex-shrink-0 mt-0.5" />
                    <span>Personal Loans</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="h-5 w-5 text-green-500 mr-2 flex-shrink-0 mt-0.5" />
                    <span>Mobile & Online Banking</span>
                  </li>
                </ul>
              </Card>
            </motion.div>
            
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
              viewport={{ once: true }}
            >
              <Card 
                title="Mortgage & Loans" 
                icon={<Building className="h-6 w-6" />}
                elevated 
                hover 
                onClick={() => navigate('/services/loans')}
                footer={
                  <Button variant="text" className="text-blue-600 p-0">
                    Learn More <ArrowRight className="w-4 h-4 ml-1" />
                  </Button>
                }
              >
                <ul className="space-y-3">
                  <li className="flex items-start">
                    <CheckCircle className="h-5 w-5 text-green-500 mr-2 flex-shrink-0 mt-0.5" />
                    <span>Home Mortgages</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="h-5 w-5 text-green-500 mr-2 flex-shrink-0 mt-0.5" />
                    <span>Home Equity Loans</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="h-5 w-5 text-green-500 mr-2 flex-shrink-0 mt-0.5" />
                    <span>Auto Loans</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="h-5 w-5 text-green-500 mr-2 flex-shrink-0 mt-0.5" />
                    <span>Personal Loans</span>
                  </li>
                </ul>
              </Card>
            </motion.div>
            
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              viewport={{ once: true }}
            >
              <Card 
                title="Investments" 
                icon={<TrendingUp className="h-6 w-6" />}
                elevated 
                hover 
                onClick={() => navigate('/services/investments')}
                footer={
                  <Button variant="text" className="text-blue-600 p-0">
                    Learn More <ArrowRight className="w-4 h-4 ml-1" />
                  </Button>
                }
              >
                <ul className="space-y-3">
                  <li className="flex items-start">
                    <CheckCircle className="h-5 w-5 text-green-500 mr-2 flex-shrink-0 mt-0.5" />
                    <span>Retirement Planning</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="h-5 w-5 text-green-500 mr-2 flex-shrink-0 mt-0.5" />
                    <span>Investment Advisory</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="h-5 w-5 text-green-500 mr-2 flex-shrink-0 mt-0.5" />
                    <span>Wealth Management</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="h-5 w-5 text-green-500 mr-2 flex-shrink-0 mt-0.5" />
                    <span>Stocks & Bonds</span>
                  </li>
                </ul>
              </Card>
            </motion.div>
          </div>
          
          <div className="text-center mt-12">
            <Button 
              variant="primary" 
              size="lg"
              onClick={() => navigate('/services')}
            >
              View All Services
            </Button>
          </div>
        </div>
      </section>

      {/* App Promo Section */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col lg:flex-row items-center">
            <motion.div 
              className="lg:w-1/2 mb-12 lg:mb-0"
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.7 }}
              viewport={{ once: true }}
            >
              <img 
                src="https://images.pexels.com/photos/6347729/pexels-photo-6347729.jpeg?auto=compress&cs=tinysrgb&w=800" 
                alt="Mobile banking app" 
                className="rounded-xl shadow-lg"
              />
            </motion.div>
            <div className="lg:w-1/2 lg:pl-16">
              <motion.h2 
                className="text-3xl font-bold text-gray-900"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
                viewport={{ once: true }}
              >
                Banking at Your Fingertips
              </motion.h2>
              <motion.p 
                className="mt-4 text-xl text-gray-600"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.1 }}
                viewport={{ once: true }}
              >
                Manage your finances anytime, anywhere with our award-winning mobile app.
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
                    <CheckCircle />
                  </div>
                  <div className="ml-3">
                    <h3 className="text-lg font-medium text-gray-900">Secure Transactions</h3>
                    <p className="mt-1 text-gray-600">Conduct transactions with peace of mind knowing your data is protected.</p>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <div className="flex-shrink-0 h-6 w-6 text-blue-600">
                    <CheckCircle />
                  </div>
                  <div className="ml-3">
                    <h3 className="text-lg font-medium text-gray-900">Real-time Alerts</h3>
                    <p className="mt-1 text-gray-600">Stay informed with instant notifications about your account activity.</p>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <div className="flex-shrink-0 h-6 w-6 text-blue-600">
                    <CheckCircle />
                  </div>
                  <div className="ml-3">
                    <h3 className="text-lg font-medium text-gray-900">Easy Money Transfer</h3>
                    <p className="mt-1 text-gray-600">Send money to friends, family, or pay bills with just a few taps.</p>
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
                >
                  Download Our App
                </Button>
              </motion.div>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-gray-900">What Our Customers Say</h2>
            <p className="mt-4 text-xl text-gray-600 max-w-2xl mx-auto">
              Hear from our satisfied customers about their experience with LIU Bank.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <motion.div 
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                <Card elevated>
                  <div className="flex items-center mb-4">
                    <img 
                      src={testimonial.image} 
                      alt={testimonial.name} 
                      className="h-12 w-12 rounded-full mr-4"
                    />
                    <div>
                      <h3 className="text-lg font-medium text-gray-900">{testimonial.name}</h3>
                      <p className="text-gray-600">{testimonial.role}</p>
                    </div>
                  </div>
                  <p className="text-gray-600 italic">"{testimonial.content}"</p>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Call to Action Section */}
      <section className="py-16 bg-blue-700">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.h2 
            className="text-3xl font-bold text-white"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
          >
            Ready to experience modern banking?
          </motion.h2>
          <motion.p 
            className="mt-4 text-xl text-blue-100 max-w-2xl mx-auto"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            viewport={{ once: true }}
          >
            Join thousands of satisfied customers who have made the switch to LIU Bank.
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

export default HomePage;