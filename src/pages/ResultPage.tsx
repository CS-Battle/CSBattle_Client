import Button from "ui/base/atoms/Button/Button"
import { useState, useEffect } from "react"
import { useSSE } from "hooks/useSSE"

const ResultPage = () => {
  const [result, setResult] = useState("")

  const userId = "user1" //유저 아이디 활용
  useSSE(userId)

  useEffect(() => {
    // useSSE 함수에서 처리한 결과를 기반으로 승리 여부 결정
    // 승리 여부에 따라 결과를 설정

    // 승리 여부를 설정하는 조건을 작성해야 함
    // 현재는 임의로 승리상태로
    const isWin = true

    if (isWin) {
      setResult("YOU WIN!")
    } else {
      setResult("YOU LOSE!")
    }

    // 마운트 해제 시 SSE 이벤트 리스너를 해제
    return () => {
      const eventSource = new EventSource(`${process.env.REACT_APP_SERVER_URL}
      /connect/${userId}`)
      eventSource.close()
    }
  }, [userId])

  const time = "00:00:00"
  const matchScore = "1 : 0"

  const handleClick = () => alert("now testing")

  return (
    <>
      {/*버튼*/}
      <div className="flex flex-row place-content-center">
        <div className="glassbutton w-3/5 h-full gap-4">
          <div className="italic font-black text-5xl mt-8 mb-5">{result}</div>
          <div className="glassbuttonSelected table w-3/5 h-full mb-7">
            <table className="border-spacing-4 border-separate">
              <tr>
                <td className="whitespace-pre-line text-white text-sm">
                  Match Score {"("}user1:user2{")"}
                </td>
                <td className="text-indigo-800 font-extrabold text-lg">{matchScore}</td>
              </tr>
              <tr>
                <td className="whitespace-pre-line text-white text-sm">Time</td>
                <td className="text-indigo-800 font-extrabold text-lg">{time}</td>
              </tr>
            </table>
          </div>
          <div className="mb-5">
            <Button className="mx-2" onClick={handleClick}>
              Quiz Exlpore
            </Button>
            <Button className="mx-2" onClick={handleClick}>
              Go to Lobby
            </Button>
          </div>
        </div>
      </div>
    </>
  )
}

export default ResultPage
