import { useState } from "react"
import { useLocalstorage } from "hooks/useLocalstorage"

interface SubmitProps {
  battleId: string,
  answer?: string,
}
const Submit = (props: SubmitProps) => {
  const { load } = useLocalstorage()
  const userId = load("userId") || ""
  const {battleId="", answer=""} = props

  fetch(`http://localhost:8080/battle/answer`, {
    headers: {
      Accept: "application/json, text/plain, */*",
      "Content-Type": "application/json;charset=utf-8",
    },
    method: "POST",
    body: JSON.stringify({
      battleId: battleId,
      userId: userId,
      answer: answer,
    }),
  })
    .then((response) => response.json())
    .then((result) => console.log("result after answer submit : ", result))
}
export default Submit
