import Button from "../Button/Button"

interface SelectionButtonProps {
  isSelected?: boolean
  handleClick?: () => void
  content?: any
}

const SelectionButton = (props: SelectionButtonProps) => {
  const { isSelected, handleClick, content } = props

  return (
    <Button
      className={`${isSelected ? "w-1/4 h-auto bg-primaryVariant1" : "glassbutton w-1/4 h-auto"}`}
      onClick={handleClick}
    >
      <h1>{content}</h1>
    </Button>
  )
}

export default SelectionButton
