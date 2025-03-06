export const RightButtonIcon = () => {
  return (
    <svg
      width="12"
      height="12"
      viewBox="0 0 12 12"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <mask
        id="mask0_13_10"
        maskUnits="userSpaceOnUse"
        x="2"
        y="0"
        width="8"
        height="12"
        // maskType="alpha" // ✅ `mask-type` → `maskType` (카멜케이스 변환)
      >
        <path
          fillRule="evenodd" // ✅ `fill-rule` → `fillRule`
          clipRule="evenodd" // ✅ `clip-rule` → `clipRule`
          d="M2.72592 0.469905C2.4249 0.762787 2.4249 1.23764 2.72592 1.53052L7.31967 6.00002L2.72592 10.4695C2.4249 10.7624 2.4249 11.2373 2.72592 11.5301C3.02694 11.823 3.515 11.823 3.81602 11.5301L9.49988 6.00002L3.81602 0.469905C3.515 0.177024 3.02694 0.177024 2.72592 0.469905Z"
          fill="#006FFD"
        />
      </mask>
      <g mask="url(#mask0_13_10)">
        <rect
          x="0.000244141"
          y="-0.000732422"
          width="11.9995"
          height="11.9995"
          fill="#8F9098"
        />
      </g>
    </svg>
  );
};
