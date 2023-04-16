import { QuestionType } from "types/game"
import MultipleInput from "../../atoms/Input/MultipleInput"
import SelectionInput from "../../atoms/Input/SelectionInput"
import SingleInput from "../../atoms/Input/SingleInput"

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
