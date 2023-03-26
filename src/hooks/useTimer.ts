import { useEffect, useState } from "react"
// import TimeoutAlertDialog from "components/molecules/TimeoutAlertDialog"

export const useTimer = (time: number) => {
  const [seconds, setSeconds] = useState<number>(time)

  useEffect(() => {
    const interval = setInterval(() => {
      if (seconds <= 0) clearInterval(interval)
      else setSeconds((seconds) => seconds - 1)
    }, 1000)
    if (seconds === 0) {
      alert("time out")
      setSeconds(30)
    }
    return () => clearInterval(interval)
  }, [seconds])

  return { seconds }
}
