export default function Logo({ className = "" }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 220 56"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
      aria-label="Ouirani Cars"
    >
      {/* Car icon */}
      <g>
        {/* Car body */}
        <rect x="2" y="28" width="46" height="16" rx="4" fill="#f97316" />
        {/* Car roof */}
        <path d="M10 28 L16 16 L34 16 L40 28Z" fill="#f97316" />
        {/* Windshield */}
        <path d="M18 26 L21 18 L31 18 L34 26Z" fill="#1f2937" opacity="0.6" />
        {/* Wheels */}
        <circle cx="14" cy="44" r="6" fill="#1f2937" />
        <circle cx="14" cy="44" r="3" fill="#9ca3af" />
        <circle cx="36" cy="44" r="6" fill="#1f2937" />
        <circle cx="36" cy="44" r="3" fill="#9ca3af" />
        {/* Headlight */}
        <rect x="44" y="30" width="4" height="5" rx="1" fill="#fbbf24" />
        {/* Speed lines */}
        <line x1="0" y1="34" x2="6" y2="34" stroke="#f97316" strokeWidth="2" strokeLinecap="round" opacity="0.5" />
        <line x1="0" y1="38" x2="4" y2="38" stroke="#f97316" strokeWidth="1.5" strokeLinecap="round" opacity="0.3" />
      </g>

      {/* Text: Ouirani */}
      <text
        x="58"
        y="30"
        fontFamily="'Arial Black', 'Arial', sans-serif"
        fontWeight="900"
        fontSize="20"
        fill="white"
        letterSpacing="-0.5"
      >
        Ouirani
      </text>
      {/* Text: CARS */}
      <text
        x="58"
        y="48"
        fontFamily="'Arial', sans-serif"
        fontWeight="700"
        fontSize="13"
        fill="#f97316"
        letterSpacing="4"
      >
        CARS
      </text>
      {/* Accent line */}
      <line x1="58" y1="34" x2="210" y2="34" stroke="#f97316" strokeWidth="0.5" opacity="0.3" />
    </svg>
  );
}
