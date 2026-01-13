# AI Solutions Page - Component Extraction Guide

## Page Structure Overview

```
ai-solutions/page.html
├── Navigation (fixed, Desktop/Tablet/Phone variants)
├── Hero Section (data-framer-name="Hero")
├── AI for Work Section (data-framer-name="AI for Work")
│   └── Solution Card (Desktop/Phone variants)
├── AI for Service Section (same card structure)
├── AI for Process Section (same card structure)
└── Footer Section (data-framer-name="Footer BG (2)")
```

---

## 1. CSS Variables (Design Tokens)

| Token | Value | Usage |
|-------|-------|-------|
| `--token-839225cb-...` | `#fff` | Primary text, white |
| `--token-74e333f8-...` | `#000` | Background black |
| `--token-991642a5-...` | `#0175ff` | Primary blue |
| `--token-40eb5c15-...` | `#ffcd7d` | Accent gold |
| `--token-1a06e153-...` | `#ffac0a` | Orange gradient |
| `--token-e77749d5-...` | `#9ba9c4` | Muted text |
| `--token-f8eb999f-...` | `#06070a` | Card background |
| `--token-cef4d4a6-...` | `#0c0f16` | Button background |
| `--token-63f7583a-...` | `#2f3950` | Border color |
| `--token-f4dc11a3-...` | `#7da4ff29` | Card border (16% opacity) |

---

## 2. Typography

**Font Families:**
- `Inter` (400, 500, 600, 700 weights)
- `Inter Display` (400, 500, 700 weights)

**Presets:**
- `framer-styles-preset-1pjo9hs` → H3 (36px, Inter Display, 400)
- `framer-styles-preset-t2rmki` → Body (18px, Inter Display, 400, muted)
- `framer-styles-preset-kng7jv` → Subtitle (18px, Inter, 500, centered)
- `framer-styles-preset-1ucu1n1` → H1 (82px desktop / 46px mobile)

---

## 3. Hero Section

**Structure:**
```html
<section class="framer-nF8Jx framer-10tfxvk">
  <div class="framer-q05ttp">  <!-- Content wrapper -->
    <div class="framer-cmtd40"> <!-- Title container -->
      <h1>Simplify Your Workflow...</h1>
      <p>We believe CX is at the...</p>
    </div>
  </div>
  <div class="framer-19g2xzf"> <!-- Background gradient -->
    <div class="framer-1tbkkyf">  <!-- Gradient image -->
  </div>
</section>
```

**Key Styles:**
- Background: `#000`
- Padding: `128px 40px 40px` (desktop), `128px 20px 40px` (mobile)
- Gradient mask: `linear-gradient(#000 0% 66.9816%, #0000 100%)`
- Title animation: `opacity: 0.001; transform: translateY(-50px)` → fades in

---

## 4. AI Solution Card Component

**Used for:** AI for Work, AI for Service, AI for Process

**Structure:**
```html
<div class="framer-qIVyl framer-vyhv0b" data-border="true">
  <div class="framer-12imhiz">  <!-- Content -->
    <div class="framer-w1uhgx">  <!-- Main -->
      <div class="framer-1hif2r5">  <!-- Title block -->
        <h3>AI for Work</h3>
        <p>Search silos, automate workflows...</p>
      </div>
      <a href="./ai-solutions/ai-for-work">Learn More</a>
    </div>
    <div class="framer-r4io1a"></div>  <!-- Divider line -->
    <div class="framer-3qynfi">  <!-- Features -->
      <p>Productivity at scale</p>
      <div class="framer-1ja349r">  <!-- Points list -->
        <div class="framer-1m2gbez">  <!-- Point -->
          <div class="framer-vbg6my"></div>  <!-- Dot -->
          <p>Enterprise Search</p>
        </div>
        <!-- More points... -->
      </div>
    </div>
  </div>
  <figure class="framer-1skvpqa">  <!-- Bottom gradient image -->
    <img src="...gradient.png" />
  </figure>
</div>
```

**Key Styles:**
- Border: `1px solid rgba(125, 164, 255, 0.16)`
- Background: `#06070a`
- Border radius: `24px`
- Animation: `opacity: 0; transform: translateY(20px)` → scroll-triggered

**Feature Point Dot:**
- Size: `5px` circle
- Background: `linear-gradient(148deg, #0175ff 0%, #ffac0a 100%)`

**Learn More Button:**
- Text gradient: `linear-gradient(277deg, #0175ff 0%, #ffcd7d 100%)`
- Border: `1px solid #2f3950`
- Background: `#0c0f16`

---

## 5. Card Data

### AI for Work
- **Title:** AI for Work
- **Subtitle:** Search silos, automate workflows, and govern confidently.
- **Features Title:** Productivity at scale
- **Features:** Enterprise Search, AI Agent Builder, Intelligent Orchestrator, Admin Controls
- **Link:** `./ai-solutions/ai-for-work`
- **Gradient Image:** `ixSlHBj93cQxMvRKBPxUGuiwRE.png`

### AI for Service
- **Title:** AI for Service
- **Subtitle:** Leverage AI agents to empower customers and personalize.
- **Features Title:** Redefine the CX
- **Features:** Agentic Contact Center, Agent AI Assistance, Quality Assurance, Outbound Campaigns
- **Link:** `./ai-solutions/ai-for-service`
- **Gradient Image:** `pSxYz80kLUKNMKdnW99z0alJYJ0.png`

### AI for Process
- **Title:** AI for Process
- **Subtitle:** Simplify complex business processes with autonomous AI agents.
- **Features Title:** Process Intelligence
- **Features:** Process automation, AI analytics + monitoring, Pre-built process templates, Seamless System Integration
- **Link:** `./ai-solutions/ai-for-process`
- **Gradient Image:** `yxLTC9cANtOH1hhf7cA7mlRT8.png`

---

## 6. Responsive Breakpoints

| Breakpoint | Media Query |
|------------|-------------|
| Desktop | `min-width: 1200px` |
| Tablet | `min-width: 810px and max-width: 1199.98px` |
| Phone | `max-width: 809.98px` |

**Card Layout Changes (Phone):**
- Flex direction: column
- Gap: 24px (vs 56px desktop)
- Aspect ratio for gradient: 3.65979 (vs 6.38415 desktop)

---

## 7. Assets to Download

**Images:**
- `https://framerusercontent.com/images/ixSlHBj93cQxMvRKBPxUGuiwRE.png` (AI for Work gradient)
- `https://framerusercontent.com/images/pSxYz80kLUKNMKdnW99z0alJYJ0.png` (AI for Service gradient)
- `https://framerusercontent.com/images/yxLTC9cANtOH1hhf7cA7mlRT8.png` (AI for Process gradient)
- `https://framerusercontent.com/images/9KnJwOszoExl1mcOPudDLQaGg.svg` (Logo)

---

## 8. Animation Specs

**Navbar:** `opacity: 0.001; transform: translateY(-50px)` → animate to visible
**Cards:** `opacity: 0; transform: translateY(20px)` → scroll-triggered reveal
**Hero Title:** Character-by-character animation (Framer Motion)

---
