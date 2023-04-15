import PassButton from "components/atoms/PassButton/PassButton"
import SubmitButton from "components/atoms/SubmitButton/SubmitButton"
import QuestionBox from "components/atoms/QuestionBox/QuestionBox"
import React, { useRef, useState } from "react"
import { dummy } from "./const"
import AnswerInputType from "components/molecules/AnswerInputType/AnswerType"

const GamePage = () => {
  const [answer, setAnswer] = useState("")

  const onChange = (event: React.ChangeEvent<HTMLInputElement>) => setAnswer(event.target.value)
  const onReset = () => setAnswer("")
  const onSubmitClick = () => {
    onReset()
    alert("submit answer")
  }
  const onPassClick = () => alert("pass this question")
  const { questionType, description, content } = dummy.data

  return (
    <>
      {/*문제배치*/}
      <div className="flex flex-col p-4 text-center">
        <QuestionBox content={content} />
      </div>
      {/*정답입력칸*/}
      <div className="flex p-4">
        <AnswerInputType answer={answer} onChange={onChange} questionType={questionType} description={description} />
      </div>

      {/*버튼*/}
      <div className="flex flex-row place-content-center m-2">
        <PassButton onClick={onPassClick} />
        <SubmitButton onClick={onSubmitClick} />
      </div>
    </>
  )
}

export default GamePage
