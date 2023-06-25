import axios from "axios"

type Question = {}

export const getQuestion = async (userId: string, battleId: number) => {
  try {
    const params = new URLSearchParams({ userId, battleId: battleId.toString() })
    return axios.get<Question>(`${buildUrl()}/question?${params}`)
  } catch (error) {
    console.log(error)
  }
}

export const submitAnswer = async (userId: string, battleId: number, answer: string) => {
  try {
    const body = { userId, battleId, answer }
    return axios.post(`${buildUrl()}/answer`, body)
  } catch (error) {
    console.log(error)
  }
}

const buildUrl = () => {
  return `${process.env.REACT_APP_SERVER_URL}/battle`
}
