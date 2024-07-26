# JOB FINDER

The Job Portal application is designed to help users find and apply for jobs. Employers can post job listings, and job seekers can browse and apply for these jobs.
## Description

This is a Full stack job App made with MERN Stack, MUI, Datagrid, cookie, etc. It is a Youtube series to teach step by step how to make a full stack App

## Screenshots

### Homepage
![Homepage](screenshots/home.png)

### Admin Dashboard
![Admin Dashboard](screenshots/adminDashboard.png)

### User Dashboard
![User Dashboard](screenshots/userDashboard.png)

## Features

- User and Admin authentication (sign up, login, logout)
- Role-based access (admin, employer, job seeker)
- Post, edit, and delete job listings (employers)
- Browse and search for jobs (job seekers)
- Fliter for jobs based on location, job Categories (job seekers)
- Apply for jobs (job seekers)
- Admin dashboard for managing users and job listings
- User dashboard for job applied

## Technologies Used

- Software Architecture: MVC pattern;
- HOC (High Order Component);
- Admin & user dashboard, pagination, Datagrid, Download in CSV, etc;
- Open & close dashboard sidebar;
- Admin can create jobs, create category, etc.
- Dashboard Analytic;
- Responsive App / MUI: Material UI;
- User can see his jobs history in user dashboard;
- Log In & Register Form with Formik and Yup for validation;
- Modern authentication system with JWT and cookie;
- Search job, filter jobs by category and location;
- Apply for a job in the single page job, if the user is already log In;
- Toast notification;

## Installation

### Prerequisites

- Node.js
- npm or yarn
- MongoDB

### Backend Setup

1. Clone the repository:

    ```bash
    git clone https://github.com/shrinivask007/Job_finder_mern.git
    cd Job_finder_mern
    ```

2. Install backend dependencies:

    ```bash
    cd backend
    npm install
    ```

3. Create a `.env` file in the `backend` directory and add the following environment variables:

    ```plaintext
    PORT = 9000 
    DATABASE = "mongodb+srv://user:user@jobportal.geagwjb.mongodb.net/"
    JWT_SECRET=dcewriunc837nn83nbcv
    ```

4. Start the backend server:

    ```bash
    npm start
    ```

### Frontend Setup

1. Navigate to the frontend directory and install dependencies:

    ```bash
    cd ../frontend
    npm install
    ```
2. Start the frontend development server:

    ```bash
    npm start
    ```
## Usage

1. Open your browser and navigate to `http://localhost:3000`.
2. Sign up as a new user or log in with existing credentials.
3. Depending on your role (admin, employer, job seeker), you will have access to different features.

## Contributing

1. Fork the repository
2. Create a new branch (`git checkout -b feature-branch`)
3. Commit your changes (`git commit -m 'Add some feature'`)
4. Push to the branch (`git push origin feature-branch`)
5. Open a pull request

## License

This project is licensed under the MIT License. See the [LICENSE](LICENSE) file for details.

## Contact

- **Name**: Shrinivassk
- **Email**: shrinivask@example.com
- **GitHub**: [shrinivask007](https://github.com/shrinivask007)
