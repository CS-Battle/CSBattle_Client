import { useEffect } from "react"
import { getQuestion } from "utils/api/battle"

type Question = {
  questionId: string
  content: string
}

type AnswerResult = {
  userId: string
  questionIdx: number
  isCorrect: boolean
}

export const useSSE = (userId: string) => {
  useEffect(() => {
    const eventSource = new EventSource(`${process.env.REACT_APP_SERVER_URL}/connect/${userId}`)

    if (eventSource.readyState === eventSource.OPEN) {
      attachEventListeners(eventSource)
    }

    return () => {
      detachEventListeners(eventSource)
      eventSource.close()
    }
  }, [userId])
}

const sseListener = (event: MessageEvent<any>) => {
  const { data } = event
  console.log("event.data : " + data)
}

const battleStartListener = (event: MessageEvent<any>) => {
  const { data } = event
  const { userId, battleId } = JSON.parse(data)
  console.log("battle started!! battle id : ", battleId)
  getQuestion(userId, battleId)
  alert("battle started!!")
}

const answerResultListener = (event: MessageEvent<any>) => {
  const { data } = event
  const { userId, questionIdx, isCorrect }: AnswerResult = JSON.parse(data)

  const text = `${userId}님이 ${questionIdx}번째 문제${
    isCorrect ? "번째 문제의 정답을 맞추셨습니다!" : "번째 문제를 틀리셨습니다 ㅜㅜ"
  }`
  alert(text)
}

const opponentLeftListener = (event: MessageEvent<any>) => {
  const { data } = event
  const { message } = JSON.parse(data)
  alert(message)
  window.location.reload()
}

const checkingConnectionListener = (event: MessageEvent<any>) => {
  // const { data: message } = event
}
const questionListener = (event: MessageEvent<any>) => {
  const { data } = event
  const { questionId, content }: Question = JSON.parse(data)
  console.log(`ID: ${questionId}, 문제 : ${content}`)
}

const timeOutListener = (event: MessageEvent<any>) => {
  const { data } = event
  const { message } = JSON.parse(data)
  alert(message)
}

const listenerList: Array<[string, (event: MessageEvent<any>) => any]> = [
  ["sse", sseListener],
  ["battle-start", battleStartListener],
  ["answer-result", answerResultListener],
  ["opponent-left", opponentLeftListener],
  ["checking-connection", checkingConnectionListener],
  ["Question", questionListener],
  ["timeOut", timeOutListener],
]

const attachEventListeners = (eventSource: EventSource) => {
  listenerList.forEach(([eventType, listener]) => eventSource.addEventListener(eventType, listener))
}

const detachEventListeners = (eventSource: EventSource) => {
  listenerList.forEach(([eventType, listener]) => eventSource.removeEventListener(eventType, listener))
}
