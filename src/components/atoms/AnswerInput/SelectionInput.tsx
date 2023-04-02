import Button from "components/atoms/Button/Button"

interface SelectionInputProps {
  description?: any
}

const SelectionInput = (props: SelectionInputProps) => {
  const { description } = props

  return (
    <Button className="glassbutton w-80 h-8">
      <h1>{description}</h1>
    </Button>
  )
}

export default SelectionInput
