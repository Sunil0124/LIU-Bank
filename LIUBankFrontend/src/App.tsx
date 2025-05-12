import React from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import { AuthProvider } from './context/AuthContext';

// Pages
import HomePage from './pages/home/HomePage';
import LoginPage from './pages/auth/LoginPage';
import SignupPage from './pages/auth/SignupPage';
import CheckingPage from './pages/dashboard/CheckingPage';
import SavingsPage from './pages/dashboard/SavingsPage';
import InvestmentsPage from './pages/dashboard/InvestmentsPage';
import TransactionsPage from './pages/dashboard/TransactionsPage';
import AccountDetailsPage from './pages/dashboard/AccountDetailsPage';
import DashboardPage from './pages/dashboard/DashboardPage';
import ServicesPage from './pages/services/ServicesPage';
import AppointmentPage from './pages/appointments/AppointmentPage';

// Protected Route Component
const ProtectedRoute: React.FC<{ element: React.ReactElement }> = ({ element }) => {
  const token = localStorage.getItem('token');
  return token ? element : <Navigate to="/login" replace />;
};

function App() {
  return (
    <AuthProvider>
      <Router future={{ v7_startTransition: true, v7_relativeSplatPath: true }}>
        <Routes>
          {/* Public Routes */}
          <Route path="/" element={<HomePage />} />
          <Route path="/login" element={<LoginPage />} />
          <Route path="/signup" element={<SignupPage />} />
          <Route path="/services" element={<ServicesPage />} />
          <Route path="/appointments" element={<AppointmentPage />} />

          {/* Protected Routes */}
          <Route path="/dashboard" element={<ProtectedRoute element={<DashboardPage />} />} />
          <Route path="/dashboard/checking" element={<ProtectedRoute element={<CheckingPage />} />} />
          <Route path="/dashboard/savings" element={<ProtectedRoute element={<SavingsPage />} />} />
          <Route path="/dashboard/investments" element={<ProtectedRoute element={<InvestmentsPage />} />} />
          <Route path="/transactions" element={<ProtectedRoute element={<TransactionsPage />} />} />
          <Route path="/dashboard/account/:id" element={<ProtectedRoute element={<AccountDetailsPage />} />} />

          {/* Fallback Route */}
          <Route path="*" element={<Navigate to="/" replace />} />
        </Routes>
      </Router>
    </AuthProvider>
  );
}

export default App;
