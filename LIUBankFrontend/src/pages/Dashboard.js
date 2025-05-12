import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Line } from 'react-chartjs-2';
import AppointmentForm from '../components/AppointmentForm';
import AIAssistant from '../components/AIAssistant';
import { accountAPI } from '../services/api';

const Dashboard = () => {
  const [accounts, setAccounts] = useState([]);
  const [transactions, setTransactions] = useState([]);
  const [showAppointmentForm, setShowAppointmentForm] = useState(false);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const [accountsRes, transactionsRes] = await Promise.all([
          accountAPI.getAccounts(),
          accountAPI.getTransactions()
        ]);
        setAccounts(accountsRes.data);
        setTransactions(transactionsRes.data);
      } catch (error) {
        console.error('Error fetching dashboard data:', error);
      }
    };

    fetchData();
  }, []);

  const chartData = {
    labels: transactions.slice(-7).map(t => new Date(t.date).toLocaleDateString()),
    datasets: [{
      label: 'Balance History',
      data: transactions.slice(-7).map(t => t.balance),
      borderColor: 'rgb(59, 130, 246)',
      tension: 0.1
    }]
  };

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
      {/* Account Summary */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
        {accounts.map((account) => (
          <motion.div
            key={account.id}
            whileHover={{ y: -5 }}
            className="bg-white rounded-lg shadow p-6"
          >
            <h3 className="text-lg font-medium text-gray-900">{account.type}</h3>
            <p className="text-3xl font-bold text-gray-900 mt-2">
              ${account.balance.toLocaleString()}
            </p>
            <p className="text-sm text-gray-500 mt-1">Account: **** {account.number.slice(-4)}</p>
          </motion.div>
        ))}
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        {/* Transaction Chart */}
        <div className="lg:col-span-2 bg-white rounded-lg shadow p-6">
          <h3 className="text-lg font-medium text-gray-900 mb-4">Balance History</h3>
          <Line data={chartData} options={{ responsive: true }} />
        </div>

        {/* Quick Actions */}
        <div className="bg-white rounded-lg shadow p-6">
          <h3 className="text-lg font-medium text-gray-900 mb-4">Quick Actions</h3>
          <div className="space-y-4">
            <button
              onClick={() => setShowAppointmentForm(true)}
              className="w-full py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-blue-600 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500"
            >
              Book Appointment
            </button>
            {/* Add more quick actions here */}
          </div>
        </div>
      </div>

      {/* Recent Transactions */}
      <div className="mt-8 bg-white rounded-lg shadow">
        <div className="px-6 py-4 border-b border-gray-200">
          <h3 className="text-lg font-medium text-gray-900">Recent Transactions</h3>
        </div>
        <div className="divide-y divide-gray-200">
          {transactions.slice(0, 5).map((transaction) => (
            <div key={transaction.id} className="px-6 py-4 flex items-center justify-between">
              <div>
                <p className="text-sm font-medium text-gray-900">{transaction.description}</p>
                <p className="text-sm text-gray-500">{new Date(transaction.date).toLocaleDateString()}</p>
              </div>
              <p className={`text-sm font-medium ${
                transaction.type === 'credit' ? 'text-green-600' : 'text-red-600'
              }`}>
                {transaction.type === 'credit' ? '+' : '-'}${transaction.amount.toLocaleString()}
              </p>
            </div>
          ))}
        </div>
      </div>

      {/* Appointment Form Modal */}
      {showAppointmentForm && (
        <div className="fixed inset-0 bg-gray-500 bg-opacity-75 flex items-center justify-center">
          <div className="bg-white rounded-lg p-6 max-w-md w-full">
            <h2 className="text-xl font-semibold mb-4">Book an Appointment</h2>
            <AppointmentForm
              onSuccess={() => setShowAppointmentForm(false)}
            />
            <button
              onClick={() => setShowAppointmentForm(false)}
              className="mt-4 w-full py-2 px-4 border border-gray-300 rounded-md shadow-sm text-sm font-medium text-gray-700 hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500"
            >
              Cancel
            </button>
          </div>
        </div>
      )}

      {/* AI Assistant */}
      <AIAssistant />
    </div>
  );
};

export default Dashboard;