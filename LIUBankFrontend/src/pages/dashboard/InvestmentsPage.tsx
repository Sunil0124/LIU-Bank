import React, { useEffect, useState } from 'react';
import PageLayout from '../../components/layout/PageLayout';
import Card from '../../components/common/Card';
import { Transaction } from '../../types';
import { accountService } from '../../services/api';
import { format } from 'date-fns';

const InvestmentPage: React.FC = () => {
  const [transactions, setTransactions] = useState<Transaction[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchInvestmentTransactions = async () => {
      try {
        const accounts = await accountService.getAccounts();
        const investmentAccount = accounts.find(acc => acc.accountType === 'Investment');

        if (investmentAccount) {
          const txns = await accountService.getTransactions(investmentAccount.id);
          setTransactions(txns);
        }
      } catch (error) {
        console.error('Error fetching investment transactions:', error);
      } finally {
        setLoading(false);
      }
    };

    fetchInvestmentTransactions();
  }, []);

  if (loading) return <div>Loading...</div>;

  return (
    <PageLayout>
      <div className="max-w-6xl mx-auto py-8 px-4">
        <Card>
          <h1 className="text-2xl font-bold mb-6">Investment Account Transactions</h1>
          <div className="divide-y">
            {transactions.map(txn => (
              <div key={txn.id} className="py-4 flex justify-between items-center">
                <div>
                  <p className="font-medium">{txn.description}</p>
                  <p className="text-sm text-gray-500">{format(new Date(txn.date), 'PPP')}</p>
                  <p className="text-sm text-gray-500">{txn.category}</p>
                </div>
                <p className={`font-medium ${txn.type === 'credit' ? 'text-green-600' : 'text-red-600'}`}>
                  {txn.type === 'credit' ? '+' : '-'}
                  {txn.amount.toLocaleString('en-US', { style: 'currency', currency: 'USD' })}
                </p>
              </div>
            ))}
          </div>
        </Card>
      </div>
    </PageLayout>
  );
};

export default InvestmentPage;
