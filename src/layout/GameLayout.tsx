import Avatar from "components/atoms/Avatar/Avatar"
import TimerBox from "components/atoms/TimerBox/TimerBox"
import Statusbar from "components/atoms/Statusbar/Statusbar"
import Footer from "components/organisms/Footer/Footer"
import { Outlet } from "react-router-dom"

interface GameLayoutProps {
  children?: React.ReactElement
}

const GameLayout = (props: GameLayoutProps) => {
  const { children } = props

  return (
    <div className="background">
      <div className="w-full h-auto max-w-6xl glassframe">
        <div className="statusbox">
          <Avatar name={"user1"}></Avatar>
          <Statusbar num={1}></Statusbar>
          {/* <TimerBox time={30} /> */}
          <Statusbar num={2}></Statusbar>
          <Avatar name={"user2"}></Avatar>
        </div>
        <div>{children || <Outlet />}</div>
      </div>
      <div className="relative justify-center flex-none px-7 py-7">
        <Footer />
      </div>
    </div>
  )
}

export default GameLayout
