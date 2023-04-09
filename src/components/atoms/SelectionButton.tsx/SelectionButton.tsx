import Button from "../Button/Button"

interface SelectionButtonProps {
  isSelected?: boolean
  handleClick?: any
  elementIndex?: number
  content?: any
}

const SelectionButton = (props: SelectionButtonProps) => {
  const { isSelected, handleClick, elementIndex, content } = props

  return (
    <Button
      className={`${isSelected ? "w-1/4 h-auto bg-primaryVariant1" : "glassbutton w-1/4 h-auto"}`}
      onClick={() => handleClick(elementIndex)}
    >
      <h1>{content}</h1>
    </Button>
  )
}
export default SelectionButton
