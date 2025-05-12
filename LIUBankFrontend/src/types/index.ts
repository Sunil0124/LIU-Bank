export interface User {
  id: number;
  firstName: string;
  lastName: string;
  email: string;
  username: string;
  profileImage?: string;
  terms: boolean;
}

export interface AuthResponse {
  user: User;
  token: string;
}

export interface LoginCredentials {
  username: string;
  password: string;
}

export interface SignupCredentials {
  accountNumber?: string;
  cardNumber?: string;
  applicationNumber?: string;
  ssn: string;
  dateOfBirth: string;
  firstName: string;
  lastName: string;
  email: string;
  username: string;
  password: string;
  confirmPassword: string;
  terms: boolean;
}

export interface Account {
  id: number;
  accountNumber: string;
  accountType: string;
  balance: number;
  currency: string;
}

export interface Transaction {
  id: number;
  date: string;
  description: string;
  amount: number;
  type: 'credit' | 'debit';
  category: string;
}

export interface Card {
  id: number;
  cardNumber: string;
  cardType: string;
  expiryDate: string;
  cardHolderName: string;
  status: 'active' | 'inactive' | 'blocked';
}

export interface Appointment {
  id?: number;
  date: string;
  time: string;
  branchLocation: string;
  purpose: string;
  notes?: string;
  status?: 'scheduled' | 'completed' | 'cancelled';
}

export interface Investment {
  id: number;
  name: string;
  type: string;
  amount: number;
  returnRate: number;
  startDate: string;
  maturityDate?: string;
}

export interface Loan {
  id: number;
  type: string;
  amount: number;
  interestRate: number;
  term: number;
  startDate: string;
  nextPayment: {
    date: string;
    amount: number;
  };
  remainingBalance: number;
}

export interface BankingService {
  id: number;
  title: string;
  description: string;
  icon: string;
  link: string;
}