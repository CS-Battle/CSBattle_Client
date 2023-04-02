import { QuestionType } from "types/game"
import MultipleInput from "./MultipleInput"
import SelectionInput from "./SelectionInput"
import SingleInput from "./SingleInput"

interface AnswerInputProps {
  answer?: string
  onChange?: any
  questionType?: QuestionType
  description?: string
}

const AnswerInput = (props: AnswerInputProps) => {
  const { answer, onChange, questionType, description } = props

  switch (questionType) {
    case QuestionType.blank:
    case QuestionType.shortAnswer:
      return <SingleInput answer={answer} onChange={onChange} />
    case QuestionType.order:
      return <MultipleInput answer={answer} onChange={onChange} />
    case QuestionType.multiChoice:
      return <SelectionInput />
    default:
      // TODO: Empty 또는 Error 케이스에 대한 처리
      return <></>
  }
}

export default AnswerInput
