import * as NavigationMenu from "@radix-ui/react-navigation-menu";

interface NavigatioMenuListProps {
  menuItems: Menu[];
}

interface Menu {
  title: string;
  url: string;
}

const NavigatioMenuList = (props: NavigatioMenuListProps) => {
  const { menuItems } = props;

  return (
    <NavigationMenu.Root className="relative flex-1 justify-center z-1">
      <NavigationMenu.List className="relative flex justify-end bg-white pr-4 pt-1">
        {/* <NavigationMenu.Item>
        <NavigationMenu.Trigger>기록장</NavigationMenu.Trigger>
      </NavigationMenu.Item>
      <NavigationMenu.Item>
        <NavigationMenu.Trigger>커뮤니티</NavigationMenu.Trigger>
      </NavigationMenu.Item> */}

        {menuItems.map((item, index) => {
          return (
            <NavigationMenu.Item key={index} className="relative mx-4">
              <NavigationMenu.Link>{item.title}</NavigationMenu.Link>
            </NavigationMenu.Item>
          );
        })}
      </NavigationMenu.List>
    </NavigationMenu.Root>
  );
};

export default NavigatioMenuList;
