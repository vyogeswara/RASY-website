"use client";

/* ─── Service Area Icons ─── */

export function AIIcon({ size = 44 }: { size?: number }) {
  return (
    <svg width={size} height={size} viewBox="0 0 44 44" fill="none" aria-hidden="true">
      <rect width="44" height="44" rx="12" fill="#d7ff72" />
      <path d="M22 12v4M22 28v4M12 22h4M28 22h4" stroke="#111815" strokeWidth="1.8" strokeLinecap="round" />
      <circle cx="22" cy="22" r="5" stroke="#111815" strokeWidth="1.8" />
      <path d="M18 14l-2-2M28 14l2-2M18 30l-2 2M28 30l2 2" stroke="#111815" strokeWidth="1.4" strokeLinecap="round" />
      <circle cx="22" cy="22" r="2" fill="#111815" />
    </svg>
  );
}

export function SecurityIcon({ size = 44 }: { size?: number }) {
  return (
    <svg width={size} height={size} viewBox="0 0 44 44" fill="none" aria-hidden="true">
      <rect width="44" height="44" rx="12" fill="#d7ff72" />
      <path d="M22 11l9 4v7c0 6-4 10-9 12-5-2-9-6-9-12v-7l9-4z" stroke="#111815" strokeWidth="1.8" strokeLinejoin="round" />
      <path d="M18 22l3 3 5-6" stroke="#111815" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}

export function GrowthIcon({ size = 44 }: { size?: number }) {
  return (
    <svg width={size} height={size} viewBox="0 0 44 44" fill="none" aria-hidden="true">
      <rect width="44" height="44" rx="12" fill="#d7ff72" />
      <path d="M12 32l7-10 5 5 8-14" stroke="#111815" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
      <path d="M27 13h5v5" stroke="#111815" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}

export function TrainingIcon({ size = 44 }: { size?: number }) {
  return (
    <svg width={size} height={size} viewBox="0 0 44 44" fill="none" aria-hidden="true">
      <rect width="44" height="44" rx="12" fill="#d7ff72" />
      <circle cx="22" cy="16" r="4" stroke="#111815" strokeWidth="1.8" />
      <path d="M15 30c0-4 3-7 7-7s7 3 7 7" stroke="#111815" strokeWidth="1.8" strokeLinecap="round" />
      <path d="M28 14l4-2M28 18l4 2" stroke="#111815" strokeWidth="1.4" strokeLinecap="round" />
    </svg>
  );
}

/* ─── Inline Heading Badges ─── */

export function BlueBadge() {
  return (
    <span className="heading-badge heading-badge--blue" aria-hidden="true">
      <svg width="28" height="28" viewBox="0 0 28 28" fill="none">
        <circle cx="14" cy="14" r="14" fill="#31bee7" />
        <path d="M10 14l3 3 5-6" stroke="#fff" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
    </span>
  );
}

export function LimeBadge() {
  return (
    <span className="heading-badge heading-badge--lime" aria-hidden="true">
      <svg width="28" height="28" viewBox="0 0 28 28" fill="none">
        <circle cx="14" cy="14" r="14" fill="#d7ff72" />
        <circle cx="14" cy="11" r="3" stroke="#111815" strokeWidth="1.6" />
        <path d="M14 15v4M12 17h4" stroke="#111815" strokeWidth="1.6" strokeLinecap="round" />
      </svg>
    </span>
  );
}

/* ─── Industry / Sector Icons ─── */

export function FinanceIcon({ size = 36 }: { size?: number }) {
  return (
    <svg width={size} height={size} viewBox="0 0 36 36" fill="none" aria-hidden="true">
      <rect x="7" y="26" width="4" height="8" rx="1" fill="#1d55d5" opacity=".7" transform="rotate(180 11 30)" />
      <rect x="13" y="22" width="4" height="12" rx="1" fill="#1d55d5" opacity=".85" transform="rotate(180 17 28)" />
      <rect x="19" y="18" width="4" height="16" rx="1" fill="#1d55d5" transform="rotate(180 23 26)" />
      <rect x="25" y="14" width="4" height="20" rx="1" fill="#31bee7" transform="rotate(180 29 24)" />
      <path d="M9 20l6-5 5 3 7-8" stroke="#111815" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}

export function HealthcareIcon({ size = 36 }: { size?: number }) {
  return (
    <svg width={size} height={size} viewBox="0 0 36 36" fill="none" aria-hidden="true">
      <path d="M5 18h5l3-6 4 12 3-8 3 4h8" stroke="#1d55d5" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
      <circle cx="18" cy="10" r="4" stroke="#31bee7" strokeWidth="1.5" />
      <path d="M18 8v4M16 10h4" stroke="#31bee7" strokeWidth="1.5" strokeLinecap="round" />
    </svg>
  );
}

export function GovernmentIcon({ size = 36 }: { size?: number }) {
  return (
    <svg width={size} height={size} viewBox="0 0 36 36" fill="none" aria-hidden="true">
      <path d="M18 6l12 7H6l12-7z" stroke="#1d55d5" strokeWidth="1.5" strokeLinejoin="round" />
      <rect x="9" y="15" width="3" height="11" rx="1" fill="#1d55d5" opacity=".6" />
      <rect x="16" y="15" width="3" height="11" rx="1" fill="#1d55d5" opacity=".8" />
      <rect x="23" y="15" width="3" height="11" rx="1" fill="#31bee7" />
      <rect x="6" y="27" width="24" height="2" rx="1" fill="#111815" />
    </svg>
  );
}

export function InfrastructureIcon({ size = 36 }: { size?: number }) {
  return (
    <svg width={size} height={size} viewBox="0 0 36 36" fill="none" aria-hidden="true">
      <rect x="15" y="6" width="6" height="24" rx="1" stroke="#1d55d5" strokeWidth="1.5" />
      <path d="M8 18h20" stroke="#111815" strokeWidth="1.5" strokeLinecap="round" />
      <circle cx="8" cy="18" r="2.5" stroke="#31bee7" strokeWidth="1.4" />
      <circle cx="28" cy="18" r="2.5" stroke="#31bee7" strokeWidth="1.4" />
      <path d="M15 12h6M15 24h6" stroke="#1d55d5" strokeWidth="1.2" strokeLinecap="round" />
    </svg>
  );
}

export function RetailIcon({ size = 36 }: { size?: number }) {
  return (
    <svg width={size} height={size} viewBox="0 0 36 36" fill="none" aria-hidden="true">
      <rect x="6" y="14" width="24" height="16" rx="2" stroke="#1d55d5" strokeWidth="1.5" />
      <path d="M6 14l4-6h16l4 6" stroke="#1d55d5" strokeWidth="1.5" strokeLinejoin="round" />
      <circle cx="14" cy="22" r="2" fill="#31bee7" />
      <circle cx="22" cy="22" r="2" fill="#31bee7" />
      <path d="M14 22h8" stroke="#31bee7" strokeWidth="1.2" />
    </svg>
  );
}

export function ProfessionalIcon({ size = 36 }: { size?: number }) {
  return (
    <svg width={size} height={size} viewBox="0 0 36 36" fill="none" aria-hidden="true">
      <rect x="6" y="12" width="24" height="18" rx="2" stroke="#1d55d5" strokeWidth="1.5" />
      <path d="M12 12V9a6 6 0 0 1 12 0v3" stroke="#1d55d5" strokeWidth="1.5" />
      <circle cx="18" cy="20" r="3" stroke="#31bee7" strokeWidth="1.5" />
      <path d="M18 23v3" stroke="#31bee7" strokeWidth="1.5" strokeLinecap="round" />
    </svg>
  );
}

/* ─── Arrow Icon ─── */
export function ArrowUpRight({ size = 17 }: { size?: number }) {
  return (
    <svg width={size} height={size} viewBox="0 0 17 17" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <path d="M5 12L12 5M12 5H6M12 5v6" />
    </svg>
  );
}

/* ─── Code Visual: Connected Node Graph ─── */
export function ConnectedNodesVisual() {
  return (
    <svg className="connected-nodes" viewBox="0 0 400 240" fill="none" aria-hidden="true">
      {/* Connection lines */}
      <path d="M100 80 L200 120 L300 80" stroke="#1d55d5" strokeWidth="1.5" strokeDasharray="4 4" opacity=".5" />
      <path d="M200 120 L200 180" stroke="#31bee7" strokeWidth="1.5" strokeDasharray="4 4" opacity=".5" />
      <path d="M100 80 L200 180" stroke="#d7ff72" strokeWidth="1" strokeDasharray="4 4" opacity=".3" />
      <path d="M300 80 L200 180" stroke="#d7ff72" strokeWidth="1" strokeDasharray="4 4" opacity=".3" />

      {/* Animated pulse dots on paths */}
      <circle r="3" fill="#31bee7">
        <animateMotion dur="3s" repeatCount="indefinite" path="M100 80 L200 120 L300 80" />
      </circle>
      <circle r="3" fill="#d7ff72">
        <animateMotion dur="4s" repeatCount="indefinite" path="M200 120 L200 180" />
      </circle>

      {/* Nodes */}
      <g>
        <circle cx="100" cy="80" r="28" fill="#111815" />
        <text x="100" y="76" textAnchor="middle" fill="#fff" fontSize="7" fontWeight="600" letterSpacing=".08em">AI &amp;</text>
        <text x="100" y="87" textAnchor="middle" fill="rgba(255,255,255,.7)" fontSize="6.5">AUTOMATION</text>
      </g>
      <g>
        <circle cx="300" cy="80" r="28" fill="#111815" />
        <text x="300" y="76" textAnchor="middle" fill="#fff" fontSize="7" fontWeight="600" letterSpacing=".08em">CYBER</text>
        <text x="300" y="87" textAnchor="middle" fill="rgba(255,255,255,.7)" fontSize="6.5">SECURITY</text>
      </g>
      <g>
        <circle cx="200" cy="120" r="28" fill="#1d55d5" />
        <text x="200" y="116" textAnchor="middle" fill="#fff" fontSize="7" fontWeight="600" letterSpacing=".08em">DIGITAL</text>
        <text x="200" y="127" textAnchor="middle" fill="rgba(255,255,255,.7)" fontSize="6.5">GROWTH</text>
      </g>
      <g>
        <circle cx="200" cy="180" r="28" fill="#111815" />
        <text x="200" y="176" textAnchor="middle" fill="#d7ff72" fontSize="7" fontWeight="600" letterSpacing=".08em">TRAINING</text>
        <text x="200" y="187" textAnchor="middle" fill="rgba(255,255,255,.7)" fontSize="6.5">ENABLEMENT</text>
      </g>

      {/* Center glow */}
      <circle cx="200" cy="130" r="60" fill="url(#nodeGlow)" opacity=".15" />
      <defs>
        <radialGradient id="nodeGlow"><stop stopColor="#31bee7" /><stop offset="1" stopColor="transparent" /></radialGradient>
      </defs>
    </svg>
  );
}

/* ─── Code Visual: Mini Workflow ─── */
export function WorkflowVisual() {
  return (
    <div className="mini-visual mini-visual--workflow" aria-hidden="true">
      <div className="mv-step"><span>Discover</span><i /></div>
      <div className="mv-line" />
      <div className="mv-step"><span>Verify</span><i /></div>
      <div className="mv-line" />
      <div className="mv-step mv-step--active"><span>Human review</span><i /></div>
    </div>
  );
}

/* ─── Code Visual: Radar / Signal ─── */
export function RadarVisual() {
  return (
    <div className="mini-visual mini-visual--radar" aria-hidden="true">
      <svg viewBox="0 0 160 120" fill="none">
        <path d="M80 100 A60 60 0 0 1 20 100" stroke="#1d55d5" strokeWidth="1.5" opacity=".3" />
        <path d="M80 100 A45 45 0 0 1 35 100" stroke="#1d55d5" strokeWidth="1.5" opacity=".5" />
        <path d="M80 100 A30 30 0 0 1 50 100" stroke="#31bee7" strokeWidth="1.5" opacity=".7" />
        <circle cx="80" cy="100" r="4" fill="#31bee7" />
        <circle cx="55" cy="62" r="3" fill="#d7ff72" />
        <circle cx="100" cy="55" r="2.5" fill="#1d55d5" />
        <circle cx="40" cy="78" r="2" fill="#1d55d5" opacity=".6" />
        <line x1="80" y1="100" x2="55" y2="62" stroke="#31bee7" strokeWidth=".8" opacity=".4" />
      </svg>
    </div>
  );
}

/* ─── Code Visual: Journey Funnel ─── */
export function FunnelVisual() {
  return (
    <div className="mini-visual mini-visual--funnel" aria-hidden="true">
      <div className="mv-funnel-stage" style={{ width: "100%" }}><span>Website</span></div>
      <div className="mv-funnel-stage" style={{ width: "78%" }}><span>Qualify</span></div>
      <div className="mv-funnel-stage" style={{ width: "54%" }}><span>CRM</span></div>
      <div className="mv-funnel-stage mv-funnel-stage--accent" style={{ width: "36%" }}><span>Convert</span></div>
    </div>
  );
}

/* ─── Code Visual: Curriculum Grid ─── */
export function CurriculumVisual() {
  return (
    <div className="mini-visual mini-visual--curriculum" aria-hidden="true">
      {["Prompting", "Agents", "Automation"].map((label, i) => (
        <div className="mv-curriculum-row" key={label}>
          <span>{label}</span>
          <div className="mv-progress">
            <div className="mv-progress__fill" style={{ width: `${65 + i * 12}%` }} />
          </div>
        </div>
      ))}
    </div>
  );
}

/* ─── Photo Placeholder ─── */
export function PhotoPlaceholder({
  prompt,
  height = 400,
  label,
}: {
  prompt: string;
  height?: number;
  label?: string;
}) {
  return (
    <a
      href="#placeholder"
      className="photo-placeholder"
      style={{ minHeight: height }}
      data-prompt={prompt}
      aria-label={label || "Image placeholder"}
    >
      <svg width="40" height="40" viewBox="0 0 40 40" fill="none" aria-hidden="true">
        <rect x="4" y="8" width="32" height="24" rx="3" stroke="currentColor" strokeWidth="1.5" />
        <circle cx="14" cy="17" r="3" stroke="currentColor" strokeWidth="1.5" />
        <path d="M4 28l8-6 6 4 8-8 10 7" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
      {label && <span>{label}</span>}
    </a>
  );
}

/* ─── Industry Icon Map ─── */
const industryIcons: Record<string, React.ComponentType<{ size?: number }>> = {
  "Financial services": FinanceIcon,
  "Healthcare": HealthcareIcon,
  "Government": GovernmentIcon,
  "Critical infrastructure": InfrastructureIcon,
  "Retail and commerce": RetailIcon,
  "Professional services": ProfessionalIcon,
};

export function IndustryIcon({ name, size = 36 }: { name: string; size?: number }) {
  const Icon = industryIcons[name];
  return Icon ? <Icon size={size} /> : null;
}
