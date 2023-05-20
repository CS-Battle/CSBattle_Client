import Avatar from "ui/base/atoms/Avatar/Avatar"
import TimerBox from "ui/base/molecules/TimerBox/TimerBox"
import Statusbar from "ui/base/atoms/Statusbar/Statusbar"
import Footer from "ui/base/organisms/Footer/Footer"
import { Outlet } from "react-router-dom"
import { useState, useEffect } from "react"

interface GameLayoutProps {
  children?: React.ReactElement
}

const GameLayout = (props: GameLayoutProps) => {
  const { children } = props
  //for testing
  const time1 = 10
  const time2 = 50

  const [isLoading, setIsLoading] = useState<boolean>(true)
  const [remainingTime, setRemainingTime] = useState<number>(time1)

  useEffect(() => {
    const timer = setInterval((prevTime) => {
      setRemainingTime((prevTime) => prevTime - 1)
    }, 1000)

    if (remainingTime <= 0) {
      setIsLoading(false)
      clearInterval(timer)
    }
    return () => {
      clearInterval(timer)
    }
  }, [remainingTime])

  return (
    <div className="background">
      {isLoading ? (
        <div className="overlay">
          <div className="timerText">Game will start in</div>
          <div className="timerText">{remainingTime} seconds</div>

          {/* <div className="text-white">Loading... </div> */}
        </div>
      ) : (
        <div className="w-full h-auto max-w-6xl glassframe">
          <div className="statusbox">
            <div className="flex flex-row items-center relative">
              <Avatar name={"user1"} image="https://source.boringavatars.com/beam/80/" />
              <div className="-z-10 absolute left-16">
                <Statusbar num={1} />
              </div>
            </div>
            <TimerBox time={time2} />
            <div className="flex z-10 flex-row items-center relative">
              <div className="-z-10 absolute right-16">
                <Statusbar num={2} />
              </div>
              <Avatar name={"user1"} image="https://source.boringavatars.com/beam/80" />
            </div>
          </div>
          <div>{children || <Outlet />}</div>
        </div>
      )}
      <div className="relative justify-center flex-none px-7 py-7">
        <Footer />
      </div>
    </div>
  )
}

export default GameLayout
