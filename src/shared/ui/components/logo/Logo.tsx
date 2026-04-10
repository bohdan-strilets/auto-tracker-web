export const Logo = ({ size = 34, animated = true }) => {
  const id = {
    grad: `grad`,
    gradInner: `grad-inner`,
    glow: `glow`,
  };

  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 56 56"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      style={{ overflow: 'visible' }}
    >
      <defs>
        {/* Main gradient: purple → indigo → sky */}
        <linearGradient id={id.grad} x1="0" y1="0" x2="56" y2="56" gradientUnits="userSpaceOnUse">
          <stop offset="0%" stopColor="#c084fc" />
          <stop offset="45%" stopColor="#818cf8" />
          <stop offset="100%" stopColor="#38bdf8" />
        </linearGradient>

        {/* Inner arc gradient — subtler */}
        <linearGradient
          id={id.gradInner}
          x1="56"
          y1="0"
          x2="0"
          y2="56"
          gradientUnits="userSpaceOnUse"
        >
          <stop offset="0%" stopColor="#c084fc" stopOpacity="0.55" />
          <stop offset="100%" stopColor="#38bdf8" stopOpacity="0.15" />
        </linearGradient>

        {/* Soft glow filter */}
        <filter id={id.glow} x="-30%" y="-30%" width="160%" height="160%">
          <feGaussianBlur stdDeviation="1.8" result="blur" />
          <feMerge>
            <feMergeNode in="blur" />
            <feMergeNode in="SourceGraphic" />
          </feMerge>
        </filter>

        {/* Animation styles */}
        {animated && (
          <style>{`
            @keyframes spin {
              from { transform: rotate(0deg); }
              to   { transform: rotate(360deg); }
            }
            @keyframes pulse {
              0%, 100% { opacity: 1;   r: 4.5; }
              50%       { opacity: 0.6; r: 3.8; }
            }
            @keyframes fade-arc {
              0%, 100% { opacity: 0.35; }
              50%       { opacity: 0.7;  }
            }

            .outer-arc {
              transform-origin: 28px 28px;
              animation: spin 8s linear infinite;
            }
            .inner-arc {
              animation: fade-arc 3s ease-in-out infinite;
            }
            .center-dot {
              animation: pulse 2.5s ease-in-out infinite;
            }
          `}</style>
        )}
      </defs>

      {/* ── Outer arc (незамкнене — розрив знизу-зліва) ── */}
      <path
        className={animated ? 'outer-arc' : undefined}
        d="M28 4 A24 24 0 1 1 10.06 42"
        stroke={`url(#${id.grad})`}
        strokeWidth="3.5"
        strokeLinecap="round"
        fill="none"
        filter={`url(#${id.glow})`}
      />

      {/* ── Inner arc (коротший, інший напрям) ── */}
      <path
        className={animated ? 'inner-arc' : undefined}
        d="M28 13 A15 15 0 0 1 41.5 35"
        stroke={`url(#${id.gradInner})`}
        strokeWidth="2"
        strokeLinecap="round"
        fill="none"
      />

      {/* ── Center dot ── */}
      <circle
        className={animated ? 'center-dot' : undefined}
        cx="28"
        cy="28"
        r="4.5"
        fill={`url(#${id.grad})`}
        filter={`url(#${id.glow})`}
      />

      {/* ── Arc-end dot ── */}
      <circle cx="10.06" cy="42" r="2.5" fill="#c084fc" opacity="0.8" />
    </svg>
  );
};
