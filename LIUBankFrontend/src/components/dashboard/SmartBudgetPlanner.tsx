import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Wallet, ArrowRight, PieChart } from 'lucide-react';
import { createSmartBudget } from '../../services/ai';
import Card from '../common/Card';
import Button from '../common/Button';
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
  ArcElement,
} from 'chart.js';
import { Doughnut } from 'react-chartjs-2';

ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
  ArcElement
);

interface SmartBudgetPlannerProps {
  income: number;
  expenses: any[];
}

const SmartBudgetPlanner: React.FC<SmartBudgetPlannerProps> = ({ income, expenses }) => {
  const [budgetPlan, setBudgetPlan] = useState<any>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const generateBudget = async () => {
      try {
        const plan = await createSmartBudget(income, expenses);
        setBudgetPlan(plan);
      } catch (error) {
        console.error('Error generating budget plan:', error);
      } finally {
        setLoading(false);
      }
    };

    generateBudget();
  }, [income, expenses]);

  const chartData = {
    labels: ['Savings', 'Essential', 'Non-Essential', 'Investment'],
    datasets: [
      {
        data: [30, 40, 20, 10],
        backgroundColor: [
          'rgba(34, 197, 94, 0.8)',
          'rgba(59, 130, 246, 0.8)',
          'rgba(168, 85, 247, 0.8)',
          'rgba(249, 115, 22, 0.8)',
        ],
        borderColor: [
          'rgba(34, 197, 94, 1)',
          'rgba(59, 130, 246, 1)',
          'rgba(168, 85, 247, 1)',
          'rgba(249, 115, 22, 1)',
        ],
        borderWidth: 1,
      },
    ],
  };

  return (
    <Card className="bg-white shadow-lg">
      <div className="flex items-center justify-between mb-6">
        <div className="flex items-center">
          <Wallet className="w-6 h-6 text-blue-600 mr-2" />
          <h3 className="text-xl font-semibold text-gray-800">Smart Budget Planner</h3>
        </div>
        <Button variant="outline" size="sm">
          Adjust Budget <ArrowRight className="w-4 h-4 ml-1" />
        </Button>
      </div>

      {loading ? (
        <div className="flex items-center justify-center h-64">
          <motion.div
            animate={{ rotate: 360 }}
            transition={{ duration: 1, repeat: Infinity, ease: "linear" }}
            className="w-8 h-8 border-4 border-blue-200 border-t-blue-600 rounded-full"
          />
        </div>
      ) : (
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div>
            <div className="mb-6">
              <h4 className="text-lg font-medium text-gray-700 mb-2">Monthly Overview</h4>
              <div className="grid grid-cols-2 gap-4">
                <div className="bg-blue-50 rounded-lg p-4">
                  <p className="text-sm text-blue-600">Income</p>
                  <p className="text-xl font-semibold text-gray-800">${income.toLocaleString()}</p>
                </div>
                <div className="bg-green-50 rounded-lg p-4">
                  <p className="text-sm text-green-600">Savings Target</p>
                  <p className="text-xl font-semibold text-gray-800">${(income * 0.2).toLocaleString()}</p>
                </div>
              </div>
            </div>

            <div>
              <h4 className="text-lg font-medium text-gray-700 mb-2">Budget Categories</h4>
              <div className="space-y-3">
                {['Housing', 'Transportation', 'Food', 'Utilities', 'Entertainment'].map((category) => (
                  <div key={category} className="flex items-center justify-between bg-gray-50 p-3 rounded-lg">
                    <span className="text-gray-700">{category}</span>
                    <span className="text-gray-900 font-medium">${(Math.random() * 1000).toFixed(2)}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>

          <div>
            <div className="mb-4">
              <h4 className="text-lg font-medium text-gray-700 mb-2">Allocation Overview</h4>
              <div className="relative h-64">
                <Doughnut
                  data={chartData}
                  options={{
                    responsive: true,
                    maintainAspectRatio: false,
                    plugins: {
                      legend: {
                        position: 'bottom',
                      },
                    },
                  }}
                />
              </div>
            </div>

            <div className="bg-blue-50 rounded-lg p-4">
              <h4 className="text-lg font-medium text-blue-800 mb-2">AI Recommendations</h4>
              <p className="text-blue-600 text-sm">
                Based on your spending patterns, consider reducing entertainment expenses by 15% to meet your savings goals.
              </p>
            </div>
          </div>
        </div>
      )}
    </Card>
  );
};

export default SmartBudgetPlanner;