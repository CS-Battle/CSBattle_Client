import * as NavigationMenu from "@radix-ui/react-navigation-menu"
import { Menu } from "types/menu"
interface NavigationMenuListProps {
  menuItems: Menu[]
  className?: string
}

const NavigatioMenuList = (props: NavigationMenuListProps) => {
  const { menuItems } = props

  return (
    <NavigationMenu.Root className="relative justify-center flex-1 z-1">
      <NavigationMenu.List className="relative flex justify-end pt-1 pr-4 text-Neutral">
        {menuItems.map((item, index) => {
          return (
            <NavigationMenu.Item key={index} className="relative mx-4">
              <NavigationMenu.Link>{item.title}</NavigationMenu.Link>
            </NavigationMenu.Item>
          )
        })}
      </NavigationMenu.List>
    </NavigationMenu.Root>
  )
}

export default NavigatioMenuList
