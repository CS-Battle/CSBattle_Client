import Button from "ui/base/atoms/Button/Button"

interface SelectionButtonProps {
  isSelected?: boolean
  handleClick?: () => void
  content?: any
}

const SelectionButton = (props: SelectionButtonProps) => {
  const { isSelected, handleClick, content } = props

  return (
    <Button
      className={`${isSelected ? "glassbuttonSelected w-1/4 h-auto " : "glassbutton w-1/4 h-auto"}`}
      onClick={handleClick}
    >
      <h1>{content}</h1>
    </Button>
  )
}

export default SelectionButton
