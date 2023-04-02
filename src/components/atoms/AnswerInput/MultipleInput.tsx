import { placeholder } from "./const"

interface MutipleInputProps {
  answer?: string
  onChange?: any
}

const MultipleInput = (props: MutipleInputProps) => {
  const { answer = "", onChange } = props

  return (
    <div className="glassinput">
      <input
        className="h-10 shrink bg-transparent text-center"
        onChange={onChange}
        value={answer}
        placeholder={placeholder}
      />
      <input
        className="h-10 shrink bg-transparent text-center"
        onChange={onChange}
        value={answer}
        placeholder={placeholder}
      />
      <input
        className="h-10 shrink bg-transparent text-center"
        onChange={onChange}
        value={answer}
        placeholder={placeholder}
      />
      <input
        className="h-10 shrink bg-transparent text-center"
        onChange={onChange}
        value={answer}
        placeholder={placeholder}
      />
    </div>
  )
}

export default MultipleInput
