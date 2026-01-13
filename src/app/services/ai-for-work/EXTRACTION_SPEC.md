# AI for Work - Forensic Extraction & Specification

> **Complete dissection of the original AI for Work page**  
> Path: `7b2494bf-c6b1-4f74-b380-5f1cd7f3ec17/ai-solutions/ai-for-work/page.html`

---

## 📷 Image Assets

### Hero Section
| Asset | URL | Dimensions | Purpose |
|-------|-----|------------|---------|
| **Hero Background** | [H3Q7Up1GD9JyEYygvN5U7fWpqYQ.webp](https://framerusercontent.com/images/H3Q7Up1GD9JyEYygvN5U7fWpqYQ.webp) | 2880×1233 | Main hero gradient background |
| **Solutions Badge Icon** | [kSe62iNOdnrgkLKL07t29GUEak.svg](https://framerusercontent.com/images/kSe62iNOdnrgkLKL07t29GUEak.svg) | 24×24 | "AI FOR WORK" badge icon |

### Feature Section Images
| Asset | URL | Dimensions | Purpose |
|-------|-----|------------|---------|
| **Feature Card 1** | [JAFiHCatbTzsAuqWSmAKNN7zvsE.png](https://framerusercontent.com/images/JAFiHCatbTzsAuqWSmAKNN7zvsE.png) | 1919×1388 | Enterprise Search screenshot |
| **Feature Card 2** | [UgBJAGjjD29VPKkOzaxCyabIMgU.png](https://framerusercontent.com/images/UgBJAGjjD29VPKkOzaxCyabIMgU.png) | 1919×1388 | AI Agent Builder screenshot |
| **Feature Card 3** | [rrNtQU2aDjYf4aSs1WeRTIkZ3Ws.png](https://framerusercontent.com/images/rrNtQU2aDjYf4aSs1WeRTIkZ3Ws.png) | 1919×1388 | Intelligent Orchestrator screenshot |
| **Feature Card 4** | [jCSaG9tDLaK5W1D60NcPCLAvK78.png](https://framerusercontent.com/images/jCSaG9tDLaK5W1D60NcPCLAvK78.png) | 1919×1388 | Admin Controls screenshot |

### Additional Assets
| Asset | URL | Dimensions | Purpose |
|-------|-----|------------|---------|
| **Large Hero Image** | [H41THCm5hzJ21MHFXgWOF0U1A8.png](https://framerusercontent.com/images/H41THCm5hzJ21MHFXgWOF0U1A8.png) | 1902×1743 | Main product screenshot |
| **Bottom Gradient** | [9KnJwOszoExl1mcOPudDLQaGg.svg](https://framerusercontent.com/images/9KnJwOszoExl1mcOPudDLQaGg.svg) | 1810×335 | Bottom decorative gradient |
| **Logo Small** | [hYt0QkTJAwjMcaXX6xyQlWSEObo.png](https://framerusercontent.com/images/hYt0QkTJAwjMcaXX6xyQlWSEObo.png) | 762×690 | Company logo/icon |
| **Full Screen Image** | [PEUUUxYckhxt8G82fn4Y0LPz5s.png](https://framerusercontent.com/images/PEUUUxYckhxt8G82fn4Y0LPz5s.png) | 3296×2255 | Large featured image |
| **Workflow Image** | [3ez5Goty6KdEzujpWDVyu8Um6Ns.webp](https://framerusercontent.com/images/3ez5Goty6KdEzujpWDVyu8Um6Ns.webp) | 2334×1082 | Workflow visualization |

### Icon SVGs
- `MRmuOBoDk7tTbd9wZjGly9VAk.svg` (24×24) - Navigation icon
- `x7XTNLlWxYwjujzGoOnLndNCk.svg` (24×24) - Feature icon
- `FpegPxGA5O2f1mmF2vxxVytQYw.svg` (24×24) - UI icon
- `ONFFI40SIu5XBKpS7DpbI6AoFiQ.svg` (78×78) - Large feature icon
- `hUO59zHqoxPubqUshqfD4pUJeGs.svg` (78×78) - Large feature icon
- `TySVWNut65QwJpR7GO4QnKD0.svg` (78×78) - Large feature icon

---

## 🎨 Color Palette

### Primary Colors
```css
--white: #fff                    /* Primary text */
--black: #000                    /* Background */
--primary-blue: #0175ff          /* CTA buttons, accents */
--accent-gold: #ffcd7d           /* Gradient accents */
--muted-text: #d1d4e3            /* Secondary text */
```

### UI Colors
```css
--card-bg: #0c0f16               /* Card backgrounds */
--card-border: #2f3950           /* Card borders */
--subtle-gray: #9ba9c4           /* Links, secondary elements */
--light-blue: #7da4ff29          /* Hover states, overlays */
--dark-bg: #06070a               /* Deep backgrounds */
```

### Opacity Variants
```css
--white-12: #ffffff12            /* 7% white */
--white-60: #fff6                /* 40% white */
--white-10: #ffffff1a            /* 10% white */
```

---

## 🔤 Typography

### Font Families
1. **Inter Display** - Headlines, large text
2. **Inter** - Body text, UI elements

### Text Styles

#### Hero Title
- Font: Inter Display, 500 weight
- Size: 82px (desktop), 58px (tablet), 46px (mobile)
- Letter spacing: -0.03em, Line height: 1.2em

#### Section Headings (H2)
- Font: Inter Display, 400 weight
- Size: 56px (desktop), 45px (tablet), 36px (mobile)
- Letter spacing: -0.02em

#### Feature Titles (H3)
- Font: Inter Display, 400 weight
- Size: 36px (desktop), 30px (tablet), 24px (mobile)

#### Body Text
- Font: Inter Display, 400 weight
- Size: 18px (desktop), 17px (tablet), 16px (mobile)
- Color: #d1d4e3

---

## 📐 Layout Structure

### Page Container
- Desktop: 1200px max-width
- Tablet: 810px
- Mobile: 390px
- Background: #000

### Hero Section
- Padding-top: 140px (desktop), 128px (mobile)
- Gap: 160px between elements
- Background image opacity: 0.7

### Feature Cards
- Background: #0c0f16
- Border: 1px solid #2f3950
- Border-radius: 24px
- Padding: 40px (desktop), 24px (mobile)
- Gap: 24px

---

## ✨ Animations

### Hero Title
```javascript
initial: { opacity: 0, y: 80, scale: 0.9 }
animate: { opacity: 1, y: 0, scale: 1 }
transition: { duration: 0.8, delay: 0.2 }
```

### Feature Cards Scroll Reveal
```javascript
initial: { opacity: 0, y: 30 }
whileInView: { opacity: 1, y: 0 }
viewport: { once: true, margin: "-50px" }
transition: { duration: 0.6 }
```

---

## 🏗️ Component Hierarchy

```
Navbar (sticky)
├── Hero Section
│   ├── Background Image
│   ├── Badge "AI FOR WORK"
│   ├── Title "Productivity at Scale"
│   └── Subtitle + CTA
├── Features Section
│   ├── Enterprise Search Card
│   ├── AI Agent Builder Card
│   ├── Orchestrator Card
│   └── Admin Controls Card
├── Why Section
├── Steps Section
├── CTA Section
└── Footer
```

---

*Complete specification for pixel-perfect AI for Work page replication.*
