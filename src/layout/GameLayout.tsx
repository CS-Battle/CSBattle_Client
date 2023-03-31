import Avatar from "components/atoms/Avatar/Avatar"
import Timer from "components/atoms/Timer/Timer"
import Footer from "components/organisms/Footer/Footer"
import { Outlet } from "react-router-dom"

interface GameLayoutProps {
  children?: React.ReactElement
}

const GameLayout = ({ children }: GameLayoutProps) => {
  // const {} = props

  return (
    <div className="background">
      <div className="glassframe w-full max-w-5xl h-auto">
        <div className="statusbox">
          <Avatar name={"user1"}></Avatar>
          <h1>status bar</h1>
          <Timer time={30} />
          <h1>status bar</h1>
          <Avatar name={"user2"}></Avatar>
        </div>
        <div>{children || <Outlet />}</div>
      </div>
      <div className="relative flex-none px-7 py-7 justify-center">
        <Footer />
      </div>
    </div>
  )
}

export default GameLayout
