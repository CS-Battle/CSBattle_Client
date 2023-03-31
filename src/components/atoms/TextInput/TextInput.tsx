import { classNames } from "utils/classNames"

type TextInputProps = {
  placeholder?: string
  disabled?: boolean
  styles?: React.CSSProperties
  className?: string
  value: string
  onChange?: (event: React.ChangeEvent<HTMLInputElement>) => void
}

const TextInput = (props: TextInputProps) => {
  const { placeholder, styles, className = "", disabled = false, value, onChange } = props
  return (
    <input
      type="text"
      placeholder={placeholder}
      className={classNames("glassinput h-10 w-full rounded-lg font-medium text-lg text-Neutral px-3", className)}
      style={styles}
      disabled={disabled}
      value={value}
      onChange={onChange}
    />
  )
}

export default TextInput
