import { Outlet } from "react-router-dom"
import LobbyHeader from "components/organisms/LobbyHeader/LobbyHeader"
import Footer from "components/organisms/Footer/Footer"

const LobbyLayout = () => {
  return (
    <div className="background ">
      <div className="w-full h-full max-w-6xl glassframe">
        <LobbyHeader />
        <div className="flex-1">
          <Outlet />
        </div>
      </div>

      <div className="relative justify-center flex-none px-7 py-7">
        <Footer />
      </div>
    </div>
  )
}

export default LobbyLayout
