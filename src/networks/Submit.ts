import { useLocalstorage } from "hooks/useLocalstorage"
import { requestOptions } from "utils/request/options"

interface SubmitProps {
  battleId: string
  answer?: string
}
const Submit = async (props: SubmitProps) => {
  const { load } = useLocalstorage()
  const userId = load("userId") || ""
  const { battleId = "", answer = "" } = props

  const response = await fetch(
    `http://localhost:8080/battle/answer`,
    requestOptions("POST", {
      battleId: battleId,
      userId: userId,
      answer: answer,
    })
  )
  const result = await response.json()

  console.log(result)
}

export default Submit
