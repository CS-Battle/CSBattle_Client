import { useState } from "react"
import Button from "components/atoms/Button/Button"
import Label from "components/atoms/radix/Label/Label"
import GameselectAlertDialog from "components/molecules/GameselectAlertDialog/GameselectAtlertDialog"
import GameButtonList from "components/molecules/GameButtonList/GameButtonList"

// 추후 const 데이터 모듈화 처리 필요

const LobbyPage = () => {
  const [gametype, setGametype] = useState<string>("")

  return (
    <div className="flex flex-col justify-center h-full gap-12">
      <Label>원하는 게임을 선택하세요!</Label>
      <GameButtonList
        gametype={gametype}
        setGametype={(v: string) => {
          setGametype(v)
        }}
      />

      <div className="self-end flex-initial">
        <GameselectAlertDialog
          title="게임 유형 선택"
          gametype={gametype}
          description=" 유형으로 게임을 시작하시겠습니까?"
          cancel="취소"
          action="매칭 시작하기"
        >
          <Button className="relative mx-12">게임 시작</Button>
        </GameselectAlertDialog>
      </div>
    </div>
  )
}

export default LobbyPage
