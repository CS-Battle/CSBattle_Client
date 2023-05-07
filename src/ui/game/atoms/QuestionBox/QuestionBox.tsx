interface QuestionBoxProps {
  content?: string
}

const QuestionBox = (props: QuestionBoxProps) => {
  const { content } = props

  return (
    <div className="questionBox">
      <p>{content}</p>
    </div>
  )
}

export default QuestionBox
