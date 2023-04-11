import Statusbar from "components/atoms/Statusbar/Statusbar"
import TimerBox from "components/atoms/TimerBox/TimerBox"
import Avatar from "components/atoms/Avatar/Avatar"

const GameStatus = () => {
  return (
    <div className="">
      <Avatar name={"user1"} />
      <Statusbar num={1} />
      <TimerBox time={30} />
      <Statusbar num={2} />
      <Avatar name={"user2"} />
    </div>
  )
}

export default GameStatus
