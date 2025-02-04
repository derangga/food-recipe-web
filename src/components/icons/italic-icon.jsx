export const ItalicIcon = ({ size = "size-4", color = "currentColor" }) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      fill="none"
      viewBox="0 0 24 24"
      strokeWidth={2.5}
      stroke={color}
      className={size}
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M5.248 20.246H9.05m0 0h3.696m-3.696 0 5.893-16.502m0 0h-3.697m3.697 0h3.803"
      />
    </svg>
  );
};

export default ItalicIcon;
