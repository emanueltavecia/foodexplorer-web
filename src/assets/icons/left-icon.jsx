export function LeftIcon(props) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="15"
      height="28"
      fill="none"
      viewBox="0 0 15 28"
      className="left-icon"
      {...props}
    >
      <path
        fill={props.disabled ? '#a0a0a0' : "#fff"}
        fillRule="evenodd"
        d="M14.634.366a1.25 1.25 0 010 1.768L3.018 13.75l11.616 11.616a1.25 1.25 0 01-1.768 1.768l-12.5-12.5a1.25 1.25 0 010-1.768l12.5-12.5a1.25 1.25 0 011.768 0z"
        clipRule="evenodd"
      ></path>
    </svg>
  )
}
