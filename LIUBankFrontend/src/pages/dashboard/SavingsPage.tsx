import React from 'react';
import PageLayout from '../../components/layout/PageLayout';
import Card from '../../components/common/Card';

const SavingsPage: React.FC = () => {
  return (
    <PageLayout>
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <Card>
          <h1 className="text-2xl font-bold mb-4">Savings Account Overview</h1>
          <p className="text-gray-700 mb-2">Account Number: ******4567</p>
          <p className="text-2xl font-bold text-blue-600 mb-6">$12,345.67</p>

          <h2 className="text-xl font-semibold mb-4">Recent Transactions</h2>
          <ul className="divide-y divide-gray-200">
            <li className="py-3 flex justify-between">
              <span>Interest Credit</span>
              <span className="text-green-600 font-medium">+$15.75</span>
            </li>
            <li className="py-3 flex justify-between">
              <span>Transfer to Checking</span>
              <span className="text-red-600 font-medium">-$200.00</span>
            </li>
            <li className="py-3 flex justify-between">
              <span>Deposit</span>
              <span className="text-green-600 font-medium">+$500.00</span>
            </li>
          </ul>
        </Card>
      </div>
    </PageLayout>
  );
};

export default SavingsPage;
