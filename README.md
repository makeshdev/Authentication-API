# 🚀 User Authentication API (MVC Pattern)

## 📌 Overview

This project is a user authentication system built using Node.js, Express.js, and MongoDB, following the MVC (Model-View-Controller) pattern. It includes user registration, login, JWT-based authentication, and a protected route for fetching user details.

### 📌Features

- User Registration (with password hashing using bcrypt )
- User Login (with JWT token generation)
- JWT Authentication Middleware (to protect routes)
- User Information Retrieval (protected route)
- MongoDB Integration using Mongoose
- Proper Error Handling & Validation
- Postman Documentation with sample requests and responses

### 🛠️ Installed Packages

1. `express` - Web framework for Node.js
2. `mongoose` - MongoDB ODM for schema-based data modeling
3. `dotenv` - Loads environment variables from .env
4. `bcryptjs` - Hashing passwords securely
5. `jsonwebtoken` - Generates and verifies JWT tokens

### 🔗 API Endpoints

| Method |      Endpoint      |         Description |
| :----- | :----------------: | ------------------: |
| POST   | /api/auth/register | Register a new user |
| POST   |  /api/auth/login   | Login and get a JWT |
| GET    |   /api/auth/user   |       Get user info |

### 🛠️ Testing APIs with Postman

1️⃣ Open Postman and create a new request.

2️⃣ Select request type (POST/GET).

3️⃣ Enter the API URL, e.g., `/api/auth/register`.

4️⃣ Go to the "Body" tab, select raw and choose JSON format.

5️⃣ Add request payload (for login/register).

6️⃣ Click "Send" to see the response.

7️⃣ For protected routes, go to the "Headers" tab and add:

`Key: Authorization
Value: Bearer <JWT_TOKEN>`
