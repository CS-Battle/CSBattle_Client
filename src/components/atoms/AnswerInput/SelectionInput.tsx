import Button from "components/atoms/Button/Button"
import React, { useState } from "react"

interface SelectionInputProps {
  // children?: JSX.Element | string
  // color?: ColorType
  // disabled?: boolean
  // styles?: React.CSSProperties
  // className?: string
  answer?: string
  onChange?: any
  description?: any
  //   fullWidth: boolean
  //   variant: "contained" | "outlined" | "text" | string
}

const SelectionInput = (props: SelectionInputProps) => {
  const { answer = "", onChange, description } = props

  return (
    <>
      <Button className="glassbutton w-80 h-8">
        <h1>{description}</h1>
      </Button>
    </>
  )
}

export default SelectionInput
