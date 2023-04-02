import Statusbar from "components/atoms/statusbar"
import Timer from "components/atoms/timer"
import Avatar from "components/atoms/Avatar/Avatar"

const GameStatus = () => {
  return (
    <div className="">
      <Avatar name={"user1"} />
      <Statusbar num={1} />
      <Timer time={30} />
      <Statusbar num={2} />
      <Avatar name={"user2"} />
    </div>
  )
}

export default GameStatus
