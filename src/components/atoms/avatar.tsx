import React, { useState, useEffect, useRef } from "react";

interface setName {
  name: string;
}
const Avatar = ({ name }: setName) => {
  return (
    <>
      <div className="w-20 h-20 bg-OnPrimary rounded-full grid place-items-center border-2 border-OnPrimaryContainer">
        <p className="text-red-500 text-base">{name}</p>
      </div>
    </>
  );
};

export default Avatar;
