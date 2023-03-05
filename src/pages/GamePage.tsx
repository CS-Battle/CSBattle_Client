import Button from "components/atoms/Button/Button";
import React, { useState } from "react";

const GamePage = () => {
  //임시 input
  const [input, setInput] = useState("");
  const onChange = (e: { target: { value: React.SetStateAction<string> } }) => {
    setInput(e.target.value);
  };
  const onReset = () => {
    setInput("");
  };

  // const mixFunction = () => {
  //   onReset;
  //   alert("submit answer");
  // };
  const test =
    "문제의 내용이 들어갈 장소 입니다. 다양한 유형의 문제가 들어갈 예정입니다. 구현 많이 못했어요 죄송해요 빨리할게요 엉엉.";

  return (
    <>
      {/*문제배치*/}
      <div className="flex-auto flex-col min-w-screen m-2 mx-2 overflow-x-hidden bg-slate-300">
        <div className="flex h-72 flex-col p-4 m-2 gap-2 gap-y-4 text-center bg-slate-500">
          <p className="text-gray-800 hover:text-red-600">문제 배치 장소</p>
          <p className="text-gray-800 ">{test}</p>
        </div>
      </div>
      {/*정답입력칸*/}
      <div className="flex-auto flex-col min-w-screen m-2 mx-2 overflow-x-hidden bg-slate-300">
        <div className="relative flex flex-col basis-48 rounded-3xl p-4 m-2 gap-2 items-center justify-center bg-slate-500">
          <p className="text-gray-800 hover:text-red-600">정답입력칸</p>
          {/*임시 정답 입력칸*/}
          <input className="w-60 h-10" onChange={onChange} value={input}></input>
        </div>
      </div>
      {/*버튼..?*/}
      <div className="flex flex-row place-content-center">
        <Button className="m-5 p-2 w-44" onClick={() => alert("pass this question")}>
          pass button
        </Button>
        <Button
          className="m-5 p-2 w-44"
          onClick={() => {
            onReset();
            alert("submit answer");
          }}
        >
          submit button
        </Button>
      </div>
    </>
  );
};

export default GamePage;
