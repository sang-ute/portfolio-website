export function SystemIllustration({ className = "" }: { className?: string }) {
  return (
    <svg
      aria-hidden="true"
      viewBox="0 0 360 360"
      fill="none"
      className={className}
    >
      <circle cx="180" cy="180" r="132" stroke="currentColor" strokeOpacity=".22" />
      <circle cx="180" cy="180" r="94" stroke="currentColor" strokeOpacity=".38" />
      <circle cx="180" cy="180" r="54" stroke="currentColor" strokeOpacity=".2" />
      <path d="M48 180h264M180 48v264" stroke="currentColor" strokeOpacity=".16" />
      <path
        d="M88 88l184 184M272 88 88 272"
        stroke="currentColor"
        strokeOpacity=".12"
      />
      <circle cx="180" cy="180" r="7" fill="currentColor" />
      <circle cx="274" cy="180" r="5" fill="currentColor" />
      <rect
        x="84"
        y="111"
        width="10"
        height="10"
        stroke="currentColor"
        strokeOpacity=".72"
      />
      <path d="M248 68h34M265 51v34" stroke="currentColor" strokeOpacity=".5" />
      <circle
        cx="100"
        cy="260"
        r="3"
        fill="currentColor"
        fillOpacity=".65"
      />
    </svg>
  );
}
