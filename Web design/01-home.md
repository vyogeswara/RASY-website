# COSMOQ Home Page Extraction

**URL**: `https://cosmoq.framer.website/`

---

## Page Structure

```
├── Navigation (fixed)
├── Hero Section
├── Logo Marquee
├── Exceptionalities Section (What sets COSMOQ apart)
├── CTA Section (Ready to get started?)
├── Features Section (All-in-one AI for enterprise)
├── Products Section (Multiple Products)
├── Steps Section (3 Steps to Kickstart)
├── Security Section (Multi-Layer Security)
├── Testimonials Section
├── Pricing Section
├── FAQ Section
├── Integration Section
├── Footer CTA
└── Footer
```

---

## Section 1: Hero

### Content
- **Badge**: "Beta Version is launching on 12th September"
- **H1**: "Next-gen enterprise with AI Agents"
- **Description**: "Accelerate the speed of business with the COSMOC Platform and our AI solutions for work, service, and process."
- **CTA**: "Get Started" → `/pricing`

### CSS Classes
```css
.framer-Ky4om .framer-jdt6mz { /* Hero container */
  padding: 160px 40px 20px;
  gap: 25px;
}

.framer-Ky4om .framer-1kktr3t { /* Badge pill */
  background-color: rgba(255, 255, 255, 0.07);
  border-radius: 57999px;
  padding: 6px 16px;
}
```

### Animation
```javascript
// Framer Motion - Fade in up stagger
initial={{ opacity: 0, y: 20 }}
animate={{ opacity: 1, y: 0 }}
transition={{ duration: 0.6, staggerChildren: 0.1 }}
```

---

## Section 2: Logo Marquee

### CSS Classes
```css
.framer-Ky4om .framer-no0usn-container {
  height: 98px; /* Desktop */
  height: 58px; /* Mobile */
}

.framer-1tkxqbj, .framer-1e13t0a /* Logo items */ {
  filter: grayscale();
  width: 150px;
  height: 48px;
  gap: 74px;
}
```

### Animation
```javascript
// Infinite scroll marquee
animate={{ x: [0, -1000] }}
transition={{ 
  x: { repeat: Infinity, repeatType: "loop", duration: 20, ease: "linear" }
}}
```

---

## Section 3: Exceptionalities (What sets apart)

### Content
- **Label**: "EXCEPTIONALITIES"
- **H2**: "What sets COSMOQ apart"
- **Description**: "Smarter, faster, and more adaptive than traditional AI solutions."

### Feature Cards
| Title | Description |
|-------|-------------|
| Speed | Faster time-to-value with our enterprise AI solutions and AI agent marketplace. |
| Deep capabilities | An agent platform with the depth to adapt to every interaction, workflow, behavior, and enterprise. |
| Control | The power of a standardized platform built for the demands. |
| Flexibility | Our design approach is ecosystem agnostic, allowing you to choose. |

### Layout
```css
.framer-Ky4om .framer-10s062j { /* Card grid container */
  display: flex;
  flex-wrap: wrap;
  gap: 32px;
}
/* 2 columns desktop, 1 column mobile */
```

---

## Section 4: CTA Banner

### Content
- **H3**: "Ready to get started?"
- **Description**: "Let's make this happen. We're ready when you are."
- **Primary CTA**: "Get Started" → `/pricing`
- **Secondary CTA**: "Get in touch" → `/contact`

---

## Section 5: Features (All-in-one AI)

### Content
- **Label**: "FEATURES"
- **H2**: "All-in-one AI for enterprise"
- **Description**: "Simplify, accelerate, and transform with one connected AI ecosystem."

### Tabs
- Usage
- Technology  
- Data

### Cards
1. **AI Agent for work**
   - "Connect to your business systems, understand your data and workflows, and activate agentic."
   - Tags: Healthcare, Tech Assistance, Support, Marketer
   - CTA: "See Uses" → `/ai-solutions/ai-for-work`

2. **Alpha Technology**
   - "Create valuable AI agents and agentic workflows with confidence and ongoing control."
   - Tags: Multi-Agent, Latest Model, Dialog GPT, Supervisor Agents
   - CTA: "Explore Tech" → `/ai-solutions/ai-for-service`

3. **Enterprise data sources**
   - "Our design approach is ecosystem agnostic, allowing you to choose how you connect data."
   - Tags: SharePoint, SAP, Slack, Confluence
   - CTA: "Start Setup" → `/integration`

---

## Section 6: Products

### Content
- **Label**: "PRODUCTS"
- **H2**: "Multiple Products"
- **Description**: "Covers all major verticals in the tech industry with top intelligence."

### Tabs
- Automation
- Banking
- Recruitment

### Cards
| Product | Description |
|---------|-------------|
| Process Automation | Streamline complex workflows with intelligent AI agents that enhance efficiency, accuracy, and speed across your enterprise. |
| Healthcare | Boost sales with smart automation tools. |
| Marketing | Optimize campaigns with intelligent automation. |
| Ecommerce | Accelerate coding and improve complex workflows. |
| Development | Improve patient care with intelligent automation. |

---

## Section 7: Steps (3 Steps to Kickstart)

### Content
- **Label**: "STEPS TO USE"
- **H2**: "3 Steps to Kickstart"
- **Description**: "From setup to measurable success made effortless in three steps."

### Progress Bar
```css
.framer-Ky4om .framer-12vbwb0 { /* Background */
  height: 1px;
  background: rgba(125, 164, 255, 0.16);
}

.framer-Ky4om .framer-1r0lx73 { /* Active progress */
  height: 2px;
  background: linear-gradient(90deg, #ffac0a 0%, #0175ff 100%);
}
```

### Steps
1. **One account, endless sign-in choices**
   - Sign in instantly with Google or GitHub
   - Create your own secure login credentials
   - Connect through your company's sign-in

2. **Choose the Agent You Want to Deploy**
   - Choose agents tailored to your specific tasks
   - Access universe of pre-built intelligent
   - Deploy agents that align with your goals

3. **Prompt or Set to Automation Mode**
   - Prompt the agent and adjust workflows
   - Let the agent handle tasks end-to-end
   - Switch between manual and automated

---

## Section 8: Security

### Content
- **Label**: "DATA AND PRIVACY"
- **H2**: "Multi-Layer Security"
- **Description**: "Protect your enterprise with multi-layered AI security. From data encryption to behavior monitoring, every layer works together."

### Features (3 Cards)
- Intelligent Protection
- Real-Time Threat Detection
- Seamless Compliance

---

## Section 9: Testimonials

### Content
- **Label**: "TESTIMONIALS"
- **H2**: "Trusted by customers"

### Testimonials
1. **Daniel Reyes** - Chief Operations Officer, LuminaTech
   - "Cosmoq is the top-performing AI Agent we've seen to date — resolving complex queries faster and more accurately than any human team could."

2. **Sarah Mitchell** - VP of Digital Transformation, Nexora
   - "Cosmoq's AI Agents have completely transformed our workflow efficiency. What once took hours now takes minutes."

3. **Priya Nair** - Head of Innovation, Altara Global
   - "With Cosmoq's AI platform, our enterprise has gained speed, insight, and scalability."

---

## Section 10: Pricing

### Content
- **Label**: "PRICING"
- **H2**: "Flexible Plans for Every"
- **Description**: "Choose the plan that fits your team and scales with your business."

### Toggle
- Monthly / Yearly (30% off)

### Plans
| Plan | Price | Features |
|------|-------|----------|
| Sonic | $49/month | Core AI Agents, Workflow automation, Basic integrations, Standard reporting, Email support, 5,000 AI actions |
| Supersonic | $99/month | Everything in Sonic, Advanced AI Agents, Priority integrations, Enhanced dashboards, 24/7 chat support, 20,000 AI actions |
| HyperSonic | Custom | Enterprise-grade, Full API access, Unlimited workflows |

---

## Section 11: FAQ

### Content
- **Label**: "FAQ"
- **H2**: "Curious About Cosmoq?"
- **Description**: "Answers to common questions about our AI-powered enterprise platform."

### Questions
1. What is COSMOQ?
2. How are AI Agents different from automation tools?
3. Can COSMOQ integrate with our existing systems?
4. Is COSMOQ secure for enterprise use?
5. How quickly can COSMOQ be implemented?
6. Can AI Agents replace human employees?
7. How does COSMOQ improve customer service?
8. Is COSMOQ scalable for global operations?

---

## Section 12: Integration

### Content
- **Label**: "INTEGRATION"
- **H2**: "Smart Versatile Agent driven Integration"
- **Description**: "Connect custom or pre-built connectors to your enterprise and third-party apps."
- **CTA**: "Know More" → `/integration`

---

## Section 13: Footer CTA

### Content
- **H2**: "Step Into COSMOQ The Future of Intelligent Agents"
- **Description**: "Everything your team needs, in one simple workspace. Stay focused, stay in sync."
- **CTA**: "Get Started" → `/pricing`

---

## Background Effects

### Radial Mask
```css
.framer-Ky4om .framer-17bqy5g {
  backdrop-filter: blur(10px);
  background: linear-gradient(180deg, transparent 0%, rgba(255,255,255,0.07) 100%);
  -webkit-mask: radial-gradient(50% 50% at 47.9% 93.9%, transparent 69%, rgba(0,0,0,0.9) 82%, #000 100%);
}
```

### Noise Overlay
```css
.framer-Ky4om .framer-phyc1x {
  opacity: 0.14;
  -webkit-mask: linear-gradient(rgba(0,0,0,0.7) 0%, rgba(0,0,0,0.35) 15%, rgba(0,0,0,0.98) 32%, #000 100%);
}
```

---

## Key CSS Variables Used

```css
--token-839225cb-b1fc-470d-a0c2-2eb7fcc590b8: #ffffff; /* White */
--token-74e333f8-fe87-4945-af87-cae5b7e16c10: #000000; /* Black */
--token-991642a5-fe69-44f0-a456-0d249f695158: #0175ff; /* Blue */
--token-1a06e153-824c-4039-a1ec-38e20ad17137: #ffac0a; /* Orange */
--token-f4dc11a3-eab6-45ff-bb5d-90cc77e6a1e2: #7da4ff29; /* Glass border */
--token-5a7f2bca-ee8c-42c5-80e1-f72de38d4fdf: #ffffff12; /* Glass bg */
```
