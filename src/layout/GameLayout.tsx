import Avatar from "components/atoms/avatar";
import Button from "components/atoms/Button/Button";
import Statusbar from "components/atoms/statusbar";
import Timer from "components/atoms/timer";
import { useEffect, useState } from "react";
import { Outlet } from "react-router-dom";

interface GameLayoutProps {
  children?: React.ReactElement;
}
//jsx구문오류? 에러문은 뜨지만 실행자체는 됨...해결필요
const GameLayout = ({ children }: GameLayoutProps) => {
  return (
    <>
      <div className="relative min-h-screen justify-center xl:justify-start overflow-hidden bg-OnPrimaryContainer px-20 py-20">
        <div className="relative bg-white flex flex-col aspect-[16/7] max-xl px-1 py-1 justify-center shadow-xl ring-8 ring-Secondary rounded-lg">
          <div className="flex flex-row place-content-center m-2 p-5 justify-between items-center  bg-slate-500">
            <Avatar name={"user1"}></Avatar>
            {/* <Statusbar num={1}></Statusbar> */}
            <Timer time={30} />
            {/* <Statusbar num={2}></Statusbar> */}
            <Avatar name={"user2"}></Avatar>
          </div>
          <div>{children || <Outlet />}</div>
          {/*게임종류마다 달라지는 버튼... gamelayout? or gamepage? 
          <div className="flex flex-row place-content-center">
            <Button className="m-5 p-2 w-44" onClick={() => alert("pass this question")}>
              pass button
            </Button>
            <Button className="m-5 p-2 w-44" onClick={() => alert("submit this answer")}>
              submit button
            </Button>
          </div> */}
        </div>
      </div>
      <Outlet />
    </>
  );
};

export default GameLayout;
