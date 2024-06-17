export function RightIcon(props) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="15"
      height="28"
      fill="none"
      viewBox="0 0 15 28"
      className="right-icon"
      {...props}
    >
      <path
        fill={props.disabled ? '#a0a0a0' : '#fff'}
        fillRule="evenodd"
        d="M.366 27.134a1.25 1.25 0 010-1.768L11.982 13.75.366 2.134A1.25 1.25 0 112.134.366l12.5 12.5a1.25 1.25 0 010 1.768l-12.5 12.5a1.25 1.25 0 01-1.768 0z"
        clipRule="evenodd"
      ></path>
    </svg>
  )
}
