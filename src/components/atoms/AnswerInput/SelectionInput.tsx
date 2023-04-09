import { useState } from "react"
import SelectionButton from "../SelectionButton.tsx/SelectionButton"

interface SelectionInputProps {
  description?: any
}

const SelectionInput = (props: SelectionInputProps) => {
  const { description } = props
  const [isButtonSelect, setIsButtonSelect] = useState<any>(false)

  const newArr = Array(description.length).fill(false)
  const handleClick = (idx: number) => {
    newArr[idx] = true
    setIsButtonSelect(newArr)
  }

  // <Button className="glassbutton w-40 h-8 ">
  //     <h1>{description}</h1>
  //   </Button>
  return (
    <>
      <div className="flex w-full h-auto m-2 p-2 gap-2 justify-between">
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
    </>
  )
}

export default SelectionInput
