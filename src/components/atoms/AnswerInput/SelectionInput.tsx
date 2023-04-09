import { useState } from "react"
import SelectionButton from "../SelectionButton.tsx/SelectionButton"

interface SelectionInputProps {
  description: Array<any>
}

const SelectionInput = (props: SelectionInputProps) => {
  const { description } = props
  const [isButtonSelect, setIsButtonSelect] = useState<Array<boolean>>(Array(description.length).fill(false))

  const handleClick = (idx: number) => {
    setIsButtonSelect((prev) => [...prev.slice(0, idx), !prev[idx], ...prev.slice(idx + 1)])
  }

  return (
    <div className="flex justify-between w-full h-auto gap-2 p-2 m-2">
      {description.map((elm: any, index: number) => {
        return (
          <SelectionButton
            key={index}
            isSelected={isButtonSelect[index]}
            handleClick={handleClick}
            elementIndex={index}
            content={elm}
          />
        )
      })}
    </div>
  )
}

export default SelectionInput