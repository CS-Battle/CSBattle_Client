import Button from "components/atoms/Button/Button"
import React, { useState } from "react"
import MultipleInput from "./MultipleInput"
import SelectionInput from "./SelectionInput"
import SingleInput from "./SingleInput"

interface AnswerTypeProps {
  // children?: JSX.Element | string
  // color?: ColorType
  // disabled?: boolean
  // styles?: React.CSSProperties
  // className?: string
  answer?: string
  onChange?: any
  questionType?: string
  description?: string
  // questionContent?: string

  //   fullWidth: boolean
  //   variant: "contained" | "outlined" | "text" | string
}

const AnswerType = (props: AnswerTypeProps) => {
  const { answer, onChange, questionType, description } = props

  function Input() {
    const qType = questionType

    if (qType == "빈칸" || qType == "단답식") {
      return <SingleInput answer={answer} onChange={onChange} />
    } else if (qType == "순서맞추기") {
      return <MultipleInput answer={answer} onChange={onChange} description={description} />
    } else if (qType == "객관식") {
      return <SelectionInput answer={answer} onChange={onChange} />
    }
  }

  return Input()
}

export default AnswerType
