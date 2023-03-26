import Button from "components/atoms/Button/Button"
import React, { useState } from "react"

interface SubmitButtonProps {
  // children?: JSX.Element | string
  // color?: ColorType
  // disabled?: boolean
  // styles?: React.CSSProperties
  // className?: string
  onClick?: () => void
  //   fullWidth: boolean
  //   variant: "contained" | "outlined" | "text" | string
}
const SubmitButton = (props: SubmitButtonProps) => {
  const { onClick } = props

  return (
    <>
      <Button className="m-5 p-2 w-44" onClick={onClick}>
        submit button
      </Button>
    </>
  )
}

export default SubmitButton
