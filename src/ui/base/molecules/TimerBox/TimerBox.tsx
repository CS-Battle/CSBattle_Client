import { useTimer } from "hooks/useTimer"
import Timer from "../../atoms/Timer/Timer"

interface TimerBoxProps {
  time: number
  countup?: boolean
}

const TimerBox = (props: TimerBoxProps) => {
  const { time, countup = false } = props
  const { seconds } = useTimer(time, countup)

  return (
    <div className="grid w-10 h-10 border rounded-full bg-OnPrimary place-items-center border-OnPrimaryContainer">
      {/* <p className="text-base text-red-400">{seconds}</p> */}
      <Timer time={seconds} color="text-red-400" countup={countup} />
    </div>
  )
}

export default TimerBox
