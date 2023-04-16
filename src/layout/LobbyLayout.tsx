import { Outlet } from "react-router-dom"
import { createContext, useState } from "react"
import LobbyHeader from "components/organisms/LobbyHeader/LobbyHeader"
import Footer from "components/organisms/Footer/Footer"

export const LobbyContext = createContext({ showTimer: false, setShowTimer: (showTimer: boolean) => {} })

const LobbyLayout = () => {
  const [showTimer, setShowTimer] = useState(false)
  return (
    <div className="background ">
      <div className="w-full h-full max-w-6xl glassframe">
        <LobbyContext.Provider value={{ showTimer, setShowTimer }}>
          <LobbyHeader />
          <div className="flex-1">
            <Outlet />
          </div>
        </LobbyContext.Provider>
      </div>

      <div className="relative justify-center flex-none px-7 py-7">
        <Footer />
      </div>
    </div>
  )
}

export default LobbyLayout
