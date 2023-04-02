import Button from "components/atoms/Button/Button"
import React, { useState } from "react"

interface SingleInputProps {
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

const SingleInput = (props: SingleInputProps) => {
  const { answer = "", onChange } = props

  return (
    <>
      <div className="glassinput w-4/5">
        <input className="h-10 bg-transparent text-center" onChange={onChange} value={answer} placeholder="정답 입력" />
      </div>
    </>
  )
}

export default SingleInput
