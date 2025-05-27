# FixMyStreet - Pothole Complaint Management System

## Overview
FixMyStreet é uma aplicação web moderna desenvolvida com React (Frontend) e Golang (Backend) que permite aos cidadãos reportar problemas urbanos, como buracos ou lixo, acompanhar o estado das suas queixas e visualizar estatísticas agregadas num painel interativo.

A solução está totalmente implementada em serviços cloud-native da Azure, com separação de responsabilidades, segurança HTTPS e escalabilidade integrada:

Arquitetura totalmente cloud-native na Azure:

- **Frontend**: Azure Static Web Apps
- **Backend**: Azure Container Instance (via Docker)
- **Base de dados**: Azure Cosmos DB
- **Armazenamento**: Azure Blob Storage
- **Segurança HTTPS**: Cloudflare Proxy
- **Estatísticas**: Azure Functions

---
## Features
### 🌟 **User Features**

- **Submissão de reclamações com imagem, localização e categoria**
- **Edição e consulta de reclamações submetidas**
- **Visualização de estado em tempo real**
- **Autenticação segura via JWT**

### 🛠 **Admin Features**

- **Gerir Reclamações**: Atualizar o estado das reclamações e monitorizar as submissões dos utilizadores.
- **Gestão de Utilizadores**: Visualizar todos os utilizadores e as suas reclamações.
- **Painel de Estatísticas**: Acompanhar tendências de reclamações e gerar relatórios.

### 🚀 **Tech Stack**

- **Frontend**: React, Vite, Tailwind CSS
- **Backend**: Golang (Gin), Docker
- **Base de Dados**: Azure Cosmos DB
- **Armazenamento**: Azure Blob Storage
- **Contêineres**: Azure Container Registry + Container Instance
- **Segurança**: JWT + Cloudflare (proxy HTTPS)
- **Monitoramento**: Azure Application Insights
- **CI/CD**: GitHub Actions + Azure Static Web Apps


---
## Azure Function Usage
### **Endpoints**
- **`/Test`** – Checks if the application is running.
- **`/GetStats`** – Retrieves aggregated complaint statistics.

### **Cosmos DB & Container Creation**
- The script automatically checks for the existence of the Cosmos DB and container.
- If not found, it creates them to ensure smooth deployment.
- **Why?** This automation ensures the database is always available and configured correctly for new deployments.

### **Azure Blob Storage for File Uploads**
- Used to store complaint-related images and documents securely.
- Scalable, cost-efficient storage with access control for uploaded files.

---
## Deployment & Setup
### 🏗 **How to Run the Application**
1. **Clone the repository**:
   ```bash
   git clone https://github.com/your-repo/FixMyStreet.git
   cd FixMyStreet
   ```
2. **Grant execution permissions** to `deploy.sh`:
   ```bash
   chmod +x deploy.sh
   ```
3. **Run the deploy script**:
   - For **production**:
     ```bash
     ./deploy.sh 1
     ```
   - For **local development**:
     ```bash
     ./deploy.sh
     ```
4. **(Optional) Generate dummy complaints**:
   - **Provide permission** to `login.sh`:
     ```bash
     chmod +x login.sh
     ```
   - Run `login.sh` to extract a token (update email/password if needed).
   - Copy the token and paste it into `submit_complaints.sh`.
   - **Provide permission** to `submit_complaints.sh`:
     ```bash
     chmod +x submit_complaints.sh
     ```
   - Run the script to create dummy complaints:
     ```bash
     ./submit_complaints.sh
     ```

---
## User Roles & Permissions
| Role  | Actions |
|--------|------------------------------------------------------------------|
| **Admin** | View all complaints, update statuses, manage users, and edit complaints. |
| **User** | Create, edit, and delete their own complaints. View insights and stats. |

### **Admin Credentials**
- **Email**: `Ak@dev.com`
- **Password**: `Ak@123`

---
## Error Handling & Logging
- **Logrus** for structured logging to track application errors.
- **Viper** for configuration management to handle environment settings.

---
Here’s a revised version of your request:

## UI & Demo  
To explore the user interface, navigate to the `UI_DEMO` directory and open `Demo.md`.  
This file contains screenshots showcasing various UI components, including:  
- The **dashboard**, displaying complaint statistics and insights.  
- The **complaint submission process**, detailing step-by-step entry fields.  
- The **admin panel**, where administrators can review and manage complaints.  


---
## Future Enhancements
- **Push Notifications**: Alert users about complaint updates.
- **AI-Based Analysis**: Predict pothole severity from images.
- **Automated Moderation**: AI-driven content moderation for complaint submissions.

---
## Conclusion
FixMyStreet is an advanced, user-friendly pothole complaint management solution designed for scalability and efficiency. With **Azure services**, **Docker**, and **modern web technologies**, it ensures seamless complaint tracking and resolution.

---
