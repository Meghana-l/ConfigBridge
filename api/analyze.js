export default async function handler(req, res) {
  if (req.method === "OPTIONS") {
    res.setHeader("Access-Control-Allow-Origin", "*");
    res.setHeader("Access-Control-Allow-Methods", "POST, OPTIONS");
    res.setHeader("Access-Control-Allow-Headers", "Content-Type");
    return res.status(200).end();
  }

  if (req.method !== "POST") return res.status(405).json({ error: "Method not allowed" });
  res.setHeader("Access-Control-Allow-Origin", "*");

  try {
    const { module, process, industry, phase, defects } = req.body;

    const prompt = `You are an SAP ERP implementation consultant. Analyze this implementation scenario and return ONLY valid JSON, no markdown, no backticks.

ERP Module: ${module}
Business Process: ${process}
Industry: ${industry}
Current Phase: ${phase}
Open Defects: ${defects}

Return this exact JSON structure:
{
  "requirements": [
    {"id": "REQ-001", "description": "Requirement description", "priority": "High|Medium|Low", "status": "Mapped|Pending", "config_object": "SAP config object name"}
  ],
  "configuration_decisions": [
    {"area": "Config area", "decision": "What was decided", "tcode": "SAP T-code", "rationale": "Why this decision"}
  ],
  "test_scenarios": [
    {"id": "TS-001", "scenario": "Test scenario description", "type": "Unit|Integration|UAT", "status": "Pass|Fail|Pending", "defect": "Defect description or null"}
  ],
  "deployment_checklist": [
    {"category": "Category name", "item": "Checklist item", "status": "Complete|Pending|Blocked", "owner": "Functional|Technical|Client"}
  ],
  "readiness_score": 72,
  "risks": [
    {"risk": "Risk description", "severity": "High|Medium|Low", "mitigation": "Mitigation approach"}
  ],
  "summary": "2-3 sentence implementation status summary"
}`;

    const response = await fetch("https://api.groq.com/openai/v1/chat/completions", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        "Authorization": `Bearer ${process.env.GROQ_API_KEY}`,
      },
      body: JSON.stringify({
        model: "llama-3.1-8b-instant",
        temperature: 0.3,
        max_tokens: 2000,
        messages: [
          { role: "system", content: "You are an SAP ERP implementation expert. Return ONLY valid JSON — no markdown, no backticks, no explanation." },
          { role: "user", content: prompt }
        ]
      }),
    });

    const data = await response.json();
    const text = data.choices?.[0]?.message?.content || "";
    const clean = text.replace(/```json|```/g, "").trim();
    const parsed = JSON.parse(clean);
    return res.status(200).json(parsed);
  } catch (err) {
    return res.status(500).json({ error: "Analysis failed", detail: err.message });
  }
}
