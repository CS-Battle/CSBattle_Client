import { describeList } from "./const"

const QuestionBox = () => {
  return (
    <>
      {describeList.map((describe, idx) => (
        <p className="text-Neutral" key={idx}>
          {describe}
        </p>
      ))}
    </>
  )
}

export default QuestionBox
