import { classNames } from "utils/classNames"

interface StatusbarProps {
  num: number
}
const Statusbar = (props: StatusbarProps) => {
  const { num } = props
  return (
    <>
      <div
        className={classNames(
          "w-40 h-4 bg-OnPrimary rounded-full grid border-2 border-OnPrimaryContainer",
          num === 1 ? "place-items-start" : "place-items-end"
        )}
      >
        {/* <p className="text-base text-red-500">{name}</p> */}
        <div
          className={classNames(
            "w-10 h-3.5 bg-OnPrimaryContainer rounded-full grid border-2 border-OnPrimaryContainer",
            num === 1 ? "place-items-start" : "place-items-end"
          )}
        />
      </div>
    </>
  )
}

export default Statusbar
