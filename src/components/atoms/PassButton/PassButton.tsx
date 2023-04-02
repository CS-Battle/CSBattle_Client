import Button from "components/atoms/Button/Button"

interface PassButtonProps {
  onClick?: () => void
}

const PassButton = (props: PassButtonProps) => {
  const { onClick } = props

  return (
    <Button className="m-5 p-2 w-44" onClick={onClick}>
      pass button
    </Button>
  )
}

export default PassButton

// TOOD: 현재 alert -> use dialog...? hook으로 빼기
