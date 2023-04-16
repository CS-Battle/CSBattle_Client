import { useState } from "react"
import { placeholder } from "./const"

interface MutipleInputProps {
  answer?: string
  onChange?: any
  description: Array<any>
}

const MultipleInput = (props: MutipleInputProps) => {
  const { description } = props
  const defaultObject = description.reduce((a, c, i) => ({ ...a, [`answer${i}`]: "" }), {})
  const [answer, setAnswer] = useState(defaultObject)

  const handleTextValueChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target
    setAnswer({
      ...answer,
      [name]: value,
    })
  }

  const onReset = () => {
    setAnswer(defaultObject)
  }

  return (
    <div className="glassinput gap-5">
      {Object.keys(answer).map((elm: any, index: number) => {
        return (
          <input
            className="h-10 w-1/6 bg-transparent text-center text-xs"
            name={elm}
            onChange={handleTextValueChange}
            value={answer[index]}
            placeholder={placeholder}
          />
        )
      })}
    </div>
  )
}

export default MultipleInput
