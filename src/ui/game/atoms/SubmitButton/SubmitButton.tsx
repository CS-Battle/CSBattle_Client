import Button from "ui/base/atoms/Button/Button"
import { phrases } from "./const"

interface SubmitButtonProps {
  onClick?: () => void
}
const SubmitButton = (props: SubmitButtonProps) => {
  const { onClick } = props

  return (
    <Button className="m-5 p-2 w-44" onClick={onClick}>
      {phrases}
    </Button>
  )
}

export default SubmitButton
