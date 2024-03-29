import { useContext, useEffect } from "react"
import ProfileDropdown from "ui/base/molecules/ProfileDropdown/ProfileDropdown"
import { useLocalstorage } from "hooks/useLocalstorage"
import Timer from "ui/base/atoms/Timer/Timer"
import { LobbyContext } from "layout/LobbyLayout"

import LogoImage from "assets/images/logo.png"

const LobbyHeader = () => {
  const { load } = useLocalstorage()
  const { showTimer } = useContext(LobbyContext)
  const userName = load("userId")

  // 새로고침 방지
  const preventReload = (e: BeforeUnloadEvent) => {
    e.preventDefault()
    e.returnValue = ""
  }

  useEffect(() => {
    window.addEventListener("beforeunload", preventReload)

    return () => {
      window.removeEventListener("beforeunload", preventReload)
    }
  }, [])

  return (
    <header className="p-3 pt-8 m-2 border-b-4 border-b-BackgroundBorder">
      <nav className="flex items-center justify-start max-h-20">
        <div className="flex-none">
          <img className="" alt="CS Battle" src={LogoImage} />
        </div>
        {showTimer && (
          <div className="flex flex-none mx-8">
            <label>상대방을 기다리는 중 ... </label>
            <Timer time={0} countup={true} />
            <label>초</label>
          </div>
        )}
        <div className="flex-none ml-auto">
          <ProfileDropdown name={userName} />
        </div>
      </nav>
      {/* css 중에 transform - scale 찾아보자. (배율 주기) */}
    </header>
  )
}

export default LobbyHeader
