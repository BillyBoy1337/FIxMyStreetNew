# FixMyStreet - Detailed Documentation

## Table of Contents
1. **Introduction**
2. **Features & User Roles**
3. **Technical Architecture**
4. **Deployment Guide**
5. **Error Handling & Security**
6. **Future Enhancements**

---

# 1. Introduction

## Overview
FixMyStreet is a **pothole complaint management system** that allows users to register complaints about potholes, track their status, and analyze complaint statistics. The application is designed to be **user-friendly, scalable, and secure**, leveraging Azure services for data storage and file management.

## Objectives
- Provide a seamless complaint filing system.
- Enable real-time tracking of complaint statuses.
- Offer an analytics dashboard for insights.
- Ensure secure authentication and user role management.
- Automate deployment using **Docker and Azure services**.

## Technology Stack
- **Frontend**: React, Vite, Material Tailwind CSS
- **Backend**: Golang
- **Database**: Azure Cosmos DB
- **Storage**: Azure Blob Storage
- **Containerization**: Docker
- **Configuration Management**: Viper
- **Logging**: Logrus
- **Authentication**: JWT

---

# 2. Features & User Roles

## Features
### 🌟 **User Features**
- **Dashboard**: View complaint statistics categorized by **status and village**.
- **Complaint Management**: Users can **create, edit, and delete complaints**.
- **Image Uploads**: Upload supporting evidence for complaints using **Azure Blob Storage**.
- **Authentication**: Secure login using **JWT-based authentication**.

### 🛠 **Admin Features**
- **Manage Complaints**: View all complaints and update their statuses.
- **User Management**: Monitor users and their submissions.
- **Insights Dashboard**: Gain analytics on complaint trends.
- **Enhanced Security**: Only admins can update complaint statuses.

## User Roles
| Role  | Actions |
|--------|------------------------------------------------------------------|
| **Admin** | Can view all complaints, update statuses, manage users, and edit complaints. |
| **User** | Can create, edit, and delete their own complaints. Can view complaint insights. |

### **Admin Credentials**
- **Email**: `Ak@dev.com`
- **Password**: `Ak@123`

---

# 3. Technical Architecture

## System Design
FixMyStreet is designed as a **distributed system** with a **microservices-based backend**. Below is a high-level overview of its architecture:

### **Backend Services**
- **API Gateway**: Manages incoming requests.
- **Complaint Service**: Handles CRUD operations for complaints.
- **User Service**: Manages authentication and user profiles.
- **Admin Service**: Provides elevated privileges to admins.
- **File Service**: Manages complaint-related file uploads to **Azure Blob Storage**.

### **Azure Services Used**
1. **Cosmos DB**
   - NoSQL database for storing complaints and user details.
   - Automatically created if it doesn’t exist.
2. **Blob Storage**
   - Used for storing uploaded complaint images securely.
   - Allows efficient file retrieval with **access control**.
3. **Azure Functions**
   - **`/Test`** - Checks if the backend is running.
   - **`/GetStats`** - Fetches aggregated complaint statistics.

---

# 4. Deployment Guide

## Prerequisites
- **Azure Account** with access to **Cosmos DB** and **Blob Storage**.
- **Docker installed** on the deployment server.
- **Golang and Node.js installed** for backend and frontend setup.

## Steps to Deploy
### **1. Clone the Repository**
```bash
git clone https://github.com/your-repo/FixMyStreet.git
cd FixMyStreet
```

### **2. Provide Execution Permission to Deployment Scripts**
```bash
chmod +x deploy.sh
chmod +x login.sh
chmod +x submit_complaints.sh
```

### **3. Run the Deployment Script**
- **For Production**:
  ```bash
  ./deploy.sh 1
  ```
- **For Local Development**:
  ```bash
  ./deploy.sh
  ```

### **4. Generate Dummy Complaints (Optional)**
- Run `login.sh` to extract a token (update email/password if needed).
- Copy the token and paste it into `submit_complaints.sh`.
- Run the script to create dummy complaints:
  ```bash
  ./submit_complaints.sh
  ```

---

# 5. Error Handling & Security

## Logging with Logrus
- **Logrus** is used for structured logging to improve debugging and error tracing.
- Logs are categorized based on severity levels (**Info, Warning, Error**).

## Configuration Management with Viper
- **Viper** is used for managing environment configurations efficiently.
- Ensures **secure storage of credentials and API keys**.

## Authentication & Authorization
- **JWT-based authentication** secures API requests.
- User roles are enforced to restrict admin operations.

---

# 6. Future Enhancements

## 🚀 Planned Features
### 1️⃣ **Push Notifications**
- Alert users about complaint status changes.
- Notify admins about high-priority complaints.

### 2️⃣ **AI-Based Pothole Analysis**
- Use **Machine Learning** to analyze uploaded pothole images.
- Predict severity and urgency based on **AI models**.

### 3️⃣ **Automated Moderation**
- AI-driven **content moderation** for complaints.
- Flagging inappropriate or duplicate complaints.

### 4️⃣ **Multi-Tenant Support**
- Expand the system for multiple cities or organizations.
- Custom dashboards for different authorities.

---

## Conclusion
FixMyStreet is an **end-to-end complaint management solution**, combining modern technologies to streamline **pothole reporting and resolution**. Designed for scalability and ease of use, it provides **powerful insights**, **automated deployment**, and **secure authentication** to ensure a **seamless user experience**.

For more details, visit the live deployment: **[http://4.213.63.10/](http://4.213.63.10/)**.

