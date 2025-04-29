# 📋 To-Do App Backend

This is the backend API for a simple to-do list app built with **Node.js**, **Express**, and **MongoDB**.


# 📦 Features

- User registration with validation
- User login with JWT authentication
- Middleware for JSON and task validation
- Add, retrieve, and update user-specific todos


# 🚀 Getting Started

## 1. Clone the repo  
git clone https://github.com/Loupdo/todo-app-backend.git
cd todo-app-backend

## 2. Install dependencies
npm install

## 3. Start the server
node index.js

# ⚙️ API Endpoints

## POST /users
Create a new user
Body: { firstName, lastName, userName, password }

## GET /login
Login with username and password
Query params: ?username=...&password=...
Returns: JWT token

## GET /todos
Get user's todos (requires JWT in Authorization header)

## PATCH /todos
Update user's todos
Body: { todos: [...] }
Requires: JWT in header


# 🔐 Middleware
jsonCheckMiddleware – Ensures JSON input
userMiddleware – Validates Gmail username
taskMiddleware – Limits task length
jwtMiddleware – Protects routes with JWT