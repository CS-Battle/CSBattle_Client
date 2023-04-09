import ProfileDropdown from "components/molecules/ProfileDropdown/ProfileDropdown"
import { useLocalstorage } from "hooks/useLocalstorage"

const LobbyHeader = () => {
  const { load } = useLocalstorage()
  const userName = load("userId")

  return (
    <header className="p-3 pt-8 m-2 border-b-4 border-b-BackgroundBorder">
      <nav className="flex items-center justify-start max-h-full">
        <h1 className="flex-none">CS Battle</h1>
        <div className="flex-none">
          <i className="temp-info"></i>
        </div>
        <div>
          <label>상대방을 기다리는 중 ...</label>
        </div>
        <div className="flex-none ml-auto">
          <ProfileDropdown name={userName} />
        </div>
      </nav>
      {/* css 중에 transform - scale 찾아보자. (배율 주기) */}
    </header>
  )
}

export default LobbyHeader
