import Footer from "ui/base/organisms/Footer/Footer"
import { Outlet } from "react-router-dom"
import { useState, useEffect } from "react"
import GameStatus from "ui/game/molecules/GameStatus/GameStatus"

interface GameLayoutProps {
  children?: React.ReactElement
}

const GameLayout = (props: GameLayoutProps) => {
  const { children } = props
  const time1 = 5
  const time2 = 10

  //for loading overlay
  const [isLoading, setIsLoading] = useState<boolean>(true)
  const [remainingTime, setRemainingTime] = useState<number>(time1)

  useEffect(() => {
    const timer = setInterval(() => {
      setRemainingTime((prevTime) => prevTime - 1)
    }, 1000)

    return () => {
      clearInterval(timer)
    }
  }, [])

  useEffect(() => {
    if (remainingTime <= 0) {
      setIsLoading(false)
    }
  }, [remainingTime])

  return (
    <div className="background">
      {isLoading ? (
        <div className="overlay">
          <div className="timerText">Game will be start after</div>
          <div className="timerText">{remainingTime} seconds</div>
        </div>
      ) : (
        <div className="w-full h-auto max-w-6xl glassframe">
          <GameStatus time={time2} />
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
