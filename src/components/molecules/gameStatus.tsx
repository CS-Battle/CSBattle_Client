import React, { useState, useEffect, useRef } from "react";
import Avatar from "components/atoms/avatar";
import Statusbar from "components/atoms/statusbar";
import Timer from "components/atoms/timer";

const GameStatus = () => {
  //jsx구문 오류 해결 필요
  //구체적 스타일링 필요
  return (
    <>
      <div className="">
        <Avatar name={"user1"}></Avatar>
        <Statusbar num={1}></Statusbar>
        <Timer time={30} />
        <Statusbar num={2}></Statusbar>
        <Avatar name={"user2"}></Avatar>
      </div>
    </>
  );
};

export default GameStatus;
