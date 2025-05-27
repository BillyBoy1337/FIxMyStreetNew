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
- **`/GetStats`** – Retorna estatísticas agregadas para o dashboard (acessado pelo painel de admin)..

### **Cosmos DB & Container Creation**
- A criação da base de dados e dos containers é feita automaticamente via script (deploy.sh), usando a Azure CLI.
- Caso não existam, os recursos serão criados de raiz.
- **`Porquê?** Garante que o ambiente está sempre pronto e compatível com o backend Go.

### **Azure Blob Storage for File Uploads**
- Armazena de forma segura as imagens e documentos anexados às reclamações.
- Permite acesso via URL pública controlada, e suporta escalabilidade nativa da Azure.

---
## Deployment & Setup
### 🏗 **Como correr a aplicação na Azure (Cloud-Native)**
1. **Clone the repository**:
   ```bash
   git clone https://github.com/BillyBoy1337/FIxMyStreetNew
cd FIxMyStreetNew
   ```
2. **Dar permissões de execução aos scripts:** to `deploy.sh`:
   ```bash
  chmod +x deploy.sh login.sh submit_complaints.sh
   ```
3. **Executar o script de deploy automático:**:
   - Para **produção**:
     ```bash
     ./deploy.sh 1 ou  ./deploy.sh
     ```  
 Este script faz:
-Build do backend em Docker
-Push para Azure Container Registry
-Deploy da imagem no Azure Container Instance
-Deploy do frontend no Azure Static Web App

4. **(Opcional) Gerar reclamações fictícias:**:
   - **Executar login.sh para obter um token JWT:

** para `login.sh`:
     ```bash
     chmod +x login.sh
     ```
   - Copiar o token JWT exibido no terminal (começa com ey...)
e colar no ficheiro submit_complaints.sh, substituindo o valor da linha Bearer Token
     
   - **Dar permissões ao script submit_complaints.sh:** to `submit_complaints.sh`:
     ```bash
     chmod +x submit_complaints.sh
     ```
   - Executar o script para criar reclamações fictícias:
     ```bash
     ./submit_complaints.sh
     ```

---
## User Roles & Permissions
| Papel  | Permissões |
|--------|------------------------------------------------------------------|
| **Admin** | Gerir todas as reclamações, mudar estado e aceder ao dashboard. |
| **User** | Criar, editar e acompanhar suas próprias reclamações. |

### **Admin Credenciais**
- **Email**: `Ak@dev.com`
- **Password**: `Ak@123`

---

### **📁 Estrutura do Projeto**
- **frontend/** – – React/Vite com UI e navegação
- **server/** –– Backend em Go com REST API, Cosmos DB e uploads
- **scripts/** –– Scripts para login automático e inserção de dados falsos
- **deploy.sh** –– Script Bash para deploy completo
- **UI_DEMO/** –– Screenshots e demonstração da aplicação

---

## 🔍 Logging e Monitoramento
- **PLogrus** – logging estruturado no backend
- **PViper** – gestão de configs via .yaml
- **Application Insights** – logs e rastreamento em tempo real na Azure

---

## UI & Demo  
A pasta UI_DEMO/ contém capturas e walkthrough da aplicação:

- **Dashboard com estatísticas**
- **Submissão de reclamação em 3 passos**
- **Interface administrativa**

---
## Futuras Melhorias
- **Notificações push em tempo real**
- **Análise inteligente de imagens com IA**
- **Moderação automatizada de conteúdo**

---
## Conclusão
FixMyStreet é uma solução moderna, escalável e cloud-native, com deploy automatizado, arquitetura modular e serviços Azure. Ideal para contextos académicos ou municípios reais, oferece uma experiência sólida de desenvolvimento e operação na nuvem.

---
