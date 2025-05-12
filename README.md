# 🏦 LIU Bank – Secure. Innovative. User-Centric Banking

A full-stack digital banking web application enabling users to securely manage finances, conduct transactions, invest, and track account activities in real-time. Developed as part of an academic capstone project using modern web technologies and deployed on AWS.

![Tech Stack](https://img.shields.io/badge/Stack-FullStack-blue)
![License](https://img.shields.io/badge/License-MIT-green)
![Status](https://img.shields.io/badge/Deployed-Yes-success)

---

## 📄 Executive Summary

**LIU Bank** replicates real-world online banking features:
- Secure login and JWT-based authentication
- Dashboard with real-time balances and activity tracking
- Account and investment management
- Appointment booking system
- Fully deployed on AWS (S3, Elastic Beanstalk, RDS)

---

## 🔹 System Architecture

### 🖥️ Frontend
- **Tech Stack**: React 18, TypeScript, Tailwind CSS, Axios, React Router, Framer Motion
- **Hosting**: AWS S3 (Static Website Hosting)
- **Features**:
  - Modular component structure
  - JWT Auth & protected routes
  - Responsive dashboard UI
  - Appointment booking feature

### 🔧 Backend
- **Tech Stack**: Node.js, Express.js, Sequelize ORM, MySQL, JWT, Bcrypt
- **Hosting**: AWS Elastic Beanstalk
- **Database**: AWS RDS (MySQL)
- **Features**:
  - RESTful APIs
  - Secure user authentication
  - Account and transaction modules
  - Investment tracking

### 🗃️ Database Design
- **Tables**: Users, Accounts, Transactions, Investments
- **Tools**: Sequelize ORM, MySQL Workbench
- **Schema**: See [`ERD.png`](./ERD.png)

---

## 📅 SDLC Phases

### 1️⃣ Requirements Gathering
- Stakeholders: Dev team, end users, academic supervisor
- Documentation:
  - `Website_Planning.docx`
  - `Database_Design.docx`
  - `UML_Diagrams.docx`

### 2️⃣ Planning
- Timeline: 4 Weeks
- Team: 1 Developer
- Tools: GitHub, VS Code, MySQL Workbench, Postman, Thunder Client

### 3️⃣ System Design
- UML Diagrams: Use Case, Sequence, Activity
- ERD: See [`ERD.png`](./ERD.png)
- Folder Structure:

## 🛠️ Setup Instructions

### 🔙 Backend Setup

```bash
git clone https://github.com/Sunil0124/LIU-Bank.git
cd LIU-Bank/LIUBankBackend
npm install

**### Create a .env**
PORT=8080
DB_HOST=cs643db.ccmd6j6rmnku.us-east-1.rds.amazonaws.com
DB_USER=your_db_user
DB_PASSWORD=your_db_password
DB_NAME=liubankdb
JWT_SECRET=your_jwt_secret

### Run Server
node Server.js

**### 🔜 Frontend Setup**
cd ../LIUBankFrontend
npm install
npm start
**Local URL:** http://localhost:3000

**Testing**
**API Testing:** Thunder Client, Postman

**UI Testing:** Responsive behavior, form validation, session handling

**🔐 Sample APIs**
**Method	Endpoint	Description**
POST	/api/users/register	User registration
POST	/api/users/login	User login (JWT)
GET	/api/dashboard	Authenticated dashboard

**🌐 Deployment
🚀 Frontend (React + S3)**
bash
Copy
Edit
npm run build
# Upload build/ to S3 bucket liubank-frontend-s3
# Enable static website hosting in AWS S3
**⚙️ Backend (Node.js + EB)**
Zip backend code

Deploy via AWS Elastic Beanstalk using Node.js 22 platform

Monitor through EB Console

**📋 Project Review**
✅ Peer code reviews via GitHub

✅ Feedback from professor and TA

✅ Issues tracked using GitHub Projects & Issues

**🔮 Future Enhancements**
AI-powered chatbot using OpenAI API

Real-time notifications using WebSockets

Admin dashboard for transaction analytics

🔍** Key Features Summary**
**Feature	Frontend	Backend**
JWT Authentication	✅	✅
User Dashboard	✅	✅
Account CRUD	✅	✅
Investments Module	✅	✅
Appointment Booking	✅	❌
Protected Routes	✅	✅
Cloud Deployment	AWS S3	EB + RDS


**Database Host:** cs643db.ccmd6j6rmnku.us-east-1.rds.amazonaws.com

**S3 Bucket:** liubank-frontend-s3

**EB Env:** liubank-backend-env

👨‍💻 Maintainer
Sunil Ganta
M.S. Computer Science, Long Island University (2025)

