import { useTimer } from "hooks/useTimer"
import { classNames } from "utils/classNames"

interface TimerProps {
  time: number
  countup?: boolean
  color?: string
}

/**
 * @param color text-@@@ 다음과 같이 tailwind css text style에 맞게 전달해야 함
 */
const Timer = (props: TimerProps) => {
  const { time, countup = false, color = "text-black" } = props
  const { seconds } = useTimer(time, countup)

  return <p className={classNames("text-base", color)}>{seconds}</p>
}

export default Timer
