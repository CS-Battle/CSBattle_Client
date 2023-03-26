import AnswerInput from "components/atoms/AnswerInput/AnswerInput"
// import Button from "components/atoms/Button/Button"
import PassButton from "components/atoms/Button/PassButton"
import SubmitButton from "components/atoms/Button/SubmitButton"
import QuestionBox from "components/atoms/QuestionBox/QuestionBox"
import React, { useState } from "react"

const GamePage = () => {
  const [answer, setAnswer] = useState("")

  const onChange = (event: React.ChangeEvent<HTMLInputElement>) => setAnswer(event.target.value)
  const onReset = () => setAnswer("")

  return (
    <>
      {/*문제배치*/}
      <div className="flex flex-col p-4 m-2 text-center">
        <QuestionBox />
      </div>
      {/*정답입력칸*/}
      <div className="flex p-4 m-2">
        <AnswerInput answer={answer} onChange={onChange} />
      </div>

      {/*버튼*/}
      <div className="flex flex-row place-content-center">
        <PassButton onClick={() => alert("pass this question")} />
        <SubmitButton
          onClick={() => {
            onReset()
            alert("submit answer")
          }}
        />
      </div>
    </>
  )
}

export default GamePage

//현재 alert -> use dialog...? hook으로 빼두면 어떨까
