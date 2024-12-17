# Frontend Project (Next.js)

This project is a **Frontend for an E-Commerce platform** built with **Next.js**. It includes user authentication (signup and login) and separate dashboards for customers and merchants.

## Features

- **Signup & Login**: Allows users to create accounts and authenticate themselves.
- **Customer Dashboard**: Customers can view and update their profile details.
- **Merchant Dashboard**: Merchants can add and manage their stores.

---

## Setup Instructions

1. **Install Dependencies**  
   Run the following command to install the required `node_modules`:

   ```bash
   npm i --force
   ```

2. **Start Development Server**  
   Start the project in development mode:
   ```bash
   npm run dev
   ```
3. **Environment Variables**  
   Make sure to define the backend URL in your .env file by adding the following line:
   ```bash
   NEXT_PUBLIC_API_URL=<backend-url>
   ```
   Replace <backend-url> with your backend's URL.
4. **Build the Project (Optional)**  
   If you want to build the project for production, use the following command:
   ```bash
   npm run build
   ```
5. **Start the Production Server (Optional)**  
   After building, you can start the server in production mode with:
   ```bash
   npm run start
   ```

## User Logic and Signup Process

### **Signup Flow**:

1. **Fields in Signup Form**: The signup process involves the following fields:

   - **Email**: Used as a unique identifier for the user.
   - **Password**: User's chosen password (hashed on the backend).
   - **First Name**: User's first name.
   - **Last Name**: User's last name.
   - **Role**: Defines the user’s role (either `customer` or `merchant`).

   The role field helps determine which dashboard the user will have access to after they log in.

### **Login Flow**:

- The login form includes **Email** and **Password** fields.
- Upon successful login, the backend returns a JWT that must be stored for maintaining the user's session.
- The user is redirected to their respective dashboard based on their role (Customer or Merchant).

### **Admin Login (No Signup from Frontend)**:

- **Admin Credentials**:

  - **Email**: `hassanchaudhary@gmail.com`
  - **Password**: `123456`

  The admin login cannot be created from the frontend. The admin account is pre-configured with the credentials provided above and is used to access an administrative dashboard.

  - **Admin Role**: This role is different from `customer` or `merchant` and should be used to access special admin features.
  - **Important**: Admin users do not go through the signup process via the frontend. The admin account is manually created in the backend.

### **Role-Based Access Control**:

- **Customer Dashboard**: Accessible to users with the role `customer`.
- **Merchant Dashboard**: Accessible to users with the role `merchant`, where they can manage stores.

---

## Pages and Routes

- **`/auth/login`**: The login page where users can log in using their email and password.
- **`/auth/register`**: The registration page for new users to sign up (with fields for email, password, first name, last name, and role).
- **`/dashboard/admin`**: The admin dashboard, which can only be accessed by users with the `admin` role (using pre-configured credentials).
- **`/dashboard/merchant`**: The merchant dashboard, where users with the `merchant` role can manage stores.
- **`/dashboard/customer`**: The customer dashboard, where users with the `customer` role can view their profile and other customer-specific information.

---

## Project Structure

- **Pages**: Contains the page components for routing (e.g., `signup`, `login`, `dashboard`).
- **Components**: Contains reusable components (e.g., buttons, forms).
- **Styles**: Contains custom CSS and styling related to the project.
- **Utils**: Contains utility functions like API calls or authentication helpers.
