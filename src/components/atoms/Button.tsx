import { classNames } from "../../utils/classNames";

type ColorType = "primary";
type ColorMap = {
  [key in ColorType]: string;
};
// | "secondary" | "success" | "error" | "info" | "warning"

const colorMap: ColorMap = {
  primary: "bg-Primary text-white",
};

interface ButtonProps {
  children?: JSX.Element | string;
  color?: ColorType;
  disabled?: boolean;
  styles?: React.CSSProperties;
  className?: string;
  onClick?: () => void;
  //   fullWidth: boolean;
  //   variant: "contained" | "outlined" | "text" | string;
}

const Button = (props: ButtonProps) => {
  const { children, color = "primary", styles, className = "", disabled = false, onClick } = props;
  return (
    <button
      className={classNames("rounded-md px-6 py-2 text-base font-medium hover:opacity-80", colorMap[color], className)}
      style={styles}
      disabled={disabled}
      onClick={onClick}
    >
      {children}
    </button>
  );
};

export default Button;
