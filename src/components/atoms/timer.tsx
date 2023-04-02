import { useTimer } from "hooks/useTimer"

interface TimerProps {
  time: number
}
const Timer = ({ time }: TimerProps) => {
  const { seconds } = useTimer(time)

  return (
    <div className="w-10 h-10 bg-OnPrimary rounded-full grid place-items-center border border-OnPrimaryContainer">
      <p className="text-red-400 text-base">{seconds}</p>
    </div>
  )
}

export default Timer
