import React from "react";
import Button from '../components/atoms/Button/Button'

const LobbyPage = () => {
  return (
    <>
    <div className='justify-center mt-20'>
      <Button className='relative mx-12 justify-center'>먼저 끝까지 도달하기</Button>
      <Button className='relative mx-12 justify-center'>N전M승</Button>
      <Button className='relative mx-12 justify-center'>1문제 배틀</Button>
    </div>
    </>
  );
};

export default LobbyPage;
