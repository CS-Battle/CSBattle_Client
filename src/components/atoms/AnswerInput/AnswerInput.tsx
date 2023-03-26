import Button from "components/atoms/Button/Button"
import React, { useState } from "react"

interface AnswerInputProps {
  // children?: JSX.Element | string
  // color?: ColorType
  // disabled?: boolean
  // styles?: React.CSSProperties
  // className?: string
  answer?: string
  onChange?: any
  //   fullWidth: boolean
  //   variant: "contained" | "outlined" | "text" | string
}

const AnswerInput = (props: AnswerInputProps) => {
  const { answer = "", onChange } = props

  // 문제 형태별 조건처리..? if문 돌릴때 왜 오류생기냐 계속
  // const a = 1
  // const a = 2
  // if (a === 1) {
  // {/* 단답형, 빈칸 채우기 유형 입력 */}

  return (
    <>
      <div className="glassinput">
        {/* <div className="glassbutton"> */}
        {/* <p className="text-gray-800 hover:text-red-600">정답입력칸</p> */}
        {/*임시 정답 입력칸relative flex flex-col basis-48 rounded-3xl p-4 m-2 gap-2 items-center justify-center bg-white*/}
        <input className="h-10 bg-transparent text-center" onChange={onChange} value={answer} placeholder="정답 입력" />
        {/* </div> */}
      </div>
    </>
  )
  // } else if (a == 2) {
  //   return (
  //     <>
  //       <div className="glassinput">
  //         {/*객관식 선택 유형 답변 선택택*/}
  //       </div>
  //     </>
  //   ) }
  // } else if (a == 3) {
  //   return (
  //     <>
  //       <div className="glassinput">
  //         {/*순서 맞추기 유형 입력*/}
  //       </div>
  //     </>
  //   ) }
}

export default AnswerInput
