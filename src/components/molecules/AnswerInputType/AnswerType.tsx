import { QuestionType } from "types/game"
import MultipleInput from "../../atoms/InputType/MultipleInput"
import SelectionInput from "../../atoms/InputType/SelectionInput"
import SingleInput from "../../atoms/InputType/SingleInput"
import { forwardRef, useImperativeHandle, useRef } from "react"

interface AnswerInputTypeProps {
  answer?: string
  onChange?: any
  questionType?: QuestionType
  description?: any
}

const AnswerInputType = (props: AnswerInputTypeProps) => {
  const { answer, onChange, questionType, description } = props

  switch (questionType) {
    case QuestionType.blank:
    case QuestionType.shortAnswer:
      return <SingleInput answer={answer} onChange={onChange} />
    case QuestionType.order:
      return <MultipleInput answer={answer} onChange={onChange} description={description} />
    case QuestionType.multiChoice:
      return <SelectionInput description={description} />
    default:
      // TODO: Empty 또는 Error 케이스에 대한 처리
      return <></>
  }
}

export default AnswerInputType
