import axios from 'axios';
import { AuthResponse, LoginCredentials, SignupCredentials, Account, Transaction, Card, Appointment, Investment, Loan } from '../types';

// Create axios instance
const api = axios.create({
  baseURL: process.env.REACT_APP_API_URL,
  headers: {
    'Content-Type': 'application/json',
  },
});

// Add request interceptor to attach auth token
api.interceptors.request.use(
  (config) => {
    const token = localStorage.getItem('token');
    if (token) {
      config.headers.Authorization = `Bearer ${token}`;
    }
    return config;
  },
  (error) => Promise.reject(error)
);

// Add response interceptor for error handling
api.interceptors.response.use(
  (response) => response,
  (error) => {
    if (error.response) {
      switch (error.response.status) {
        case 401:
          localStorage.removeItem('token');
          window.location.href = '/login';
          break;
        case 404:
          console.error('Resource not found:', error.response.data);
          break;
        case 500:
          console.error('Server error:', error.response.data);
          break;
        default:
          console.error('API error:', error.response.data);
      }
    } else if (error.request) {
      console.error('Network error:', error.request);
    } else {
      console.error('Request error:', error.message);
    }
    return Promise.reject(error);
  }
);

// Mock data for development
const mockData = {
  accounts: [
    { id: 1, accountNumber: '******7890', accountType: 'Checking', balance: 5432.10, currency: 'USD' },
    { id: 2, accountNumber: '******4567', accountType: 'Savings', balance: 12345.67, currency: 'USD' },
    { id: 3, accountNumber: '******1234', accountType: 'Investment', balance: 50000.00, currency: 'USD' }
  ],
  transactions: [
    { id: 1, date: '2024-03-15', description: 'Grocery Store', amount: 56.78, type: 'debit' as const, category: 'Shopping' },
    { id: 2, date: '2024-03-14', description: 'Salary Deposit', amount: 3500.00, type: 'credit' as const, category: 'Income' },
    { id: 3, date: '2024-03-13', description: 'Restaurant', amount: 89.25, type: 'debit' as const, category: 'Dining' }
  ],
  appointments: [
    { id: 1, date: '2024-03-20', time: '10:00', branchLocation: 'Downtown', purpose: 'Investment Planning', status: 'scheduled' as const },
    { id: 2, date: '2024-03-22', time: '14:30', branchLocation: 'Midtown', purpose: 'Mortgage Consultation', status: 'scheduled' as const }
  ]
};

// Authentication Services
export const authService = {
  login: async (credentials: LoginCredentials): Promise<AuthResponse> => {
    try {
      const response = await api.post<AuthResponse>('/api/auth/login', credentials);
      localStorage.setItem('token', response.data.token);
      return response.data;
    } catch (error) {
      throw new Error('Login failed. Please check your credentials and try again.');
    }
  },
  
  signup: async (userData: SignupCredentials): Promise<AuthResponse> => {
    try {
      const response = await api.post<AuthResponse>('/api/auth/signup', userData);
      localStorage.setItem('token', response.data.token);
      return response.data;
    } catch (error) {
      throw new Error('Registration failed. Please check your information and try again.');
    }
  },
  
  logout: (): void => {
    localStorage.removeItem('token');
  },
  
  checkAuth: async (): Promise<AuthResponse> => {
    try {
      const response = await api.get<AuthResponse>('/api/auth/profile');
      return response.data;
    } catch (error) {
      throw new Error('Authentication check failed');
    }
  }
};

// Account Services
export const accountService = {
  getAccounts: async (): Promise<Account[]> => {
    try {
      const response = await api.get<Account[]>('/accounts');
      return response.data;
    } catch (error) {
      console.warn('Using mock account data');
      return mockData.accounts;
    }
  },
  
  getTransactions: async (accountId: number): Promise<Transaction[]> => {
    try {
      const response = await api.get<Transaction[]>(`/accounts/${accountId}/transactions`);
      return response.data;
    } catch (error) {
      console.warn('Using mock transaction data');
      return mockData.transactions;
    }
  }
};

// Appointment Services
export const appointmentService = {
  getAppointments: async (): Promise<Appointment[]> => {
    try {
      const response = await api.get<Appointment[]>('/appointments');
      return response.data;
    } catch (error) {
      console.warn('Using mock appointment data');
      return mockData.appointments;
    }
  },
  
  createAppointment: async (appointment: Omit<Appointment, 'id' | 'status'>): Promise<Appointment> => {
    try {
      const response = await api.post<Appointment>('/appointments', appointment);
      return response.data;
    } catch (error) {
      throw new Error('Failed to create appointment');
    }
  },
  
  updateAppointment: async (id: number, data: Partial<Appointment>): Promise<Appointment> => {
    try {
      const response = await api.patch<Appointment>(`/appointments/${id}`, data);
      return response.data;
    } catch (error) {
      throw new Error('Failed to update appointment');
    }
  },
  
  cancelAppointment: async (id: number): Promise<void> => {
    try {
      await api.delete(`/appointments/${id}`);
    } catch (error) {
      throw new Error('Failed to cancel appointment');
    }
  }
};

export default api;