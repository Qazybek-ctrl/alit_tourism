# Admin Panel Documentation

## Overview
The admin panel provides comprehensive management tools for the AILT Tourism platform.

## Features

### 1. Dashboard
- **Total Users**: View count of all registered users
- **Tour Bookings**: View count of all tour booking forms
- **Visa Applications**: View count of all visa application forms

### 2. User Management
- View all registered users
- See user details (ID, Name, Phone, Registration Date)
- **Toggle User Roles**: Click on role badge to switch between 'user' and 'admin'
  - Blue badge = Regular user
  - Red badge = Admin user

### 3. Tour Forms Management
- View all tour booking submissions
- Expandable cards showing full form details
- See which user submitted each form
- View tour name, dates, and all booking information

### 4. Visa Forms Management
- View all visa application submissions
- Expandable cards showing full application details
- See which user submitted each application
- View applicant information and visa details

## Access Control

### Backend
- **Middleware**: `AdminRequired()` checks user role
- **Routes**: All admin routes are protected under `/api/admin/*`
- **Database**: User model includes `role` field (default: 'user')

### Frontend
- **Route**: `/admin`
- **Access**: Only users with 'admin' role can access
- **Redirect**: Non-admin users are redirected to home page

## API Endpoints

### Admin Routes (Require admin role)
```
GET  /api/admin/dashboard/stats    - Get dashboard statistics
GET  /api/admin/users               - Get all users
PUT  /api/admin/users/:id/role      - Update user role
GET  /api/admin/forms/guest         - Get all tour booking forms
GET  /api/admin/forms/visa          - Get all visa application forms
```

## Database Migration
After adding the `role` field to the User model, the database will automatically migrate on next server start.

### Manual Role Assignment (if needed)
To manually set a user as admin in the database:
```sql
UPDATE users SET role = 'admin' WHERE id = 1;
```

## Usage

1. **Create Admin User**:
   - Register a new user normally
   - Manually update their role to 'admin' in database
   - Or use the admin panel to promote existing users

2. **Access Admin Panel**:
   - Navigate to `/admin`
   - Login with admin credentials
   - View dashboard and manage users/forms

3. **Manage Users**:
   - Click "Users" tab
   - Click on role badge to toggle between user/admin

4. **View Forms**:
   - Click "Tour Forms" or "Visa Forms" tab
   - Click on any form to expand and view details

## Security Notes
- All admin routes require authentication AND admin role
- Role changes are logged in the database
- Non-admin users receive 403 Forbidden error
