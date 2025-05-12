import React, { useEffect, useState } from 'react';
import PageLayout from '../../components/layout/PageLayout';
import Card from '../../components/common/Card';
import { Transaction, Account } from '../../types';
import { accountService } from '../../services/api';
import { format } from 'date-fns';

const CheckingPage: React.FC = () => {
  const [transactions, setTransactions] = useState<Transaction[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchTransactions = async () => {
      try {
        const accounts = await accountService.getAccounts();
        const checking = accounts.find(a => a.accountType === 'Checking');

        if (checking) {
          const txns = await accountService.getTransactions(checking.id);
          setTransactions(txns);
        }
      } catch (error) {
        console.error('Error fetching checking transactions:', error);
      } finally {
        setLoading(false);
      }
    };

    fetchTransactions();
  }, []);

  if (loading) {
    return <div>Loading...</div>;
  }

  return (
    <PageLayout>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <Card>
          <h1 className="text-2xl font-bold mb-6">Checking Account Details</h1>
          <div className="divide-y">
            {transactions.map(tx => (
              <div key={tx.id} className="py-4 flex justify-between items-center">
                <div>
                  <p className="font-medium">{tx.description}</p>
                  <p className="text-sm text-gray-500">{format(new Date(tx.date), 'PPP')}</p>
                  <p className="text-sm text-gray-500">{tx.category}</p>
                </div>
                <p className={`font-medium ${tx.type === 'credit' ? 'text-green-600' : 'text-red-600'}`}>
                  {tx.type === 'credit' ? '+' : '-'}
                  {tx.amount.toLocaleString('en-US', {
                    style: 'currency',
                    currency: 'USD'
                  })}
                </p>
              </div>
            ))}
          </div>
        </Card>
      </div>
    </PageLayout>
  );
};

export default CheckingPage;
