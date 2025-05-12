import React, { useEffect, useState } from 'react';
import { Navigate, useNavigate } from 'react-router-dom';
import { useAuth } from '../../context/AuthContext';
import PageLayout from '../../components/layout/PageLayout';
import Card from '../../components/common/Card';
import Button from '../../components/common/Button';
import { Account, Transaction } from '../../types';
import { accountService } from '../../services/api';
import { ArrowRight, Wallet, BanknoteIcon, TrendingUp, Calendar, Bell } from 'lucide-react';
import { motion } from 'framer-motion';
import QuickActions from '../../components/dashboard/QuickActions';


const DashboardPage: React.FC = () => {
  const { user, isAuthenticated, isLoading } = useAuth();
  const navigate = useNavigate();
  const [accounts, setAccounts] = useState<Account[]>([]);
  const [recentTransactions, setRecentTransactions] = useState<Transaction[]>([]);
  const [isLoadingData, setIsLoadingData] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const mockAccounts: Account[] = [
          { id: 1, accountNumber: '******7890', accountType: 'Checking', balance: 5432.10, currency: 'USD' },
          { id: 2, accountNumber: '******4567', accountType: 'Savings', balance: 12345.67, currency: 'USD' },
          { id: 3, accountNumber: '******1234', accountType: 'Investment', balance: 50000.00, currency: 'USD' }
        ];

        const mockTransactions: Transaction[] = [
          { id: 1, date: '2023-05-01', description: 'Grocery Store', amount: 56.78, type: 'debit', category: 'Shopping' },
          { id: 2, date: '2023-05-02', description: 'Salary Deposit', amount: 3500.00, type: 'credit', category: 'Income' },
          { id: 3, date: '2023-05-03', description: 'Restaurant Payment', amount: 89.25, type: 'debit', category: 'Dining' },
          { id: 4, date: '2023-05-04', description: 'Utility Bill', amount: 120.50, type: 'debit', category: 'Bills' },
          { id: 5, date: '2023-05-05', description: 'Online Shopping', amount: 250.00, type: 'debit', category: 'Shopping' }
        ];

        setAccounts(mockAccounts);
        setRecentTransactions(mockTransactions);
      } catch (error) {
        console.error('Error fetching account data:', error);
      } finally {
        setIsLoadingData(false);
      }
    };

    if (isAuthenticated) {
      fetchData();
    }
  }, [isAuthenticated]);

  if (!isAuthenticated && !isLoading) {
    return <Navigate to="/login" />;
  }

  const formatCurrency = (amount: number, currency: string) => {
    return new Intl.NumberFormat('en-US', {
      style: 'currency',
      currency: currency
    }).format(amount);
  };

  const formatDate = (dateString: string) => {
    const date = new Date(dateString);
    return new Intl.DateTimeFormat('en-US', {
      year: 'numeric',
      month: 'short',
      day: 'numeric'
    }).format(date);
  };

  return (
    <PageLayout>
      <div className="bg-gradient-to-b from-blue-900 to-blue-800 pt-12 pb-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row md:items-end justify-between">
            <div>
              <h1 className="text-3xl font-bold text-white">
                Welcome back, {user?.firstName}
              </h1>
              <p className="mt-1 text-blue-100">Your financial overview</p>
            </div>
            <div className="mt-4 md:mt-0 flex items-center space-x-4">
              <button className="text-white relative">
                <Bell className="w-6 h-6" />
                <span className="absolute -top-1 -right-1 h-4 w-4 bg-red-500 rounded-full text-[10px] flex items-center justify-center">
                  3
                </span>
              </button>
              <Button variant="outline" className="bg-white/10 border-white/20 text-white hover:bg-white/20">
                <Calendar className="w-4 h-4 mr-2" />
                Book Appointment
              </Button>
            </div>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 -mt-16">
        {/* Accounts Section */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
          {accounts.map((account) => (
            <motion.div 
              key={account.id}
              whileHover={{ y: -5 }}
              transition={{ type: 'spring', stiffness: 300 }}
            >
              <Card elevated className="bg-white/80 backdrop-blur-lg">
                <div className="flex justify-between items-start">
                  <div>
                    <p className="text-gray-500 text-sm font-medium">{account.accountType}</p>
                    <p className="text-xs text-gray-400 mt-1">{account.accountNumber}</p>
                    <h3 className="text-2xl font-bold text-gray-800 mt-4">
                      {formatCurrency(account.balance, account.currency)}
                    </h3>
                    <p className="text-xs text-gray-500 mt-1">Available Balance</p>
                  </div>
                  <div className="p-3 bg-blue-50 rounded-lg">
                    {account.accountType === 'Checking' ? (
                      <Wallet className="w-5 h-5 text-blue-600" />
                    ) : account.accountType === 'Savings' ? (
                      <BanknoteIcon className="w-5 h-5 text-blue-600" />
                    ) : (
                      <TrendingUp className="w-5 h-5 text-blue-600" />
                    )}
                  </div>
                </div>
                <div className="mt-6">
                <Button
                  variant="outline"
                  size="sm"
                  fullWidth
                  onClick={() => navigate(`/dashboard/account/${account.id}`)}
>
  View Details <ArrowRight className="w-4 h-4 ml-1" />
</Button>
                </div>
              </Card>
            </motion.div>
          ))}
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Recent Transactions */}
          <div className="lg:col-span-2">
            <Card className="bg-white/80 backdrop-blur-lg">
              <div className="flex justify-between items-center mb-6">
                <h2 className="text-xl font-semibold text-gray-800">Recent Transactions</h2>
                <Button variant="text" size="sm" onClick={() => navigate('/transactions')}>
                  View All <ArrowRight className="w-4 h-4 ml-1" />
                </Button>
              </div>

              <div className="space-y-4">
                {recentTransactions.map((transaction) => (
                  <div key={transaction.id} className="flex items-center justify-between p-3 hover:bg-gray-50 rounded-lg transition-colors">
                    <div className="flex items-center">
                      <div className={`w-10 h-10 rounded-full flex items-center justify-center ${
                        transaction.type === 'credit' ? 'bg-green-100 text-green-600' : 'bg-red-100 text-red-600'
                      }`}>
                        {transaction.type === 'credit' ? '+' : '-'}
                      </div>
                      <div className="ml-4">
                        <p className="font-medium text-gray-800">{transaction.description}</p>
                        <p className="text-xs text-gray-500">{formatDate(transaction.date)} • {transaction.category}</p>
                      </div>
                    </div>
                    <div className={`font-semibold ${
                      transaction.type === 'credit' ? 'text-green-600' : 'text-red-600'
                    }`}>
                      {transaction.type === 'credit' ? '+' : '-'}
                      {formatCurrency(transaction.amount, 'USD')}
                    </div>
                  </div>
                ))}
              </div>
            </Card>
          </div>

          {/* Quick Actions */}
          <div className="lg:col-span-1">
            <QuickActions />
          </div>
        </div>
      </div>
    </PageLayout>
  );
};

export default DashboardPage;
