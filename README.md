# Employee Management System

This project is a comprehensive Employee Management System built with React, providing a user-friendly interface for managing employees' information, contracts, and work-related tasks.

## Live Link
[Employee Management System Live](https://glittering-frangipane-69d820.netlify.app/)
[Employee Management System Server](https://github.com/developerbadsa/task-management-platform-Server.git)

## Project Overview

1. **Unique Design and User Interface:**
   - The system features a unique and visually appealing design that enhances user experience.
   - The layout includes a banner/slider showcasing the company's success, service details, and testimonials for a professional touch.

2. **Authentication and User Roles:**
   - Implemented secure email and password-based authentication using Firebase.
   - Users can register with role selection (Employee, HR, Admin), ensuring distinct access levels.
   - User-friendly error messages for registration and login enhance the overall user experience.

3. **Dashboard for Different Roles:**
   - **HR Dashboard:**
     - Access to an employee list with verification status.
     - Ability to verify employees and pay them with a convenient modal interface.
     - Detailed employee information page, including a dynamic chart for salary tracking.
     - Grid View and Table View for HR

   - **Employee Dashboard:**
     - Access to a payment history table, sorted by month, displaying salary details.
     - A work sheet page with a form for submitting tasks, hours worked, and date.

   - **Admin Dashboard:**
     - View all verified employees in a table, with options to make an employee HR or terminate their employment.
     - Admin-exclusive features include making an employee HR and firing them.

4. **Contact Us Page:**
   - A dedicated "Contact Us" page with a dummy company address and a user-friendly form for visitors to send their opinions and all will be save to database.

5. **Technologies Used:**
   - React for the frontend, incorporating various packages such as Recharts for charts, Firebase for authentication, and Axios for API requests.
   - Tailwind CSS for a responsive and modern UI, with @heroicons/react and @material-tailwind/react for additional UI components.
   - Vite for a fast and efficient development experience.