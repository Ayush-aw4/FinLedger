<h1 align="center">🏦 FinLedger</h1>

<p align="center">
A secure banking ledger backend built with <b>Node.js</b>, <b>Express.js</b>, and <b>MongoDB</b> that simulates real-world banking operations using <b>ledger-based accounting</b>, JWT authentication, and secure transaction processing.
</p>

<p align="center">

![Node.js](https://img.shields.io/badge/Node.js-339933?style=for-the-badge&logo=node.js&logoColor=white)
![Express.js](https://img.shields.io/badge/Express.js-000000?style=for-the-badge&logo=express&logoColor=white)
![MongoDB](https://img.shields.io/badge/MongoDB-47A248?style=for-the-badge&logo=mongodb&logoColor=white)
![JWT](https://img.shields.io/badge/JWT-Authentication-red?style=for-the-badge)
![bcrypt](https://img.shields.io/badge/Bcrypt-Security-blue?style=for-the-badge)
![License](https://img.shields.io/badge/License-MIT-green?style=for-the-badge)

</p>

---

# 📖 About

**FinLedger** is a banking backend that follows the **Ledger Accounting System**, where every financial transaction is recorded instead of directly modifying account balances.

The system provides secure authentication, account management, money transfers, transaction history, balance calculation using MongoDB Aggregation, email notifications, and idempotent transaction processing.

It is designed to demonstrate how modern banking backends maintain data consistency, security, and auditability.

---

# ✨ Features

- 🔐 JWT Authentication
- 🔒 Password Hashing using bcrypt
- 🍪 Cookie-Based Authentication
- 📧 Email Notifications with Nodemailer
- 👤 User Registration & Login
- 💳 Multiple Bank Accounts
- 💸 Secure Money Transfers
- 📒 Ledger-Based Accounting
- 📊 Balance Calculation using Aggregation Pipeline
- 🔁 Idempotent Transactions
- 🚫 JWT Blacklisting (Logout)
- 🛡 Protected Routes
- ☁ MongoDB Atlas Integration
- 🏗 MVC Architecture

---

# 🛠 Tech Stack

| Technology | Purpose |
|------------|---------|
| Node.js | Runtime Environment |
| Express.js | REST API Framework |
| MongoDB Atlas | Database |
| Mongoose | ODM |
| JWT | Authentication |
| bcrypt | Password Hashing |
| Cookie Parser | Cookie Management |
| Nodemailer | Email Notifications |
| dotenv | Environment Variables |

---

# 📂 Project Structure

```text
FinLedger/
│
├── src/
│
│   ├── config/
│   │
│   ├── controllers/
│   │   ├── account.controller.js
│   │   ├── auth.controller.js
│   │   └── transaction.controller.js
│   │
│   ├── middleware/
│   │   └── auth.middleware.js
│   │
│   ├── models/
│   │   ├── account.model.js
│   │   ├── blacklist.model.js
│   │   ├── ledger.model.js
│   │   ├── transaction.model.js
│   │   └── user.model.js
│   │
│   ├── routes/
│   │   ├── account.routes.js
│   │   ├── auth.routes.js
│   │   └── transaction.routes.js
│   │
│   ├── services/
│   │
│   └── app.js
│
├── .env
├── package.json
├── package-lock.json
├── server.js
└── .gitignore
```

---

# ⚙️ Installation

## Clone Repository

```bash
git clone https://github.com/Ayush-aw4/FinLedger.git
```

```bash
cd FinLedger
```

---

## Install Dependencies

```bash
npm install
```

---

## Configure Environment Variables

Create a `.env` file in the root directory.

```env
PORT=3000

MONGO_URI=your_mongodb_connection_string

JWT_SECRET=your_secret_key

EMAIL=your_email@gmail.com

PASSWORD=your_app_password
```

---

## Run Development Server

```bash
npm run dev
```

or

```bash
node server.js
```

Server runs on

```
http://localhost:3000
```

---

# 🏛 Architecture

```text
                    Client
              (Frontend/Postman)
                      │
                      ▼
              Express REST APIs
                      │
      ┌───────────────┼────────────────┐
      ▼               ▼                ▼
 Authentication    Accounts      Transactions
      │               │                │
      └───────────────┼────────────────┘
                      ▼
            Authentication Middleware
                      │
                      ▼
                MongoDB Database
                      │
     ┌────────────────┼────────────────┐
     ▼                ▼                ▼
   Users          Accounts        Transactions
                                       │
                                       ▼
                                   Ledger
```

---

# 🔄 Authentication Flow

```text
Register
   │
   ▼
Validate Input
   │
   ▼
Hash Password
   │
   ▼
Store User
   │
   ▼
Send Welcome Email
   │
   ▼
Login
   │
   ▼
Generate JWT
   │
   ▼
Store JWT in Cookie
   │
   ▼
Access Protected APIs
```

---

# 💸 Transaction Flow

```text
User Initiates Transfer
          │
          ▼
Authenticate User
          │
          ▼
Validate Accounts
          │
          ▼
Check Idempotency
          │
          ▼
Create Transaction
          │
          ▼
Generate Ledger Entry
          │
          ▼
Calculate Updated Balance
          │
          ▼
Send Email Notification
          │
          ▼
Return Success Response
```

---

# 🗄 Database Models

## 👤 User

- Name
- Email
- Password

---

## 💳 Account

- User
- Account Number
- Account Status

---

## 💸 Transaction

- Sender
- Receiver
- Amount
- Status
- Transaction Reference

---

## 📒 Ledger

- Account ID
- Credit
- Debit
- Transaction ID

---

## 🚫 Blacklist

Stores invalid JWT tokens after logout.

---

# 📡 REST API

## Authentication

| Method | Endpoint | Description |
|---------|----------|-------------|
| POST | `/api/auth/register` | Register a new user |
| POST | `/api/auth/login` | Login user |
| POST | `/api/auth/logout` | Logout user |

---

## Accounts

| Method | Endpoint | Description |
|---------|----------|-------------|
| POST | `/api/accounts` | Create a bank account |
| GET | `/api/accounts` | Get all user accounts |
| GET | `/api/accounts/balance/:accountId` | Get account balance |

---

## Transactions

| Method | Endpoint | Description |
|---------|----------|-------------|
| POST | `/api/transactions` | Transfer money |
| POST | `/api/transactions/system/initial-funds` | Add initial funds to an account |

---

# 🔐 Security

- JWT Authentication
- HTTP-only Cookies
- Password Hashing using bcrypt
- Protected Routes
- Token Blacklisting
- Environment Variables
- Idempotent Transaction Validation

---

# 📊 Why Ledger Accounting?

Instead of storing balances directly inside an account, every transaction is recorded inside a **Ledger**.

Example:

| Transaction | Credit | Debit |
|-------------|-------:|------:|
| Initial Deposit | ₹10,000 | - |
| Purchase | - | ₹2,000 |
| Salary | ₹15,000 | - |

Current Balance

```
Credits − Debits

= ₹25,000 − ₹2,000

= ₹23,000
```

### Advantages

- Complete audit trail
- Easy reconciliation
- No balance inconsistency
- Banking-grade accounting
- Accurate transaction history

---

# 🧪 API Testing

All APIs can be tested using **Postman**.

Example Flow

1. Register User
2. Login
3. Create Account
4. Add Initial Funds
5. Transfer Money
6. Check Account Balance
7. Logout

---

# 🚀 Future Improvements

- Docker Support
- Swagger Documentation
- Redis Caching
- Unit Testing
- CI/CD Pipeline
- Refresh Tokens
- Two-Factor Authentication
- Audit Logs
- Rate Limiting
- Multi-Currency Support

---

# 🤝 Contributing

Contributions are welcome!

1. Fork the repository
2. Create your feature branch

```bash
git checkout -b feature/new-feature
```

3. Commit your changes

```bash
git commit -m "Add new feature"
```

4. Push to the branch

```bash
git push origin feature/new-feature
```

5. Open a Pull Request

---

# 📜 License

This project is licensed under the **MIT License**.

---

# 👨‍💻 Author

**Ayush Awchar**

- GitHub: https://github.com/your-github-username
- LinkedIn: https://linkedin.com/in/your-linkedin

---

<div align="center">

### ⭐ If you found this project useful, consider giving it a star!

**Built with ❤️ using Node.js, Express.js & MongoDB**

</div>
