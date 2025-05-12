import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import PageLayout from '../../components/layout/PageLayout';
import { Account, Transaction } from '../../types';
import { accountService } from '../../services/api';
import Card from '../../components/common/Card';
import { Line } from 'react-chartjs-2';
import { format } from 'date-fns';

// ✅ Chart.js registration
import {
  Chart as ChartJS,
  LineElement,
  PointElement,
  CategoryScale,
  LinearScale,
  Tooltip,
  Legend,
  Title,
} from 'chart.js';

ChartJS.register(
  LineElement,
  PointElement,
  CategoryScale,
  LinearScale,
  Tooltip,
  Legend,
  Title
);

const AccountDetailsPage: React.FC = () => {
  const { id } = useParams();
  const [account, setAccount] = useState<Account | null>(null);
  const [transactions, setTransactions] = useState<Transaction[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchAccountDetails = async () => {
      try {
        if (id) {
          const accountData = await accountService.getAccounts();
          const account = accountData.find(acc => acc.id === parseInt(id));
          if (account) {
            setAccount(account);
            const transactionData = await accountService.getTransactions(account.id);
            setTransactions(transactionData);
          }
        }
      } catch (error) {
        console.error('Error fetching account details:', error);
      } finally {
        setLoading(false);
      }
    };

    fetchAccountDetails();
  }, [id]);

  if (loading) return <div>Loading...</div>;
  if (!account) return <div>Account not found</div>;

  const chartData = {
    labels: transactions.map(t => format(new Date(t.date), 'MMM dd')),
    datasets: [{
      label: 'Transaction Amounts',
      data: transactions.map(t => t.amount),
      fill: false,
      borderColor: 'rgb(59, 130, 246)',
      backgroundColor: 'rgba(59, 130, 246, 0.5)',
      tension: 0.3
    }]
  };

  const chartOptions = {
    responsive: true,
    plugins: {
      legend: {
        position: 'top' as const
      },
      title: {
        display: true,
        text: 'Account Balance History'
      }
    },
    scales: {
      x: {
        type: 'category' as const,
        title: {
          display: true,
          text: 'Date'
        }
      },
      y: {
        title: {
          display: true,
          text: 'Amount (USD)'
        },
        beginAtZero: true
      }
    }
  };

  return (
    <PageLayout>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <Card>
          <h1 className="text-2xl font-bold mb-4">{account.accountType} Account</h1>
          <p className="text-gray-600">Account Number: {account.accountNumber}</p>
          <p className="text-2xl font-bold mt-4">{account.balance.toLocaleString('en-US', {
            style: 'currency',
            currency: account.currency
          })}</p>
        </Card>

        <div className="mt-8">
          <Card>
            <h2 className="text-xl font-bold mb-4">Balance History</h2>
            <Line data={chartData} options={chartOptions} />
          </Card>
        </div>

        <div className="mt-8">
          <Card>
            <h2 className="text-xl font-bold mb-4">Recent Transactions</h2>
            <div className="divide-y">
              {transactions.map(transaction => (
                <div key={transaction.id} className="py-4 flex justify-between">
                  <div>
                    <p className="font-medium">{transaction.description}</p>
                    <p className="text-sm text-gray-500">{format(new Date(transaction.date), 'PPP')}</p>
                  </div>
                  <p className={`font-medium ${
                    transaction.type === 'credit' ? 'text-green-600' : 'text-red-600'
                  }`}>
                    {transaction.type === 'credit' ? '+' : '-'}
                    {transaction.amount.toLocaleString('en-US', {
                      style: 'currency',
                      currency: account.currency
                    })}
                  </p>
                </div>
              ))}
            </div>
          </Card>
        </div>
      </div>
    </PageLayout>
  );
};

export default AccountDetailsPage;
