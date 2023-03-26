import React, { useState, useEffect, useRef } from "react"

interface setUserNum {
  num: number
}
const Statusbar = ({ num }: setUserNum) => {
  //jsx구문 오류 해결 필요

  // if (num == 1) {
  //   return (
  //     <>
  //       <div className="w-40 h-4 bg-OnPrimary rounded-full grid place-items-start border-2 border-OnPrimaryContainer">
  //         {/* <p className="text-red-500 text-base">{name}</p> */}
  //         <div className="w-10 h-3.5 bg-OnPrimaryContainer rounded-full grid place-items-start border-2 border-OnPrimaryContainer" />
  //       </div>
  //     </>
  //   )
  // } else if (num == 2) {
  return (
    <>
      <div className="w-40 h-4 bg-OnPrimary rounded-full grid place-items-end border-2 border-OnPrimaryContainer">
        {/* <p className="text-red-500 text-base">{name}</p> */}
        <div className="w-10 h-3.5 bg-OnPrimaryContainer rounded-full grid place-items-end border-2 border-OnPrimaryContainer" />
      </div>
    </>
  )
  // }
}

export default Statusbar
