# System Diagrams

## 1. Project Architecture Diagram

Angular Shell (Top Menu)
│
├─ React Portfolio Pages
│ ├─ About Me
│ ├─ Projects
│ └─ Contact
│
└─ Next.js Blog
Backend (NestJS)
├─ REST APIs
└─ MongoDB / SQL

## 2. Microfrontend Communication Flow
User Browser
│
├─ Angular Shell ──> Loads React microfrontend components via Module Federation
│
└─ Next.js blog ──> SSR pages fetched via API

Backend
├─ REST API for projects
├─ REST API for blogs
└─ REST API for contact messages

## 3. CI/CD Pipeline Diagram
GitHub Repo
│
├─ GitHub Actions
│ ├─ Run Unit Tests
│ ├─ Build Apps
│ └─ Deploy to Server / Cloud
│
Deployment
├─ Docker / Kubernetes
└─ Nx affected builds for optimized deployment

