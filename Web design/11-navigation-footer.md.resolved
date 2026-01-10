# COSMOQ Navigation & Footer Extraction

---

## Navigation Component

### Desktop Navigation (≥810px)

```
[Logo] ─────── [AI Solutions ▼] [About] [Pricing] [Contact] ─────── [Get Started]
```

### Structure
```jsx
<nav className="framer-ZUPdC">
  {/* Logo */}
  <a href="/" className="framer-1yvwb09">
    <img src="logo.png" alt="COSMOQ" />
  </a>
  
  {/* Nav Links */}
  <div className="framer-48nfym">
    <NavDropdown label="AI Solutions" />
    <NavLink href="/about">About</NavLink>
    <NavLink href="/pricing">Pricing</NavLink>
    <NavLink href="/contact">Contact</NavLink>
  </div>
  
  {/* CTA */}
  <Button href="/pricing">Get Started</Button>
</nav>
```

### Nav Links
| Label | URL | Type |
|-------|-----|------|
| AI Solutions | - | Dropdown |
| ├ AI for Work | /ai-solutions/ai-for-work | Link |
| ├ AI for Service | /ai-solutions/ai-for-service | Link |
| └ AI for Process | /ai-solutions/ai-for-process | Link |
| About | /about | Link |
| Pricing | /pricing | Link |
| Contact | /contact | Link |
| Get Started | /pricing | Button |

### Mobile Navigation (<810px)
- Hamburger menu icon
- Slide-out drawer from right
- Full-height overlay

### CSS

```css
.nav {
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  z-index: 100;
  padding: 20px 40px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  backdrop-filter: blur(10px);
  background: rgba(0, 0, 0, 0.5);
}

.nav-logo {
  width: 147px;
  height: 52px;
}

.nav-links {
  display: flex;
  gap: 28px;
  align-items: center;
}

.nav-link {
  font-family: var(--font-sans);
  font-size: 16px;
  font-weight: 500;
  color: var(--color-white);
  position: relative;
  cursor: pointer;
}

.nav-link::after {
  content: "";
  position: absolute;
  bottom: -4px;
  left: 0;
  width: 0;
  height: 1px;
  background: var(--color-white);
  transition: width 0.3s ease;
}

.nav-link:hover::after {
  width: 100%;
}

/* Dropdown */
.nav-dropdown {
  position: relative;
}

.dropdown-menu {
  position: absolute;
  top: 100%;
  left: 0;
  background: var(--bg-secondary);
  border: 1px solid var(--glass-border);
  border-radius: var(--radius-md);
  padding: 16px;
  min-width: 200px;
  opacity: 0;
  visibility: hidden;
  transform: translateY(10px);
  transition: all 0.3s ease;
}

.nav-dropdown:hover .dropdown-menu {
  opacity: 1;
  visibility: visible;
  transform: translateY(0);
}

/* Mobile */
@media (max-width: 809px) {
  .nav-links {
    display: none;
  }
  
  .mobile-menu-btn {
    display: flex;
    width: 24px;
    height: 24px;
    background: var(--color-white);
    -webkit-mask: url("hamburger-icon.svg") center no-repeat;
  }
}
```

---

## Footer Component

### Structure

```
┌─────────────────────────────────────────────────────────────────────┐
│  Step Into COSMOQ The Future of Intelligent Agents                  │
│  Everything your team needs, in one simple workspace.               │
│  [Get Started]                                                       │
├─────────────────────────────────────────────────────────────────────┤
│  Navigation      │ Documentation     │ Other Pages  │ Social        │
│  • Home          │ • Blogs           │ • Launch     │ • Instagram   │
│  • About         │ • Changelog       │ • 404        │ • Twitter     │
│  • Integration   │ • Privacy policy  │              │ • LinkedIn    │
│  • Contact       │ • Terms           │              │ • Reddit      │
├─────────────────────────────────────────────────────────────────────┤
│  All rights reserved for @COSMOQ                                    │
│  Designed by Jitu Raut @fremix.design                               │
└─────────────────────────────────────────────────────────────────────┘
```

### Footer CTA Section
- **H2**: "Step Into COSMOQ The Future of Intelligent Agents"
- **Description**: "Everything your team needs, in one simple workspace. Stay focused, stay in sync."
- **CTA**: "Get Started" → `/pricing`

### Footer Links

#### Navigation
| Label | URL |
|-------|-----|
| Home | / |
| About | /about |
| Integration | /integration |
| Contact | /contact |

#### Documentation
| Label | URL |
|-------|-----|
| Blogs | /blog |
| Changelog | /changelog |
| Privacy policy | /privacy-policy/privacy-policy |
| Terms and Conditions | /privacy-policy/terms-and-conditions |

#### Other Pages
| Label | URL |
|-------|-----|
| Launchin Soon... | /launchin-soon... |
| 404 | /404 |

#### Social Connect
| Platform | URL |
|----------|-----|
| Instagram | https://www.instagram.com/jitu.ux/ |
| X/Twitter | https://x.com/jituux |
| LinkedIn | https://www.linkedin.com/in/jitendra-raut/ |
| Reddit | https://www.reddit.com/ |

### Footer Copyright
- "All rights reserved for @COSMOQ"
- "Designed by Jitu Raut @fremix.design" → https://fremix.design/

### CSS

```css
.footer-cta {
  padding: 80px 40px;
  text-align: center;
  background: var(--bg-secondary);
  border-top: 1px solid var(--glass-border);
}

.footer-cta h2 {
  max-width: 700px;
  margin: 0 auto 24px;
}

.footer {
  padding: 80px 40px 40px;
  background: var(--bg-primary);
}

.footer-grid {
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 48px;
}

@media (max-width: 809px) {
  .footer-grid {
    grid-template-columns: repeat(2, 1fr);
  }
}

.footer-column h4 {
  font-size: 14px;
  font-weight: 600;
  text-transform: uppercase;
  color: var(--color-gray-300);
  margin-bottom: 16px;
}

.footer-link {
  display: block;
  padding: 8px 0;
  font-size: 14px;
  color: var(--color-gray-200);
  transition: color 0.2s ease;
}

.footer-link:hover {
  color: var(--color-white);
}

.footer-bottom {
  margin-top: 48px;
  padding-top: 24px;
  border-top: 1px solid var(--glass-border);
  text-align: center;
  font-size: 14px;
  color: var(--color-gray-300);
}

.footer-credit {
  margin-top: 8px;
}

.footer-credit a {
  color: var(--color-blue);
}
```
