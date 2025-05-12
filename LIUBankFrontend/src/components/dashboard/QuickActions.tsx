import React from 'react';
import { useNavigate } from 'react-router-dom';
import { Calendar, CreditCard, BanknoteIcon, TrendingUp, ArrowRight } from 'lucide-react';
import Card from '../common/Card';
import Button from '../common/Button';

const QuickActions: React.FC = () => {
  const navigate = useNavigate();

  const actions = [
    {
      title: 'Book Appointment',
      description: 'Schedule a meeting with our financial advisors',
      icon: <Calendar className="w-5 h-5" />,
      action: () => navigate('/appointments'),
      primary: true
    },
    {
      title: 'Apply for Card',
      description: 'Explore our credit card options',
      icon: <CreditCard className="w-5 h-5" />,
      action: () => navigate('/services/cards')
    },
    {
      title: 'Get a Loan',
      description: 'Check your loan eligibility',
      icon: <BanknoteIcon className="w-5 h-5" />,
      action: () => navigate('/services/loans')
    },
    {
      title: 'Investments',
      description: 'Start your investment journey',
      icon: <TrendingUp className="w-5 h-5" />,
      action: () => navigate('/services/investments')
    }
  ];

  return (
    <Card className="bg-white shadow-lg">
      <div className="flex justify-between items-center mb-6">
        <h2 className="text-xl font-semibold text-gray-800">Quick Actions</h2>
      </div>
      
      <div className="grid grid-cols-1 gap-4">
        {actions.map((action, index) => (
          <Button
            key={index}
            variant={action.primary ? 'primary' : 'outline'}
            className="w-full justify-start p-4 text-left"
            onClick={action.action}
          >
            <div className="flex items-center">
              <div className={`p-2 rounded-lg ${
                action.primary ? 'bg-white/20' : 'bg-blue-50'
              } mr-4`}>
                {action.icon}
              </div>
              <div>
                <h3 className="font-medium">{action.title}</h3>
                <p className="text-sm text-gray-500">{action.description}</p>
              </div>
              <ArrowRight className="w-5 h-5 ml-auto" />
            </div>
          </Button>
        ))}
      </div>
    </Card>
  );
};

export default QuickActions;