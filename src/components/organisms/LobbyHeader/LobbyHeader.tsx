import NavigatioMenuList from "components/molecules/NavigationMenuList/NavigationMenuList"
import Button from "components/atoms/Button/Button"

import { menuItems } from "./const"

const LobbyHeader = () => {
  return (
    <header className="pt-8 p-3 m-2 text-Neutral">
      <nav className="flex flex-row max-h-full">
        <h1 className="flex-none">CS Battle</h1>
        <div className="flex-none">
          <i className="temp-info"></i>
        </div>
        <NavigatioMenuList menuItems={menuItems} />
        <Button>Sign Up</Button>
      </nav>
      {/* css 중에 transform - scale 찾아보자. (배율 주기) */}
    </header>
  )
}

export default LobbyHeader
