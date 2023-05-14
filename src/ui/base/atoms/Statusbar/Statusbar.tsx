import { classNames } from "utils/classNames"

interface StatusbarProps {
  num: number
}

const Statusbar = (props: StatusbarProps) => {
  const { num } = props
  return (
    <progress
      className={classNames("progress", num === 2 ? "progress -scale-x-100" : "progress scale-x-100")}
      value="50"
      max="100"
    />
  )
}

export default Statusbar
