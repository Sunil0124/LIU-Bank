# LIU Bank (Leading Innovative User-centric Banking)

## Concept & Purpose
LIU Bank is a digital banking platform designed to enhance financial management through secure, intuitive, and technology-driven solutions. By modernizing traditional banking processes, LIU Bank simplifies transactions, offers investment management tools, and delivers personalized financial services to individuals and businesses.

## Mission Statement
**“LIU Bank is committed to transforming digital banking by providing a secure, user-friendly, and innovative platform that enables individuals and businesses to manage their finances with ease. Our goal is to integrate cutting-edge technology into banking services, ensuring efficiency, accessibility, and financial growth.”**

## Development Roadmap

# LIU Bank - Backend API

This repository contains the backend for the LIU Bank application. It is a RESTful API built using:

- **Node.js** (runtime)
- **Express.js** (server framework)
- **Sequelize** (ORM for MySQL)
- **MySQL** (relational database)
- **JWT** (JSON Web Token authentication)
- **bcryptjs** (password hashing)
- **dotenv** (environment configuration)
- **CORS**, **helmet**, and **morgan** for API security, logging, and cross-origin support

The API supports features like user registration/login, account management, transactions, investments, dashboard summaries, and more.

---

## 📦 Features

- ✅ User registration & login with JWT
- ✅ Password hashing with bcryptjs
- ✅ Protected routes using JWT middleware
- ✅ Modular Sequelize models with relations
- ✅ Real-time dashboard endpoints
- ✅ Investment management
- ✅ Transaction operations
- ✅ MySQL RDS compatible
- ✅ Robust folder structure for scalability

---

## 🚀 How to Clone and Run

### ✅ Step 1: Clone the Repository
```bash
git clone https://github.com/LIUSpring2025/SyntaxSquad-SP25.git
cd SyntaxSquad-SP25/SunilGanta/LIUBankBackend
```

### ✅ Step 2: Install Dependencies
```bash
npm install
```

### ✅ Step 3: Set Up the Database
Ensure MySQL is running locally or use a cloud DB like AWS RDS.

#### Create Database:
```sql
CREATE DATABASE liubankdb;
```

---

### ✅ Step 4: Add Environment Variables
Create a `.env` file in the backend root:
```env
PORT=8080
DB_HOST=your_db_host
DB_PORT=3306
DB_USER=your_db_user
DB_PASSWORD=your_db_password
DB_NAME=liubankdb
JWT_SECRET=your_super_secret_jwt_key
```

> Replace placeholders with your actual credentials.

---

### ✅ Step 5: Start the Server
```bash
node server.js
```
Or for auto-reload during development:
```bash
npx nodemon server.js
```

Expected output:
```
✅ Connected to database
🚀 Server is running on port 8080
```

---

## 🔐 Authentication

- Use `/api/users/login` to receive a JWT token.
- Add `Authorization: Bearer <token>` header to access:
  - `/api/dashboard`
  - `/api/accounts`
  - `/api/transactions`
  - `/api/investments`

---

## 🧪 API Testing with Thunder Client / Postman

### Register
```http
POST /api/users/register
Content-Type: application/json

{
  "username": "sunil",
  "email": "sunil@liu.edu",
  "password": "secret123"
}
```

### Login
```http
POST /api/users/login
Content-Type: application/json

{
  "email": "sunil@liu.edu",
  "password": "secret123"
}
```
> Response will include a token.

---

## 📁 Folder Structure
```
LIUBankBackend/
├── app/
│   ├── controllers/      # Route logic handlers
│   ├── models/           # Sequelize models (User, Account, Transaction, etc.)
│   ├── routes/           # Route declarations
│   └── middleware/       # JWT auth middleware
├── config/               # Database config
├── server.js             # Express entry point
├── .env                  # Environment variables (not pushed)
├── package.json
└── README.md
```

---

## 🔧 Tech Stack
- **Node.js**
- **Express.js**
- **Sequelize ORM**
- **MySQL** / **AWS RDS**
- **JWT Authentication**
- **bcryptjs**
- **CORS**, **dotenv**, **helmet**

---

## 👨‍💻 Maintainer
**Sunil Ganta** — MS in Computer Science, Long Island University, Class of 2025

