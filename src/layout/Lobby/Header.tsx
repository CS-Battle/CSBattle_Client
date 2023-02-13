import Button from '../../components/atoms/Button/Button'
import * as NavigationMenu from '@radix-ui/react-navigation-menu';

const MenuItems = [
  {
      title: '기록장',
      url: '#',
  },
  {
      title: '랭킹',
      url: '#',
  },
  {
      title: '커뮤니티',
      url: '#',
  },
]


const Header = () => {
  return (
    <header className="relative w-full h-1/6 md:h-1/5 inset-x-0 top-0 z-40 left-0 bg-white text-gray-700 body-font border-b border-gray-200">
      <nav className='flex flex-row'>
        <h1 className="flex-none">CS Battle</h1>
        <div className="flex-none">
            <i className='temp-info'></i>
        </div>
        <NavigationMenu.Root className='relative flex-1 justify-center z-1'>
          <NavigationMenu.List className='relative flex justify-end bg-white pr-4 pt-1'>
            {/* <NavigationMenu.Item>
              <NavigationMenu.Trigger>기록장</NavigationMenu.Trigger>
            </NavigationMenu.Item>
            <NavigationMenu.Item>
              <NavigationMenu.Trigger>커뮤니티</NavigationMenu.Trigger>
            </NavigationMenu.Item> */}

            {MenuItems.map((item, index)=>{
              return (
                <NavigationMenu.Item key={index} className='relative mx-4'>
                  <NavigationMenu.Link>{item.title}</NavigationMenu.Link>
                </NavigationMenu.Item>
              )
            })}
          </NavigationMenu.List>
        </NavigationMenu.Root>
        <Button>Sign Up</Button>
      </nav>
        {/* css 중에 transform - scale 찾아보자. (배율 주기) */}
    </header>
  );
};

export default Header;

