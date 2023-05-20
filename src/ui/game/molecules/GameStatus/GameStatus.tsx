import Avatar from "ui/base/atoms/Avatar/Avatar"
// import TimerBox from "ui/base/molecules/TimerBox/TimerBox"
import Statusbar from "ui/base/atoms/Statusbar/Statusbar"
import Timer from "ui/base/atoms/Timer/Timer"

interface StatusBoxProps {
  time: number
}

const GameStatus = ({ time }: StatusBoxProps) => {
  return (
    <div className="statusbox">
      <div className="flex flex-row items-center relative">
        <Avatar name={"user1"} image="https://source.boringavatars.com/beam/80/" />
        <div className="-z-10 absolute left-16">
          <Statusbar num={1} />
        </div>
      </div>
      <Timer time={time} color="timerText" />
      <div className="flex z-10 flex-row items-center relative">
        <div className="-z-10 absolute right-16">
          <Statusbar num={2} />
        </div>
        <Avatar name={"user1"} image="https://source.boringavatars.com/beam/80" />
      </div>
    </div>
  )
}

export default GameStatus
