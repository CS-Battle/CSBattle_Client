import Footer from "ui/base/organisms/Footer/Footer"
import { Outlet } from "react-router-dom"
import { useState, useEffect } from "react"
import GameStatus from "ui/game/molecules/GameStatus/GameStatus"

interface ResultLayoutProps {
  children?: React.ReactElement
}

const ResultLayout = (props: ResultLayoutProps) => {
  const { children } = props

  return (
    <div className="background">
      <div className="w-full h-4/5 max-w-6xl glassframe">
        <div>{children || <Outlet />}</div>
      </div>

      <div className="relative justify-center flex-none px-7 py-7">
        <Footer />
      </div>
    </div>
  )
}

export default ResultLayout
