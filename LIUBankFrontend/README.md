# 💻 LIU Bank Frontend

## Overview
LIU Bank is a secure, user-centric digital banking application offering intuitive financial tools for managing checking/savings accounts, investments, and real-time transactions. The frontend is built with **React**, **TypeScript**, and **Tailwind CSS**, delivering a responsive and interactive experience.

---

## 🚀 Tech Stack

### Frontend Technologies:
- **React 18** – Component-based UI rendering
- **TypeScript** – Type-safe JavaScript
- **React Router v6** – Navigation and protected routes
- **Tailwind CSS** – Utility-first styling
- **Framer Motion** – UI animations and transitions
- **Lucide Icons** – Clean and accessible icon set

### Integration:
- **Axios** – API communication
- **JWT Auth** – Token-based authentication
- **OpenAI** (Optional AI Chat Assistant)
- **Chart.js** (via react-chartjs-2) – Data visualization in account details

---

## 📦 Key Features

### ✅ Authentication
- Signup with validation for account number, SSN, DoB, email, and password
- Login & logout with token stored in localStorage
- Protected routes (Dashboard, Transactions, etc.)

### ✅ Dashboard Overview
- Account summary: Checking, Savings, Investments
- Recent transactions view (debit/credit)
- Quick actions: Book appointments, apply for card, investment options

### ✅ Modular Pages
- `/dashboard` – Personal finance overview
- `/dashboard/account/:id` – Account details + chart view
- `/transactions` – View all transaction history
- `/dashboard/checking` – Checking details page
- `/dashboard/savings` – Savings details page
- `/dashboard/investments` – Investment details
- `/appointments` – Book or view appointments

### ✅ Components
- Navbar with real-time keyword search
- Card, Button, Input components
- Mobile-first responsive layout
- Chart.js line chart for balance history

---

## 📁 Folder Structure
```
LIUBankFrontend/
├── public/
├── src/
│   ├── assets/              # Images, icons
│   ├── components/
│   │   ├── common/          # Shared UI elements (Button, Card)
│   │   ├── dashboard/       # Dashboard-specific components (QuickActions)
│   │   └── layout/          # PageLayout, Navbar
│   ├── context/             # Auth context for JWT and user state
│   ├── pages/
│   │   ├── auth/            # Login, Signup
│   │   ├── dashboard/       # Dashboard, Account, Transactions, etc.
│   │   ├── services/        # Services info
│   │   └── appointments/    # Booking page
│   ├── services/            # Axios API config
│   ├── types/               # TypeScript types
│   ├── App.tsx             # Main routes
│   ├── index.tsx           # App entry
│   └── index.css           # Tailwind styles
└── .env                    # React env variables (optional)
```

---

## 🔐 Protected Routes
All pages under `/dashboard` and `/transactions` are protected using `ProtectedRoute` component. If no token is found, users are redirected to login.

---

## ⚙️ Setup Instructions

### 1. Clone the Repo
```bash
git clone https://github.com/LIUSpring2025/SyntaxSquad-SP25.git
cd SyntaxSquad-SP25/SunilGanta/LIUBankFrontend
```

### 2. Install Dependencies
```bash
npm install
```

### 3. Start the App
```bash
npm start
```
Open [http://localhost:3000](http://localhost:3000) to view in browser.

Ensure the **backend is running on `localhost:8080`** or update `API_BASE_URL` in `services/api.ts`.

---

## 📡 Backend Integration
Make sure the backend server is running from the `LIUBankBackend` folder. The frontend will communicate via RESTful endpoints with JWT-protected headers.

---

## 🧪 Demo Credentials
- Email: `test@liu.edu`
- Password: `Test123!`

---

## 👨‍💻 Maintainer
**Sunil Ganta**  
M.S. Computer Science, Long Island University (2025)

For backend README: [See here](../LIUBankBackend/README.md)

