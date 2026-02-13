# Job Portal with Integrated Certificate Verification System

A full-stack web application that provides a comprehensive Job Portal platform with an integrated Certificate Verification System. The platform is designed using modular architecture to ensure scalability, maintainability, and seamless feature integration.

## Project Overview

This repository consists of two interconnected systems :

 __Job Portal__ – The primary application that manages job postings, candidate profiles, and employer interactions.

 __Certificate Verification System__ – A secondary project integrated into the main platform.

Users can access the Certificate Verification module directly from the Certificates section in the navigation bar, providing a unified and smooth user experience.

# Core Features
## Job Portal

* User registration & authentication
* Job posting & management
* Candidate profile management
* Job application tracking
* Employer & candidate dashboards

## Certificate Verification

* Secure certificate validation
* Verification workflow
* Integrated UI within Job Portal
* Accessible via Certificates option in task bar

# Installation Guide
Follow the steps below to set up the project locally.

### Prerequisites
Ensure you have:
* Node.js (v16 or higher recommended)
* npm or yarn
* MongoDB (Local installation or MongoDB Atlas)

## 1. Clone the Repository
 Write the following using own username and repository name in terminal :
 
  git clone https://github.com/your-username/your-repository-name.git
  cd your-repository-name

## 2. Backend Setup
Navigate to backend directory in terminal :
  cd backend
  npm install

  ### Create Environment File
    Inside the backend folder, create a .env file :

    PORT=3001
    MONGO_URI=your_mongodb_connection_string
    JWT_SECRET=your_secret_key

  ### Start Backend Server
  In terminal run any one of the following :
     
  __npm start__ 
  __npm run dev__

  __Backend will run on :__
    http://localhost:3001

## 3. Frontend Setup
Open a new terminal and run the following in the terminal :
  cd frontend
  npm install
  npm run dev

  __Frontend will typically run on :__
    http://localhost:5173

# Running the Application
1. Open browser and navigate to:
    http://localhost:5173
2. Register or login.
3. Use the navigation bar.
4. Click on Certificates in the task bar to access the integrated Certificate Verification system.

# Integration Strategy

The Job Portal acts as the core platform.
The Certificate Verification System is embedded as a feature module.
It is accessed through the Certificates navigation option.
Backend services support both modules under a unified API structure.

This ensures:
Modular scalability
Clean architecture
Centralized authentication & database management

