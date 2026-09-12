export default function Logo({ className = "", dark = false }: { className?: string; dark?: boolean }) {
  const textColor = dark ? "#111111" : "#ffffff";

  return (
    <svg
      viewBox="0 0 280 70"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
      aria-label="Ouirani Cars"
    >
      {/* Car silhouette - sport car profile */}
      <g transform="translate(0, 2)">
        {/* Bottom red swoosh */}
        <path
          d="M8 38 Q60 44 120 38 Q160 34 175 36"
          stroke="#dc2626"
          strokeWidth="3"
          strokeLinecap="round"
          fill="none"
        />
        {/* Main car body outline */}
        <path
          d="M15 36 Q25 36 35 30 Q55 18 85 15 Q105 13 120 15 Q140 17 155 24 Q168 30 175 36"
          stroke={textColor}
          strokeWidth="2.5"
          strokeLinecap="round"
          fill="none"
        />
        {/* Car roof line */}
        <path
          d="M40 30 Q70 10 100 8 Q125 6 145 12 Q158 17 165 26"
          stroke={textColor}
          strokeWidth="2.5"
          strokeLinecap="round"
          fill="none"
        />
        {/* Small red accent */}
        <path
          d="M12 33 Q20 30 30 28"
          stroke="#dc2626"
          strokeWidth="2"
          strokeLinecap="round"
          fill="none"
        />
      </g>

      {/* OUIRANI */}
      <text
        x="8"
        y="62"
        fontFamily="'Arial Black', 'Arial', sans-serif"
        fontWeight="900"
        fontSize="22"
        fill={textColor}
        letterSpacing="1"
      >
        OUIRANI
      </text>

      {/* CARS */}
      <text
        x="142"
        y="62"
        fontFamily="'Arial Black', 'Arial', sans-serif"
        fontWeight="900"
        fontSize="22"
        fill="#dc2626"
        letterSpacing="1"
      >
        CARS
      </text>
    </svg>
  );
}
