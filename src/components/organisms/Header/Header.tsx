import NavigationMenuList from "components/molecules/NavigationMenuList/NavigationMenuList"
import Button from "../../atoms/Button/Button"
import { classNames } from "../../../utils/classNames"

interface HeaderProps {
  titleName: string
  navMenuItems: Menu[]
  className?: string
}

interface Menu {
  title: string
  url: string
}

const Header = (props: HeaderProps) => {
  const { titleName, navMenuItems, className = "" } = props

  return (
    <header className={classNames("pt-8 pb-3 mb-3 text-gray-700 bg-white border-b border-gray-200", className)}>
      <nav className="flex flex-row max-h-full">
        <h1 className="flex-none">{titleName}</h1>
        <div className="flex-none">
          <i className="temp-info"></i>
        </div>
        <NavigationMenuList menuItems={navMenuItems} className="relative justify-center flex-1" />
        <Button>Sign Up</Button>
      </nav>
      {/* css 중에 transform - scale 찾아보자. (배율 주기) */}
    </header>
  )
}

export default Header
