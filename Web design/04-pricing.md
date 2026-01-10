# COSMOQ Pricing Page Extraction

**URL**: `https://cosmoq.framer.website/pricing`

---

## Page Structure

```
├── Navigation
├── Hero Section
├── Plans Section (Pricing Cards)
├── Comparison Section
├── FAQ Section
├── Footer CTA
└── Footer
```

---

## Section 1: Hero

### Content
- **H1**: "Flexible Plans for Every Enterprise"
- **Description**: "From startups to global enterprises, Cosmoq offers AI-powered solutions."
- **Label**: "PLANS"

---

## Section 2: Pricing Plans

### Content
- **H2**: "Flexible Plans for Every"
- **Description**: "Choose the plan that fits your team and scales with your business."

### Billing Toggle
- **Options**: Monthly / Yearly
- **Discount**: 30% off (yearly)

### Pricing Cards

#### Sonic ($49/month)
- Access to core AI Agents
- Workflow automation for teams
- Basic integrations
- Standard reporting & analytics
- Email support
- 5,000 AI actions per month
- **Social proof**: "300+ teams trusted this"
- **CTA**: "Contact Us" → `/contact`

#### Supersonic ($99/month)
- Everything in Sonic Monthly
- Advanced AI Agents for workflows
- Priority integrations
- Enhanced dashboards
- 24/7 support via chat
- 20,000 AI actions per month
- **Social proof**: "250+ growing enterprises"
- **Badge**: "Go for more power"
- **CTA**: "Contact Us" → `/contact`

#### HyperSonic (Custom)
- Enterprise-grade AI Agent
- Full custom API access
- Unlimited workflows & automation
- Dedicated enterprise support
- **CTA**: "Contact Us" → `/contact`

---

## Section 3: Comparison Table

### Content
- **Label**: "COMPARISON"
- **H2**: "Choose Smarter Plans"
- **Description**: "See what each plan offers and find the perfect fit for you."

### Comparison Matrix

| Feature | Basic | Standard | Enterprise |
|---------|-------|----------|------------|
| **Essential features** | | | |
| Track up to 100 keywords | ✓ | ✓ | ✓ |
| Weekly ranking updates | ✓ | ✓ | ✓ |
| Basic reporting and alerts | ✓ | ✓ | ✓ |
| AI lead generation | ✗ | ✓ | ✓ |
| Real-time ranking updates | ✗ | ✓ | ✓ |
| **Advanced features** | | | |
| Competitor analysis for | 5 | 20 | 100 |
| Customize interface | ✗ | ✓ | ✓ |
| 24/7 priority support | ✗ | ✗ | ✓ |
| Full API access | ✗ | ✗ | ✓ |
| White-label reporting | ✗ | ✗ | ✓ |

---

## Section 4: FAQ

### Content
- **Label**: "FAQ"
- **H2**: "Curious About Cosmoq?"
- **Description**: "Answers to common questions about our AI-powered enterprise platform."

### Questions (Same as Home)
1. What is COSMOQ?
2. How are AI Agents different from automation tools?
3. Can COSMOQ integrate with our existing systems?
4. Is COSMOQ secure for enterprise use?
5. How quickly can COSMOQ be implemented?
6. Can AI Agents replace human employees?
7. How does COSMOQ improve customer service?
8. Is COSMOQ scalable for global operations?

---

## Pricing Card CSS

```css
.pricing-card {
  background: #06070a;
  border: 1px solid rgba(125, 164, 255, 0.16);
  border-radius: 24px;
  padding: 32px;
}

.pricing-card.featured {
  border-color: #0175ff;
  box-shadow: 0 0 40px rgba(1, 117, 255, 0.2);
}

.price {
  font-family: "Inter Display";
  font-size: 48px;
  font-weight: 500;
  color: #fff;
}

.period {
  font-size: 16px;
  color: #9ba9c4;
}
```

### Toggle Animation
```javascript
// Framer Motion toggle
const toggleVariants = {
  monthly: { x: 0 },
  yearly: { x: 100 }
};
```
