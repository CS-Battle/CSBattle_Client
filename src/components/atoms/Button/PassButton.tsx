import Button from "components/atoms/Button/Button"
import { useState } from "react"

interface PassButtonProps {
  // children?: JSX.Element | string
  // color?: ColorType
  // disabled?: boolean
  // styles?: React.CSSProperties
  // className?: string
  onClick?: () => void
  //   fullWidth: boolean
  //   variant: "contained" | "outlined" | "text" | string
}

const PassButton = (props: PassButtonProps) => {
  const { onClick } = props

  return (
    <>
      {/*버튼..?*/}
      <Button className="m-5 p-2 w-44" onClick={onClick}>
        pass button
      </Button>
    </>
  )
}

export default PassButton

//현재 alert -> use dialog...? hook으로 빼두면 어떨까
