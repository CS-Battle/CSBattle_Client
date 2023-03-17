import Avatar from "components/atoms/Avatar/Avatar"
import Timer from "components/atoms/Timer/Timer"
import { Outlet } from "react-router-dom"

interface GameLayoutProps {}

const GameLayout = (props: GameLayoutProps) => {
  const {} = props

  return (
    <div className="relative min-h-screen justify-center xl:justify-start overflow-hidden bg-OnPrimaryContainer px-20 py-20">
      <div className="relative bg-white flex flex-col aspect-[16/7] max-xl px-1 py-1 justify-center shadow-xl ring-8 ring-Secondary rounded-lg">
        <div className="flex flex-row place-content-center m-2 p-5 justify-between items-center  bg-slate-500">
          <Avatar name={"user1"}></Avatar>
          <h1>status bar</h1>
          <Timer time={30} />
          <h1>status bar</h1>
          <Avatar name={"user2"}></Avatar>
        </div>
        <div>{children || <Outlet />}</div>
        {/* <div className="flex flex-row place-content-center">
            <Button className="m-5 p-2 w-44" onClick={() => alert("pass this question")}>
              pass button
            </Button>
            <Button className="m-5 p-2 w-44" onClick={() => alert("submit this answer")}>
              submit button
            </Button>
          </div> */}
      </div>
    </div>
  )
}

export default GameLayout
