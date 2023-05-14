// import Avatar from "ui/base/atoms/Avatar/Avatar"
// import TimerBox from "ui/base/molecules/TimerBox/TimerBox"
// import Statusbar from "ui/base/atoms/Statusbar/Statusbar"
// import Footer from "ui/base/organisms/Footer/Footer"
// import { Outlet } from "react-router-dom"

// interface GameLayoutProps {
//   children?: React.ReactElement
// }

// const GameLayout = (props: GameLayoutProps) => {
//   const { children } = props

//   //for testing
//   const time = 50

//   return (
//     <div className="background">
//       <div className="w-full h-auto max-w-6xl glassframe">
//         <div className="statusbox">
//           <div className="flex flex-row items-center relative">
//             <Avatar name={"user1"} image="https://source.boringavatars.com/beam/80/" />
//             <div className="-z-10 absolute left-16">
//               <Statusbar num={1} />
//             </div>
//           </div>
//           <TimerBox time={time} />
//           <div className="flex z-10 flex-row items-center relative">
//             <div className="-z-10 absolute right-16">
//               <Statusbar num={2} />
//             </div>
//             <Avatar name={"user1"} image="https://source.boringavatars.com/beam/80" />
//           </div>
//         </div>
//         <div>{children || <Outlet />}</div>
//       </div>
//       <div className="relative justify-center flex-none px-7 py-7">
//         <Footer />
//       </div>
//     </div>
//   )
// }

// export default GameLayout

import Avatar from "ui/base/atoms/Avatar/Avatar"
import TimerBox from "ui/base/molecules/TimerBox/TimerBox"
import Statusbar from "ui/base/atoms/Statusbar/Statusbar"
import Footer from "ui/base/organisms/Footer/Footer"
import { Outlet } from "react-router-dom"
import { useState, useEffect } from "react"

interface GameLayoutProps {
  children?: React.ReactElement
}

const GameLayout = (props: GameLayoutProps) => {
  const { children } = props

  const [isLoading, setIsLoading] = useState<boolean>(true)

  //for testing
  const time = 50

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoading(false)
    }, 10000)

    return () => {
      clearTimeout(timer)
    }
  }, [])

  return (
    <div className="background">
      {isLoading ? (
        <div className="absolute inset-0 z-50 flex justify-center items-center overlay">
          <div className="text-white">Loading...</div>
        </div>
      ) : (
        <div className="w-full h-auto max-w-6xl glassframe">
          <div className="statusbox">
            <div className="flex flex-row items-center relative">
              <Avatar name={"user1"} image="https://source.boringavatars.com/beam/80/" />
              <div className="-z-10 absolute left-16">
                <Statusbar num={1} />
              </div>
            </div>
            <TimerBox time={time} />
            <div className="flex z-10 flex-row items-center relative">
              <div className="-z-10 absolute right-16">
                <Statusbar num={2} />
              </div>
              <Avatar name={"user1"} image="https://source.boringavatars.com/beam/80" />
            </div>
          </div>
          <div>{children || <Outlet />}</div>
        </div>
      )}
      <div className="relative justify-center flex-none px-7 py-7">
        <Footer />
      </div>
    </div>
  )
}

export default GameLayout
