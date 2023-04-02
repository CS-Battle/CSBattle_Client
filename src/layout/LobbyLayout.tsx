import { Outlet } from "react-router-dom"
import LobbyHeader from "components/organisms/LobbyHeader/LobbyHeader"
import Footer from "components/organisms/Footer/Footer"

const LobbyLayout = () => {
  return (
    <div className="background ">
      <div className="glassframe">
        <LobbyHeader />
        <div className="flex-1">
          <Outlet />
        </div>
      </div>

      <div className="relative flex-none px-7 py-7 justify-center">
        <Footer />
      </div>
    </div>
  )
}

export default LobbyLayout
