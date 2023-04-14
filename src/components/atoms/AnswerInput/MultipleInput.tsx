import { useState } from "react"
import { placeholder } from "./const"

interface MutipleInputProps {
  answer?: string
  onChange?: any
  description: Array<any> //답변입력 개수
}

//state 다르게 설정 어떻게 하지 지금 입력이 다같이 되는뎅
//prevstate?
const MultipleInput = (props: MutipleInputProps) => {
  const { description } = props

  const object: { [index: string]: string } = {}
  for (var i = 0; i < description.length; i++) {
    object[`answer${i}`] = ""
  }

  const [answer, setAnswer] = useState(object)
  //const { answer0, answer1, answer2, answer3 } = answer 어떻게해야..?
  // const { } = answer

  const handleTextValueChange = (e: { target: { name: any; value: any } }) => {
    const { name, value } = e.target
    setAnswer({
      ...answer,
      [name]: value,
    })
  }

  // reset 기능을 어디에다 둬야하나?
  // const onReset = (e: any) => {
  //   setAnswer({
  //     answer0: "",
  //     answer1: "",
  //     answer2: "",
  //     answer3: "",
  //   })
  // }

  return (
    <div className="glassinput gap-5">
      {Object.keys(object).map((elm: any, index: number) => {
        return (
          <input
            className="h-10 w-1/6 bg-transparent text-center text-xs"
            name={`answer${index}`}
            onChange={handleTextValueChange}
            value={object[index]}
            placeholder={placeholder}
          />
        )
      })}
    </div>
  )
}

export default MultipleInput
