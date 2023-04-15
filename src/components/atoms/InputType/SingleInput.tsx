import { placeholder } from "./const"

interface SingleInputProps {
  answer?: string
  onChange?: any
}

const SingleInput = (props: SingleInputProps) => {
  const { answer = "", onChange } = props

  return (
    <div className="glassinput w-4/5">
      <input className="h-10 bg-transparent text-center" onChange={onChange} value={answer} placeholder={placeholder} />
    </div>
  )
}

export default SingleInput
