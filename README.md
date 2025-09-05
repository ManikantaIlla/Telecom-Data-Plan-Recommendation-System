# Telecom Data Plan Recommendation System (MVP Monorepo)

Role-based, full-stack skeleton using:
- **Frontend:** React + Tailwind CSS
- **Backend:** Node.js + Express + MongoDB (Mongoose)
- **ML Service:** Python (scikit-learn, Surprise)
- **BI Dashboard:** Streamlit + Plotly

## Apps
- `frontend/` — React SPA with role-based dashboards (Customer, Analyst, Admin).
- `backend/` — Express API with JWT auth, RBAC middleware, MongoDB models.
- `ml/` — Python microservice for collaborative filtering recommendations.
- `dashboards/` — Streamlit analytics dashboard for Analysts/Admins.
- `infra/` — Dev scripts (env examples, Postman collection, Docker compose stub).

## Quick Start (Dev)
1. Install **Node 18+**, **Python 3.10+**, and **MongoDB** (or use Docker).
2. Copy env: `cp infra/env/backend.env.example backend/.env` and edit values.
3. Back end: `cd backend && npm i && npm run dev`
4. Front end: `cd frontend && npm i && npm run dev`
5. ML: `cd ml && python -m venv .venv && . .venv/bin/activate && pip install -r requirements.txt && python app.py`
6. Streamlit: `cd dashboards && pip install -r requirements.txt && streamlit run app.py`

> This is a minimal scaffold designed for extension.
