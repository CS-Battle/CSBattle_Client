import * as DropdownMenu from "@radix-ui/react-dropdown-menu"
import { ChevronDownIcon } from "@radix-ui/react-icons"
import Label from "components/atoms/radix/Label/Label"
import { profileDropdownItems } from "./const"

interface ProfileDropdownProps {
  name: string
}

const ProfileDropdown = (props: ProfileDropdownProps) => {
  const { name = "ㅇㅇ" } = props
  return (
    <DropdownMenu.Root>
      <DropdownMenu.Trigger>
        <div className="flex flex-row">
          <Label>{name}님, 환영합니다!</Label>
          <ChevronDownIcon className="my-2" />
        </div>
      </DropdownMenu.Trigger>

      <DropdownMenu.Portal>
        <DropdownMenu.Content
          className="min-w-[220px] bg-PrimaryVariantContainer border-solid border-black rounded-md p-[5px] shadow-[0px_10px_38px_-10px_rgba(22,_23,_24,_0.35),_0px_10px_20px_-15px_rgba(22,_23,_24,_0.2)]"
          sideOffset={4}
        >
          {profileDropdownItems.map((item, index) => {
            return (
              <DropdownMenu.Item
                key={index}
                className="group text-[13px] leading-none text-black rounded-[3px] flex items-center h-[25px] px-[5px] relative pl-[25px] select-none outline-none data-[disabled]:text-mauve8 data-[disabled]:pointer-events-none data-[highlighted]:bg-violet9 data-[highlighted]:text-violet1"
                // onClick={() => onClickButton()}
              >
                {item.title}
              </DropdownMenu.Item>
            )
            {
              /* <DropdownMenu.Separator className="h-[1px] bg-gray-700 m-[5px]" /> */
            }
          })}
          <DropdownMenu.Arrow className="fill-PrimaryVariantContainer" />
        </DropdownMenu.Content>
      </DropdownMenu.Portal>
    </DropdownMenu.Root>
  )
}

export default ProfileDropdown
