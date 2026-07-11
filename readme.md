# Restaurant Reservation Management System

A full-stack Restaurant Reservation Management System built with the MERN stack. The application allows customers to reserve tables while enabling administrators to manage reservations and restaurant tables efficiently.

---

# Tech Stack

### Frontend

- React
- React Router
- Tailwind CSS
- Axios

### Backend

- Node.js
- Express.js
- MongoDB
- Mongoose
- JWT Authentication
- Cookie Parser

---

# Features

## Customer

- User Registration & Login
- Secure JWT Authentication
- Book a Table
- View Personal Reservations
- Cancel Reservation

## Administrator

- View All Reservations
- Filter Reservations by Date
- Update Reservation Details
- Cancel Any Reservation
- Manage Restaurant Tables

---

# Setup Instructions

## 1. Clone the Repository

```bash
git clone <repository-url>
```

```bash
cd restaurant-reservation-system
```

---

## 2. Backend Setup

```bash
cd backend
```

Install dependencies

```bash
npm install
```

Create a `.env` file inside the server directory.

```env
PORT=5000

MONGODB_URI=your_mongodb_connection_string

JWT_SECRET=your_jwt_secret

JWT_EXPIRE=7d

CLIENT_URL=http://localhost:5173
```

Run the backend

```bash
npm run dev
```

---

## 3. Seed Restaurant Tables

```bash
npm run seed
```

This will create predefined restaurant tables with different seating capacities.

---

## 4. Frontend Setup

```bash
cd frontend
```

Install dependencies

```bash
npm install
```

Run frontend

```bash
npm run dev
```

---

# Assumptions Made

- The application manages a single restaurant.
- Restaurant tables are predefined using a seed script.
- Each table has a fixed seating capacity.
- Reservations are assigned automatically by the backend.
- One reservation can only occupy one table.
- Time is stored in 24-hour (`HH:mm`) format.
- Reservation status can be:
  - Booked
  - Cancelled
  - Completed (optional enhancement)

- Cancelled reservations are retained for history instead of being permanently deleted.

---

# Reservation & Availability Logic

The reservation system automatically assigns the most suitable table.

### Reservation Flow

1. Customer submits:
   - Reservation Date
   - Start Time
   - End Time
   - Number of Guests

2. The backend searches for:
   - Active tables only
   - Tables with capacity greater than or equal to the requested number of guests

3. Tables are sorted by seating capacity in ascending order.

4. For each table, the system checks whether another reservation already exists for the requested date and overlapping time slot.

5. The first available table is assigned to the reservation.

6. If no suitable table is available, the reservation request is rejected with an appropriate error message.

### Conflict Detection

A reservation is considered conflicting when:

```
Existing Reservation

Start -------- End

New Reservation

Start -------- End
```

The backend checks overlap using:

```
Existing Start < New End
AND
Existing End > New Start
```

If both conditions are true, the table is considered unavailable for that time slot.

This prevents double booking while allowing adjacent reservations (e.g., 6:00–7:00 followed by 7:00–8:00).

---

# Role-Based Access Control

## Customer

Customers can:

- Register/Login
- Create Reservations
- View Their Own Reservations
- Cancel Their Own Reservations

Customers cannot:

- Access admin routes
- View other users' reservations
- Manage restaurant tables

---

## Administrator

Administrators can:

- View All Reservations
- Filter Reservations by Date
- Update Any Reservation
- Cancel Any Reservation
- Create Tables
- Update Tables
- Deactivate Tables

All administrative routes are protected using JWT authentication and role-based authorization.

---

# Known Limitations

- Supports only a single restaurant.
- One reservation is assigned to only one table.
- No email notifications.
- No payment integration.
- No real-time availability updates.
- Reservation completion is handled manually (if implemented).
- Table combinations for large groups are not supported.

---

# Areas for Improvement

With additional development time, the following enhancements could be added:

- Real-time table availability using WebSockets.
- Email confirmations and reminders.
- Automatic reservation completion after end time.
- Restaurant analytics dashboard.
- Multiple restaurant support.
- Table combination support for large groups.
- Online payments.
- Reservation history and reporting.
- Advanced search, filtering, and pagination.

---

# Project Structure

```
backend/
  app.js
  server.js
  package.json
  controllers/        # Route handlers
  middlewares/        # Auth, error handling, role-based access
  models/             # Database schemas (User, Table, Reservation)
  routes/             # API endpoints
  utils/              # Helper functions, token generation, seed script

frontend/
  src/
    components/       # Reusable UI components
    context/          # React Context for auth state
    features/         # Feature-specific hooks and API calls
      admin/          # Admin-specific features
      auth/           # Authentication features
      reservation/    # Reservation features
    pages/            # Route pages
    utils/            # Utility functions
```

---

# Authentication

Authentication is implemented using JWT stored in secure HTTP-only cookies.

Protected routes require a valid JWT token, while administrative endpoints additionally verify the user's role before granting access.

---

# Author

**Nishant Yadav**

MERN Stack Developer
