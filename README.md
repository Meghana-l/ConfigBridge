# ConfigBridge — ERP Implementation Delivery Hub

**Live:** [config-bridge-72uaixklk-meghanalnswamydr-5532s-projects.vercel.app](https://config-bridge-72uaixklk-meghanalnswamydr-5532s-projects.vercel.app)

ConfigBridge tracks end-to-end ERP package implementations — from business requirements through go-live readiness. Select any ERP module and business process, configure your project parameters, and generate a full delivery analysis: requirements mapped to configuration objects, configuration decisions with SAP T-codes, test coverage with defect logging, deployment checklist, and implementation risk register — all backed by live exchange rates and Fed Funds Rate data.

---

## How It Works

Select an ERP module (SAP FI, CO, MM, SD, HCM, Workday, Oracle), choose a business process, set your current phase and open defect count, and run the analysis. ConfigBridge generates a complete implementation delivery picture in seconds.

---

## What Each Tab Shows

### Overview
![Overview](screenshots/overview.png)

Implementation status summary with a live readiness score, key delivery metrics — requirements mapped, test pass rate, configuration decisions documented, checklist completion — and a full risk register with severity ratings and mitigation steps.

### Requirements
![Requirements](screenshots/requirements.png)

Full requirements-to-configuration mapping table. Each requirement is linked to its SAP configuration object, priority level, and mapping status — showing exactly how business needs translate into system configuration.

### Configuration
![Configuration](screenshots/configuration.png)

Configuration decision cards for each area of the implementation — showing the decision made, the relevant SAP T-code, and the rationale behind it. Gives consultants and clients a clear audit trail of every configuration choice.

### Test Coverage
![Test Coverage](screenshots/test-coverage.png)

Test scenario log across Unit, Integration, and UAT phases — with pass/fail/pending status and defect descriptions where applicable. Tracks exactly where the implementation stands in the testing cycle.

### Go-Live Checklist
![Go-Live Checklist](screenshots/checklist.png)

Deployment readiness checklist across Data Migration, Integration, Security, Training, Cutover, and Go-Live categories — with completion status and owner assignment (Functional, Technical, or Client). Shows whether the project is actually ready to go live.

### Live Market Data
![Live Market Data](screenshots/market-data.png)

Real-time exchange rates (USD/EUR, GBP, JPY, CAD, CHF, INR, AUD) and the US Federal Funds Rate — mapped directly to their SAP FI configuration relevance. Shows how live market data feeds into finance module setup: currency translation (OB08), parallel currency configuration (OBA7), exchange rate tables (TCURR), and interest calculation (FIBF).

---

## Stack

- Vanilla HTML/CSS/JS — no framework, no build step
- Groq AI (`llama-3.1-8b-instant`) via serverless proxy for live analysis generation
- Frankfurter API — live exchange rates (free, no key required)
- FRED API — US Federal Funds Rate (free key)
- Deployed on Vercel
