import Button from "components/atoms/Button/Button"
import React, { useState } from "react"

const GamePage = () => {
  const [answer, setAnswer] = useState("")

  const onChange = (event: React.ChangeEvent<HTMLInputElement>) => setAnswer(event.target.value)
  const onReset = () => setAnswer("")

  const test1 = "문제가 들어갈 장소입니다."
  const test2 = "하단의 정답 입력칸에 정답을 입력합니다."
  // const mixFunction = () => {
  //   onReset
  //   alert("submit answer")
  // }

  return (
    <>
      {/*문제배치*/}
      <div className="flex-auto flex-col min-w-screen m-2 mx-2 overflow-x-hidden">
        <div className="flex h-72 flex-col p-4 m-2 gap-2 gap-y-4 text-center">
          <p className="text-gray-800 hover:text-red-600">문제 배치 장소</p>
          <span className="text-gray-800 ">
            {test1} {test2}
          </span>
        </div>
      </div>
      {/*정답입력칸 flex-auto flex-col min-w-screen m-2 mx-2 overflow-x-hidden*/}
      <div className="glassinput">
        {/* <div className="glassbutton"> */}
        {/* <p className="text-gray-800 hover:text-red-600">정답입력칸</p> */}
        {/*임시 정답 입력칸relative flex flex-col basis-48 rounded-3xl p-4 m-2 gap-2 items-center justify-center bg-white*/}
        <input
          className="w-60 h-10 bg-transparent text-center"
          onChange={onChange}
          value={answer}
          placeholder="정답 입력"
        />
        {/* </div> */}
      </div>
      {/*버튼..?*/}
      <div className="flex flex-row place-content-center">
        <Button className="m-5 p-2 w-44" onClick={() => alert("pass this question")}>
          pass button
        </Button>
        <Button
          className="m-5 p-2 w-44"
          onClick={() => {
            onReset()
            alert("submit answer")
          }}
        >
          submit button
        </Button>
      </div>
    </>
  )
}

export default GamePage

//현재 alert -> use dialog...? hook으로 빼두면 어떨까
