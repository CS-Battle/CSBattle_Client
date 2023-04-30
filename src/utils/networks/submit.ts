import { requestOptions } from "utils/request/options"

interface SubmitProps {
  userId: string
  battleId: string
  answer?: string
}
const submit = async (props: SubmitProps) => {
  const { userId="", battleId = "", answer = "" } = props

  const response = await fetch(
    process.env.REACT_APP_SERVER_URL + `battle/answer`,
    requestOptions("POST", {
      battleId: battleId,
      userId: userId,
      answer: answer,
    })
  )
  const result = await response.json()

  console.log(result)
}

export default submit
