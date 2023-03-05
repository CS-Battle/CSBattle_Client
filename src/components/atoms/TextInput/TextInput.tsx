import { classNames } from "utils/classNames";

type TextInputProps = {
  placeholder?: string;
  disabled?: boolean;
  styles?: React.CSSProperties;
  className?: string;
  value: string;
  onChange?: (event: React.ChangeEvent<HTMLInputElement>) => void;
};

const TextInput = (props: TextInputProps) => {
  const { placeholder, styles, className = "", disabled = false, value, onChange } = props;
  return (
    <input
      type="text"
      placeholder={placeholder}
      className={classNames(
        "h-12 w-full bg-gray-200 border-gray-400 border-4 rounded-lg font-bold text-2xl text-gray-600 px-3",
        className
      )}
      style={styles}
      disabled={disabled}
      value={value}
      onChange={onChange}
    />
  );
};

export default TextInput;
