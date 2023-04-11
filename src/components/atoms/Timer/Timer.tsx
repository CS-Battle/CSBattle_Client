import { useTimer } from "hooks/useTimer"
import {classNames} from "utils/classNames"

interface TimerProps {
  className?: string
  time: number
  countup?: boolean
  color?: string
}

const Timer = (props: TimerProps) => {
  const { time, countup=false, color="black", className=""} = props
  const { seconds } = useTimer(time, countup)
  const _color = "text-" + color

  return (
    <p className={classNames("text-base", _color)}>{seconds}</p>
  )
}

export default Timer
