# ConfigBridge — ERP Implementation Delivery Hub

**Live:** [coming soon]

ImplTrack simulates and tracks an end-to-end ERP package implementation — from requirements mapping through go-live readiness. Select any ERP module and business process, and the tool generates a full delivery analysis: configuration decisions with T-codes, test scenarios with defect logging, a deployment checklist, and implementation risk assessment — backed by live exchange rates and Fed Funds Rate data relevant to SAP FI configuration.

## What Each Tab Shows

### Overview
Implementation status summary, readiness score, key delivery metrics (requirements mapped, test pass rate, config decisions, checklist completion), and risk register with mitigations.

### Requirements
Full requirements-to-configuration mapping table — each requirement linked to its SAP config object, priority, and mapping status.

### Configuration
Configuration decision cards — each showing the config area, the decision made, the relevant SAP T-code, and the rationale behind it.

### Test Coverage
Test scenario log across Unit, Integration, and UAT phases — with pass/fail status and defect descriptions where applicable.

### Go-Live Checklist
Deployment readiness checklist across Data Migration, Integration, Security, Training, and Cutover — with status and owner tracking.

### Live Market Data
Real-time exchange rates (Frankfurter API) and US Federal Funds Rate (FRED) — mapped directly to their SAP FI configuration relevance (OB08, TCURR, FIBF T-codes).

## Stack

- Vanilla HTML/CSS/JS
- Groq AI (`llama-3.1-8b-instant`) via serverless proxy
- Frankfurter API — live exchange rates (free, no key)
- FRED API — US Federal Funds Rate (free key)
- Deployed on Vercel
