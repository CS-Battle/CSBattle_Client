import Button from "components/atoms/Button/Button"
import React, { useState } from "react"

interface MutipleInputProps {
  // children?: JSX.Element | string
  // color?: ColorType
  // disabled?: boolean
  // styles?: React.CSSProperties
  // className?: string
  answer?: string
  onChange?: any
  description?: any
  //   fullWidth: boolean
  //   variant: "contained" | "outlined" | "text" | string
}

const MultipleInput = (props: MutipleInputProps) => {
  const { answer = "", onChange, description } = props

  return (
    <>
      <div className="glassinput">
        <input
          className="h-10 shrink bg-transparent text-center"
          onChange={onChange}
          value={answer}
          placeholder="정답 입력"
        />
        <input
          className="h-10 shrink bg-transparent text-center"
          onChange={onChange}
          value={answer}
          placeholder="정답 입력"
        />
        <input
          className="h-10 shrink bg-transparent text-center"
          onChange={onChange}
          value={answer}
          placeholder="정답 입력"
        />
        <input
          className="h-10 shrink bg-transparent text-center"
          onChange={onChange}
          value={answer}
          placeholder="정답 입력"
        />
      </div>
    </>
  )
}

export default MultipleInput
