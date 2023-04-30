import {getQuestion} from "utils/networks/getQuestion"

type Question = {
  questionId: string
  content: string
}

type AnswerResult = {
  userId: string
  questionIdx: number
  isCorrect: boolean
}

export function connect(userId: string) {
  // const [questionId, setQuestionId] = useState("")
  const _userId = userId || ""

  const eventSource = new EventSource(process.env.REACT_APP_SERVER_URL + 'connect/' + _userId)

  eventSource.addEventListener("sse", (event) => {
    console.log("event.data : " + event.data)
  })

  eventSource.addEventListener(`battle-start`, (e) => {
    const { data: battleId } = e
    console.log("battle started!! battle id : ", battleId)
    getQuestion({ userId: _userId, battleId: battleId })
    alert("battle started!!")
  })

  eventSource.addEventListener(`answer-result`, (e) => {
    const { data: answerResult } = e
    const answerResultJson = JSON.parse(answerResult) as AnswerResult

    console.log("answerResultJson : ", answerResultJson)

    if (answerResultJson.isCorrect) {
      alert(answerResultJson.userId + "님이 " + answerResultJson.questionIdx + "번째 문제의 정답을 맞추셨습니다!")
    } else {
      alert(answerResultJson.userId + "님이 " + answerResultJson.questionIdx + "번째 문제를 틀리셨습니다 ㅜㅜ")
    }
  })

  eventSource.addEventListener(`opponent-left`, (e) => {
    const { data: message } = e
    alert(message)
    window.location.reload()
  })

  eventSource.addEventListener(`checking-connection`, (e) => {
    const { data: message } = e
  })

  eventSource.addEventListener("Question", (e) => {
    const { data: questionJson } = e
    const question = JSON.parse(questionJson) as Question
    console.log("ID : ", question.questionId, "문제 : ", question.content)
  })

  eventSource.addEventListener("timeOut", (e) => {
    const { data: timelimit } = e
    alert(timelimit)
  })
}
