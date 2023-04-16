
interface getQuestionProps {
  userId: string
  battleId: string
}

export async function getQuestion(props: getQuestionProps) {
  const { userId = "", battleId = "" } = props

  const params = new URLSearchParams({
    userId: userId,
    battleId: battleId,
  })

  await fetch(process.env.REACT_APP_SERVER_URL + "battle/question?" + params)
}
