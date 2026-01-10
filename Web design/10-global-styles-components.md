# COSMOQ Global Styles & Components

---

## Global CSS Variables

```css
:root {
  /* === COLORS === */
  --color-white: #ffffff;
  --color-black: #000000;
  --color-blue: #0175ff;
  --color-orange: #ffac0a;
  --color-light-orange: #ffcd7d;
  --color-red: #ff2244;
  
  /* Grays */
  --color-gray-100: #d1d4e3;
  --color-gray-200: #ccc;
  --color-gray-300: #9ba9c4;
  --color-gray-400: #2f3950;
  
  /* Backgrounds */
  --bg-primary: #000000;
  --bg-secondary: #06070a;
  --bg-tertiary: #0c0f16;
  
  /* Glass/Transparency */
  --glass-bg: rgba(255, 255, 255, 0.07);
  --glass-border: rgba(125, 164, 255, 0.16);
  --glass-hover: rgba(255, 255, 255, 0.1);
  
  /* === TYPOGRAPHY === */
  --font-sans: "Inter", "Inter Placeholder", sans-serif;
  --font-display: "Inter Display", "Inter Display Placeholder", sans-serif;
  
  /* === SPACING === */
  --space-1: 4px;
  --space-2: 6px;
  --space-3: 10px;
  --space-4: 16px;
  --space-5: 20px;
  --space-6: 24px;
  --space-7: 32px;
  --space-8: 40px;
  --space-9: 48px;
  --space-10: 64px;
  --space-11: 80px;
  --space-12: 130px;
  
  /* === BORDER RADIUS === */
  --radius-sm: 8px;
  --radius-md: 16px;
  --radius-lg: 24px;
  --radius-pill: 57999px;
  
  /* === TRANSITIONS === */
  --ease-out: cubic-bezier(0.25, 0.1, 0.25, 1);
  --transition-fast: 0.2s ease;
  --transition-normal: 0.3s ease;
  --transition-slow: 0.6s var(--ease-out);
  
  /* === CONTAINER === */
  --container-max: 1200px;
  --container-padding: 40px;
  --container-padding-mobile: 20px;
}
```

---

## Typography Classes

```css
/* H1 - Hero Headlines */
.heading-1 {
  font-family: var(--font-display);
  font-size: 82px;
  font-weight: 500;
  letter-spacing: -0.03em;
  line-height: 1.2;
  color: var(--color-white);
}

@media (max-width: 1199px) {
  .heading-1 { font-size: 58px; }
}

@media (max-width: 809px) {
  .heading-1 { font-size: 46px; }
}

/* H2 - Section Headers */
.heading-2 {
  font-family: var(--font-display);
  font-size: 64px;
  font-weight: 400;
  letter-spacing: -0.02em;
  line-height: 1.2;
  color: var(--color-white);
}

@media (max-width: 1199px) {
  .heading-2 { font-size: 45px; }
}

@media (max-width: 809px) {
  .heading-2 { font-size: 36px; }
}

/* H3 - Subsection Headers */
.heading-3 {
  font-family: var(--font-display);
  font-size: 38px;
  font-weight: 400;
  line-height: 1.3;
  color: var(--color-white);
}

/* H4 - Card Titles */
.heading-4 {
  font-family: var(--font-display);
  font-size: 24px;
  font-weight: 400;
  line-height: 1.5;
  color: var(--color-white);
}

/* Body Text */
.body-text {
  font-family: var(--font-sans);
  font-size: 18px;
  font-weight: 500;
  letter-spacing: -0.03em;
  line-height: 1.4;
  color: var(--color-white);
}

/* Caption/Label */
.label-text {
  font-family: var(--font-sans);
  font-size: 14px;
  font-weight: 400;
  line-height: 1.4;
  color: var(--color-gray-200);
  text-transform: uppercase;
  letter-spacing: 0.05em;
}

/* Muted Text */
.muted-text {
  font-family: var(--font-sans);
  font-size: 16px;
  color: var(--color-gray-300);
}
```

---

## Framer Motion Animation Variants

```javascript
// === ENTRANCE ANIMATIONS ===

export const fadeIn = {
  initial: { opacity: 0 },
  animate: { opacity: 1 },
  exit: { opacity: 0 },
  transition: { duration: 0.5 }
};

export const fadeInUp = {
  initial: { opacity: 0, y: 30 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.6, ease: [0.25, 0.1, 0.25, 1] }
};

export const fadeInDown = {
  initial: { opacity: 0, y: -30 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.6, ease: [0.25, 0.1, 0.25, 1] }
};

export const fadeInLeft = {
  initial: { opacity: 0, x: -50 },
  animate: { opacity: 1, x: 0 },
  transition: { duration: 0.6 }
};

export const fadeInRight = {
  initial: { opacity: 0, x: 50 },
  animate: { opacity: 1, x: 0 },
  transition: { duration: 0.6 }
};

export const scaleIn = {
  initial: { opacity: 0, scale: 0.95 },
  animate: { opacity: 1, scale: 1 },
  transition: { duration: 0.5 }
};

// === STAGGER CONTAINERS ===

export const staggerContainer = {
  initial: {},
  animate: {
    transition: {
      staggerChildren: 0.1,
      delayChildren: 0.2
    }
  }
};

export const staggerItem = {
  initial: { opacity: 0, y: 20 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.4 }
};

// === HOVER EFFECTS ===

export const cardHover = {
  rest: { scale: 1, borderColor: "rgba(125, 164, 255, 0.16)" },
  hover: { 
    scale: 1.02, 
    borderColor: "rgba(125, 164, 255, 0.3)",
    transition: { duration: 0.2 }
  }
};

export const buttonHover = {
  rest: { scale: 1 },
  hover: { scale: 1.02 },
  tap: { scale: 0.98 }
};

// === SCROLL ANIMATIONS ===

export const scrollReveal = {
  initial: { opacity: 0, y: 50 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, margin: "-100px" },
  transition: { duration: 0.8 }
};

// === MARQUEE ===

export const marqueeVariants = {
  animate: {
    x: [0, -1000],
    transition: {
      x: {
        repeat: Infinity,
        repeatType: "loop",
        duration: 20,
        ease: "linear"
      }
    }
  }
};

// === PROGRESS BAR ===

export const progressBar = {
  initial: { width: "0%" },
  whileInView: { width: "100%" },
  viewport: { once: true },
  transition: { duration: 2, ease: "easeInOut" }
};
```

---

## Reusable Components

### Container
```jsx
function Container({ children, className = "" }) {
  return (
    <div className={`container ${className}`}>
      {children}
    </div>
  );
}

// CSS
.container {
  width: 100%;
  max-width: var(--container-max);
  margin: 0 auto;
  padding: 0 var(--container-padding);
}

@media (max-width: 809px) {
  .container {
    padding: 0 var(--container-padding-mobile);
  }
}
```

### Section
```jsx
function Section({ children, label, className = "" }) {
  return (
    <section className={`section ${className}`}>
      {label && <span className="section-label">{label}</span>}
      {children}
    </section>
  );
}

// CSS
.section {
  padding: 80px 40px;
}

.section-label {
  display: block;
  text-align: center;
  margin-bottom: 24px;
  font-size: 14px;
  font-weight: 600;
  letter-spacing: 0.1em;
  text-transform: uppercase;
  color: var(--color-gray-300);
}
```

### Badge/Pill
```jsx
function Badge({ children }) {
  return (
    <motion.div 
      className="badge"
      initial={{ opacity: 0, y: 10 }}
      animate={{ opacity: 1, y: 0 }}
    >
      {children}
    </motion.div>
  );
}

// CSS
.badge {
  display: inline-flex;
  padding: 6px 16px;
  background: var(--glass-bg);
  border-radius: var(--radius-pill);
  font-size: 14px;
  color: var(--color-white);
}
```

### Button
```jsx
function Button({ children, variant = "primary", href }) {
  const Component = href ? motion.a : motion.button;
  
  return (
    <Component
      className={`button button-${variant}`}
      href={href}
      whileHover={{ scale: 1.02 }}
      whileTap={{ scale: 0.98 }}
    >
      {children}
    </Component>
  );
}

// CSS
.button {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  padding: 14px 24px;
  border-radius: var(--radius-sm);
  font-family: var(--font-sans);
  font-size: 16px;
  font-weight: 600;
  cursor: pointer;
  transition: all var(--transition-normal);
}

.button-primary {
  background: var(--color-blue);
  color: var(--color-white);
}

.button-secondary {
  background: transparent;
  border: 1px solid var(--glass-border);
  color: var(--color-white);
}
```

### Glass Card
```jsx
function GlassCard({ children, className = "" }) {
  return (
    <motion.div
      className={`glass-card ${className}`}
      initial="rest"
      whileHover="hover"
      variants={cardHover}
    >
      {children}
    </motion.div>
  );
}

// CSS
.glass-card {
  background: var(--bg-secondary);
  border: 1px solid var(--glass-border);
  border-radius: var(--radius-lg);
  padding: 24px;
  overflow: hidden;
}
```

### Tabs
```jsx
function Tabs({ tabs, activeTab, onChange }) {
  return (
    <div className="tabs">
      {tabs.map((tab) => (
        <button
          key={tab.id}
          className={`tab ${activeTab === tab.id ? 'active' : ''}`}
          onClick={() => onChange(tab.id)}
        >
          {tab.label}
        </button>
      ))}
    </div>
  );
}

// CSS
.tabs {
  display: flex;
  gap: 8px;
  padding: 6px;
  background: rgba(255, 255, 255, 0.05);
  border-radius: var(--radius-sm);
  width: fit-content;
}

.tab {
  padding: 8px 16px;
  border-radius: 6px;
  font-size: 14px;
  color: var(--color-gray-300);
  background: transparent;
  border: none;
  cursor: pointer;
  transition: all var(--transition-fast);
}

.tab.active {
  background: var(--glass-hover);
  color: var(--color-white);
}
```

---

## Asset URLs Reference

### Fonts
```
Inter Regular: https://framerusercontent.com/assets/GrgcKwrN6d3Uz8EwcLHZxwEfC4.woff2
Inter Medium: https://framerusercontent.com/assets/UjlFhCnUjxhNfep4oYBPqnEssyo.woff2
Inter SemiBold: https://framerusercontent.com/assets/yDtI2UI8XcEg1W2je9XPN3Noo.woff2
Inter Bold: https://framerusercontent.com/assets/syRNPWzAMIrcJ3wIlPIP43KjQs.woff2
Inter Display: https://framerusercontent.com/assets/bHYNJqzTyl2lqvmMiRRS6Y16Es.woff2
```

### Images
```
Favicon: https://framerusercontent.com/images/1VtXtUrlVK0Y1WHlW4GIfnhxFho.png
OG Image: https://framerusercontent.com/assets/LaGEDiVbTeEg75rIXlNKdeL8x4.png
```

---

## Gradients

```css
/* Progress bar gradient */
.gradient-progress {
  background: linear-gradient(90deg, #ffac0a 0%, #0175ff 100%);
}

/* Glass effect gradient */
.gradient-glass {
  background: linear-gradient(180deg, transparent 0%, rgba(255, 255, 255, 0.07) 100%);
}

/* Mask gradients */
.mask-fade-bottom {
  -webkit-mask: linear-gradient(#000 0%, rgba(0,0,0,0.44) 76%, transparent 100%);
}

.mask-fade-top-bottom {
  -webkit-mask: linear-gradient(transparent 0%, rgba(0,0,0,0.84) 15%, #000 89%, transparent 100%);
}
```
