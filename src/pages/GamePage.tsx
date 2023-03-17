import Button from "components/atoms/Button/Button"
import React, { useState } from "react"

const GamePage = () => {
  const [answer, setAnswer] = useState("")

  const onChange = (event: React.ChangeEvent<HTMLInputElement>) => setAnswer(event.target.value)
  const onReset = () => setAnswer("")

  const test = "hihello"
  // const mixFunction = () => {
  //   onReset
  //   alert("submit answer")
  // }

  return (
    // <>
    //   <div className="flex flex-col min-h-screen min-w-screen mx-2 overflow-x-hidden bg-slate-300">
    //     {/*문제배치*/}
    //     <div className="flex basis-80 flex-row p-4 m-2 gap-2 gap-y-4 bg-slate-500">
    //       <p className="text-gray-800 hover:text-red-600">문제 배치 장소</p>
    //     </div>
    //     {/*정답입력칸*/}
    //     <div className="flex flex-col basis-72 p-4 m-2 gap-2 gap-y-4 bg-slate-500">
    //       <p className="text-gray-800 hover:text-red-600">정답입력칸</p>
    //       <input onChange={onChange} value={answer}></input>
    //       {/* <button onClick={onReset}>submit</button> */}
    //     </div>
    //   </div>
    //   <div className="flex flex-row place-content-center">
    //     <Button className="m-5 p-2 w-44" onClick={() => alert("pass this question")}>
    //       pass button
    //     </Button>
    //     <Button
    //       className="m-5 p-2 w-44"
    //       onClick={() => {
    //         onReset()
    //         alert("submit answer")
    //       }}
    //     >
    //       submit button
    //     </Button>
    //   </div>
    // </>
    <>
      {/*문제배치*/}
      <div className="flex-auto flex-col min-w-screen m-2 mx-2 overflow-x-hidden bg-slate-300">
        <div className="flex h-72 flex-col p-4 m-2 gap-2 gap-y-4 text-center bg-slate-500">
          <p className="text-gray-800 hover:text-red-600">문제 배치 장소</p>
          <p className="text-gray-800 ">{test}</p>
        </div>
      </div>
      {/*정답입력칸*/}
      <div className="flex-auto flex-col min-w-screen m-2 mx-2 overflow-x-hidden bg-slate-300">
        <div className="relative flex flex-col basis-48 rounded-3xl p-4 m-2 gap-2 items-center justify-center bg-slate-500">
          <p className="text-gray-800 hover:text-red-600">정답입력칸</p>
          {/*임시 정답 입력칸*/}
          <input className="w-60 h-10" onChange={onChange} value={answer}></input>
        </div>
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
