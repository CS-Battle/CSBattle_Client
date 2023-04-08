import { placeholder } from "./const"

interface MutipleInputProps {
  answer?: string
  onChange?: any
}

//state 다르게 설정 어떻게 하지 지금 입력이 다같이 되는뎅
const MultipleInput = (props: MutipleInputProps) => {
  const { answer = "", onChange } = props

  return (
    <div className="glassinput gap-5">
      <input
        className="h-10 w-1/6 bg-transparent text-center text-xs"
        onChange={onChange}
        value={answer}
        placeholder={placeholder}
      />
      <input
        className="h-10 w-1/6 bg-transparent text-center text-xs"
        onChange={onChange}
        value={answer}
        placeholder={placeholder}
      />
      <input
        className="h-10 w-1/6 bg-transparent text-center text-xs"
        onChange={onChange}
        value={answer}
        placeholder={placeholder}
      />
      <input
        className="h-10 w-1/6 bg-transparent text-center text-xs"
        onChange={onChange}
        value={answer}
        placeholder={placeholder}
      />
    </div>
  )
}

export default MultipleInput
