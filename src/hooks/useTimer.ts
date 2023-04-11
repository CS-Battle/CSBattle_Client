import { useEffect, useState } from "react"

export const useTimer = (time: number, countup?: boolean) => {
  const countUp = countup || false
  const [seconds, setSeconds] = useState<number>(time)

  useEffect(() => {
    const interval = setInterval(() => {
      if (!countUp && seconds <= 0) clearInterval(interval)
      else setSeconds((seconds) => (countUp ? seconds + 1 : seconds - 1))
    }, 1000)
    //TODO : countUp일 때 매칭성공 이벤트 응답 시 alert 띄우는 기능 추가
    if (!countUp && seconds === 0) {
      alert("time out")
      setSeconds(time)
    }
    return () => clearInterval(interval)
  }, [seconds, countUp, time])
  return { seconds }
}