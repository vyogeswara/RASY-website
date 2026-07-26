export type Capability = {
  title: string;
  copy: string;
  items: string[];
};

export type Solution = {
  slug: string;
  label: string;
  summary: string;
  capabilities: Capability[];
  outcomes: string[];
};

export const solutions: Solution[] = [
  {
    slug: "ai-automation",
    label: "AI and automation",
    summary: "Move from isolated experiments to governed systems that help people find answers, complete work, and make better decisions.",
    capabilities: [
      { title: "Strategy and readiness", copy: "Define the opportunity, data needs, operating constraints, and adoption path before selecting tools.", items: ["AI strategy", "Readiness assessment", "Use-case prioritisation", "Responsible adoption"] },
      { title: "Knowledge and agents", copy: "Create assistants and agents that work with approved knowledge and visible human escalation.", items: ["Enterprise search", "Knowledge assistants", "AI agents", "Human review"] },
      { title: "Integration and operation", copy: "Connect useful AI to existing workflows, permissions, monitoring, and business systems.", items: ["System integration", "Workflow automation", "Monitoring", "AI governance"] },
    ],
    outcomes: ["Faster access to trusted information", "Less repetitive work", "More consistent service and delivery", "Controlled, measurable adoption"],
  },
  {
    slug: "ai-customer-experience",
    label: "AI customer experience",
    summary: "Connect voice, chat, reception, appointments, and agent support without losing the human handoff customers need.",
    capabilities: [
      { title: "Voice and virtual reception", copy: "Route enquiries, capture context, support appointments, and move important conversations to people.", items: ["Virtual reception", "Voice agents", "Call routing", "Appointment integration"] },
      { title: "Chat and agent support", copy: "Answer common questions from approved sources while giving service teams relevant context.", items: ["Customer chatbots", "Agent assist", "Knowledge retrieval", "Human escalation"] },
      { title: "Connected journeys", copy: "Link service interactions to CRM, lead qualification, follow-up, and quality review.", items: ["CRM integration", "Lead qualification", "Outbound follow-up", "Quality monitoring"] },
    ],
    outcomes: ["Faster response", "More consistent service", "Better-qualified enquiries", "Clearer handoffs between automation and people"],
  },
  {
    slug: "intelligent-automation",
    label: "Intelligent automation",
    summary: "Design agents and workflows that move information, decisions, and tasks across systems with clear checkpoints and ownership.",
    capabilities: [
      { title: "Workflow discovery", copy: "Map the real work, decision points, data, exceptions, and owners before automating it.", items: ["Process mapping", "Opportunity assessment", "Exception design", "Outcome measures"] },
      { title: "Agents and orchestration", copy: "Coordinate knowledge, tasks, and systems around a visible end-to-end process.", items: ["AI agents", "Workflow automation", "System integration", "Task orchestration"] },
      { title: "Control and insight", copy: "Keep permissions, approvals, logs, and performance visible as automation scales.", items: ["Role-based access", "Approval gates", "Audit logs", "Workflow analytics"] },
    ],
    outcomes: ["Shorter cycle times", "Fewer manual handoffs", "Visible workflow status", "More reliable execution"],
  },
  {
    slug: "digital-experience-growth",
    label: "Digital experience and growth",
    summary: "Connect positioning, websites, content, acquisition, CRM, and analytics into one coherent customer journey.",
    capabilities: [
      { title: "Strategy and experience", copy: "Clarify positioning, information architecture, journeys, and the experience each audience needs.", items: ["Website strategy", "Information architecture", "UX and UI", "Brand messaging"] },
      { title: "Platforms and content", copy: "Design and build responsive digital experiences with useful content and secure foundations.", items: ["Web development", "AI-assisted content", "Search strategy", "Content systems"] },
      { title: "Growth operations", copy: "Connect acquisition, lead capture, nurture, CRM, chat, voice, and analytics.", items: ["Digital marketing", "Lead capture", "CRM automation", "Analytics"] },
    ],
    outcomes: ["Clearer positioning", "More useful customer journeys", "Better-qualified leads", "Connected measurement and follow-up"],
  },
  {
    slug: "cybersecurity",
    label: "Cybersecurity",
    summary: "Understand exposure, strengthen protection, improve detection and response, and make recovery part of the operating model.",
    capabilities: [
      { title: "Govern and understand", copy: "Make risk, controls, evidence, and priorities visible to accountable owners.", items: ["GRC", "Risk assessment", "Policy and controls", "Audit support"] },
      { title: "Protect and engineer", copy: "Strengthen identity, network, endpoint, data, application, cloud, and architecture layers.", items: ["IAM and MFA", "Network and endpoint", "Data and application", "Cloud architecture"] },
      { title: "Detect, respond, recover", copy: "Connect monitoring, investigation, response readiness, containment, and recovery improvement.", items: ["SOC operations", "Threat intelligence", "Incident response", "Recovery readiness"] },
    ],
    outcomes: ["Reduced exposure", "Better visibility", "Faster response", "Stronger audit and recovery readiness"],
  },
  {
    slug: "managed-soc",
    label: "Managed SOC and threat operations",
    summary: "Bring monitoring, triage, investigation, threat context, response, and reporting into one disciplined operating flow.",
    capabilities: [
      { title: "Monitor and triage", copy: "Review signals, enrich context, prioritise what matters, and route the next decision.", items: ["Security monitoring", "Alert triage", "Behavioural analytics", "Threat intelligence"] },
      { title: "Investigate and respond", copy: "Support investigation, threat hunting, escalation, containment, and documented handoff.", items: ["Investigation", "Threat hunting", "Response support", "Human review"] },
      { title: "Report and improve", copy: "Translate activity into operating insight for security teams and accountable leaders.", items: ["Operational reporting", "Trend review", "Playbook improvement", "Automation review"] },
    ],
    outcomes: ["Better signal visibility", "Faster prioritisation", "More consistent investigation", "Clearer security reporting"],
  },
  {
    slug: "grc-resilience",
    label: "GRC and cyber resilience",
    summary: "Connect risk, policy, control ownership, evidence, vulnerability management, incident readiness, and improvement.",
    capabilities: [
      { title: "Risk and governance", copy: "Define risk, ownership, policy, and decision paths across the organisation.", items: ["Risk assessment", "Governance model", "Policy", "Key risk indicators"] },
      { title: "Controls and evidence", copy: "Map controls to owners, tests, evidence, reporting, and audit support.", items: ["Control design", "Control testing", "Evidence management", "Audit support"] },
      { title: "Resilience and readiness", copy: "Connect vulnerability lifecycle, incident preparation, exercises, recovery, and learning.", items: ["Vulnerability management", "Incident readiness", "Exercises", "Recovery planning"] },
    ],
    outcomes: ["Clearer accountability", "Stronger audit readiness", "More visible remediation", "Improved resilience"],
  },
  {
    slug: "security-engineering",
    label: "Security engineering and testing",
    summary: "Strengthen identity, network, endpoint, data, application, cloud, and architecture controls—and test how they work together.",
    capabilities: [
      { title: "Identity and infrastructure", copy: "Strengthen access, network, endpoint, backup, and foundational architecture.", items: ["IAM and MFA", "Zero trust", "Network security", "Endpoint and backup"] },
      { title: "Data, application, and cloud", copy: "Protect sensitive data and build security into applications and cloud environments.", items: ["Data security", "Application security", "Cloud security", "Security architecture"] },
      { title: "Testing and improvement", copy: "Use vulnerability assessment, penetration testing, and red teaming to guide remediation.", items: ["Vulnerability testing", "Penetration testing", "Red teaming", "Remediation guidance"] },
    ],
    outcomes: ["Smaller attack surface", "Stronger trust boundaries", "More consistent controls", "Actionable testing insight"],
  },
];
