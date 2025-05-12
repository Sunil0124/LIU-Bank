import OpenAI from 'openai';
import * as tf from '@tensorflow/tfjs';

const openai = new OpenAI({
  apiKey: process.env.REACT_APP_OPENAI_API_KEY,
  dangerouslyAllowBrowser: true
});

// Fraud Detection Model
export const fraudDetectionModel = async (transaction: any) => {
  const model = await tf.loadLayersModel('/models/fraud-detection.json');
  const prediction = model.predict(tf.tensor([
    transaction.amount,
    transaction.location,
    transaction.time,
    transaction.merchantType
  ]));
  return prediction;
};

// Spending Pattern Analysis
export const analyzeSpendingPatterns = async (transactions: any[]) => {
  const response = await openai.chat.completions.create({
    model: 'gpt-3.5-turbo',
    messages: [
      {
        role: 'system',
        content: 'You are a financial analyst providing insights on spending patterns.'
      },
      {
        role: 'user',
        content: `Analyze these transactions and provide insights: ${JSON.stringify(transactions)}`
      }
    ],
    temperature: 0.7
  });

  return response.choices[0].message.content;
};

// Investment Recommendations
export const getInvestmentRecommendations = async (userProfile: any) => {
  const response = await openai.chat.completions.create({
    model: 'gpt-4',
    messages: [
      {
        role: 'system',
        content: 'You are a financial advisor specializing in investment recommendations.'
      },
      {
        role: 'user',
        content: `Based on this user profile, provide investment recommendations:
                 Risk tolerance: ${userProfile.riskTolerance}
                 Investment goals: ${userProfile.goals}
                 Current portfolio: ${JSON.stringify(userProfile.portfolio)}`
      }
    ],
    temperature: 0.7
  });

  return response.choices[0].message.content;
};

// Smart Budgeting Assistant
export const createSmartBudget = async (income: number, expenses: any[]) => {
  const response = await openai.chat.completions.create({
    model: 'gpt-4',
    messages: [
      {
        role: 'system',
        content: 'You are a financial planning assistant specializing in budgeting.'
      },
      {
        role: 'user',
        content: `Create a smart budget plan based on:
                 Monthly income: ${income}
                 Current expenses: ${JSON.stringify(expenses)}`
      }
    ],
    temperature: 0.7
  });

  return response.choices[0].message.content;
};

// Loan Eligibility Predictor
export const predictLoanEligibility = async (userData: any) => {
  const model = await tf.loadLayersModel('/models/loan-eligibility.json');
  const prediction = model.predict(tf.tensor([
    userData.creditScore,
    userData.income,
    userData.debtToIncome,
    userData.employmentYears
  ]));
  return prediction;
};

export const generateFinancialInsights = async (data: any) => {
  const response = await openai.chat.completions.create({
    model: 'gpt-4',
    messages: [
      {
        role: 'system',
        content: 'You are a financial analyst providing personalized insights.'
      },
      {
        role: 'user',
        content: `Analyze this financial data and provide insights:
                 ${JSON.stringify(data)}`
      }
    ],
    temperature: 0.7
  });

  return response.choices[0].message.content;
};