import { useState } from "react"
import { placeholder } from "./const"

interface MutipleInputProps {
  answer?: string
  onChange?: any
}

//state 다르게 설정 어떻게 하지 지금 입력이 다같이 되는뎅
//prevstate?
const MultipleInput = (props: MutipleInputProps) => {
  const [answer, setAnswer] = useState({
    answer0: "",
    answer1: "",
    answer2: "",
    answer3: "",
  })

  const { answer0, answer1, answer2, answer3 } = answer

  const handleTextValueChange = (e: { target: { name: any; value: any } }) => {
    const { name, value } = e.target
    setAnswer({
      ...answer,
      [name]: value,
    })
  }

  const onReset = (e: any) => {
    setAnswer({
      answer0: "",
      answer1: "",
      answer2: "",
      answer3: "",
    })
  }

  return (
    <div className="glassinput gap-5">
      <input
        className="h-10 w-1/6 bg-transparent text-center text-xs"
        name="answer0"
        onChange={handleTextValueChange}
        value={answer0}
        placeholder={placeholder}
      />
      <input
        className="h-10 w-1/6 bg-transparent text-center text-xs"
        name="answer1"
        onChange={handleTextValueChange}
        value={answer1}
        placeholder={placeholder}
      />
      <input
        className="h-10 w-1/6 bg-transparent text-center text-xs"
        name="answer2"
        onChange={handleTextValueChange}
        value={answer2}
        placeholder={placeholder}
      />
      <input
        className="h-10 w-1/6 bg-transparent text-center text-xs"
        name="answer3"
        onChange={handleTextValueChange}
        value={answer3}
        placeholder={placeholder}
      />
    </div>
  )
}

export default MultipleInput
