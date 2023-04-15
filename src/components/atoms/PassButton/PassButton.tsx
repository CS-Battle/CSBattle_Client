import Button from "components/atoms/Button/Button"
import { phrases } from "./const"

interface PassButtonProps {
  onClick?: () => void
}

const PassButton = (props: PassButtonProps) => {
  const { onClick } = props

  return (
    <Button className="m-5 p-2 w-44" onClick={onClick}>
      {phrases}
    </Button>
  )
}

export default PassButton

// TOOD: 현재 alert -> use dialog...? hook으로 빼기
