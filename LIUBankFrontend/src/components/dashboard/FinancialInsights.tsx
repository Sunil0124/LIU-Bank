import React, { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import { TrendingUp, AlertTriangle, PieChart, DollarSign } from 'lucide-react';
import { generateFinancialInsights } from '../../services/ai';
import Card from '../common/Card';

interface FinancialInsightsProps {
  transactions: any[];
  accounts: any[];
}

const FinancialInsights: React.FC<FinancialInsightsProps> = ({ transactions, accounts }) => {
  const [insights, setInsights] = useState<string | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchInsights = async () => {
      try {
        const data = {
          transactions: transactions.slice(-30), // Last 30 transactions
          accountBalances: accounts.map(acc => ({
            type: acc.accountType,
            balance: acc.balance
          }))
        };
        
        const insightData = await generateFinancialInsights(data);
        setInsights(insightData);
      } catch (error) {
        console.error('Error generating insights:', error);
      } finally {
        setLoading(false);
      }
    };

    fetchInsights();
  }, [transactions, accounts]);

  return (
    <Card className="bg-gradient-to-br from-indigo-900 to-blue-800 text-white">
      <div className="flex items-center mb-4">
        <TrendingUp className="w-6 h-6 mr-2" />
        <h3 className="text-xl font-semibold">AI Financial Insights</h3>
      </div>
      
      {loading ? (
        <div className="flex items-center justify-center h-32">
          <motion.div
            animate={{ rotate: 360 }}
            transition={{ duration: 1, repeat: Infinity, ease: "linear" }}
            className="w-8 h-8 border-4 border-blue-200 border-t-white rounded-full"
          />
        </div>
      ) : (
        <div className="space-y-4">
          {insights && (
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
            >
              <p className="text-blue-100">{insights}</p>
            </motion.div>
          )}
          
          <div className="grid grid-cols-3 gap-4 mt-4">
            <div className="bg-white/10 rounded-lg p-4">
              <PieChart className="w-6 h-6 mb-2" />
              <h4 className="font-medium">Spending Analysis</h4>
              <p className="text-sm text-blue-100">View detailed breakdown</p>
            </div>
            
            <div className="bg-white/10 rounded-lg p-4">
              <DollarSign className="w-6 h-6 mb-2" />
              <h4 className="font-medium">Budget Status</h4>
              <p className="text-sm text-blue-100">Track your goals</p>
            </div>
            
            <div className="bg-white/10 rounded-lg p-4">
              <AlertTriangle className="w-6 h-6 mb-2" />
              <h4 className="font-medium">Risk Analysis</h4>
              <p className="text-sm text-blue-100">View potential risks</p>
            </div>
          </div>
        </div>
      )}
    </Card>
  );
};

export default FinancialInsights;