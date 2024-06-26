interface IButton {
  children: React.ReactNode;
  className?: string;
  onClick?: () => void;
  variant?: "dark" | "light";
}

const Button = ({ children, className, onClick, variant }: IButton) => {
  let buttonStyle = "";
  switch (variant) {
    case "dark":
      buttonStyle = "bg-black text-white";
      break;
    case "light":
      buttonStyle = "bg-white text-black";
      break;
    default:
      buttonStyle = "bg-blue-500";
      break;
  }
  return (
    <button
      onClick={onClick}
      type={"button"}
      className={`w-full border rounded-sm py-2 px-4 whitespace-nowrap items-center text-sm ${buttonStyle} hover:brightness-75 transition-all duration-300 ${className}`}
    >
      {children}
    </button>
  );
};

export default Button;
