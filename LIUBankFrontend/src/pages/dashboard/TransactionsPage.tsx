// src/pages/dashboard/TransactionsPage.tsx

import React, { useState, useEffect } from 'react';
import PageLayout from '../../components/layout/PageLayout';
import Card from '../../components/common/Card';
import { Transaction } from '../../types';
import { format } from 'date-fns';
import { accountService } from '../../services/api';

const TransactionsPage: React.FC = () => {
  const [transactions, setTransactions] = useState<Transaction[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchTransactions = async () => {
      try {
        const accounts = await accountService.getAccounts();
        const allTransactions = await Promise.all(
          accounts.map(account => accountService.getTransactions(account.id))
        );
        setTransactions(allTransactions.flat());
      } catch (error) {
        console.error('Error fetching transactions:', error);
      } finally {
        setLoading(false);
      }
    };

    fetchTransactions();
  }, []);

  if (loading) return <div>Loading...</div>;

  return (
    <PageLayout>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <Card>
          <h1 className="text-2xl font-bold mb-6">All Transactions</h1>
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

export default TransactionsPage;
