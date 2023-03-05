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

  return (
    <>
      <div className="flex flex-col min-h-screen min-w-screen mx-2 overflow-x-hidden bg-slate-300">
        {/*문제배치*/}
        <div className="flex basis-80 flex-row p-4 m-2 gap-2 gap-y-4 bg-slate-500">
          <p className="text-gray-800 hover:text-red-600">문제 배치 장소</p>
        </div>
        {/*정답입력칸*/}
        <div className="flex flex-col basis-72 p-4 m-2 gap-2 gap-y-4 bg-slate-500">
          <p className="text-gray-800 hover:text-red-600">정답입력칸</p>
          <input onChange={onChange} value={input}></input>
          {/* <button onClick={onReset}>submit</button> */}
        </div>
      </div>
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
