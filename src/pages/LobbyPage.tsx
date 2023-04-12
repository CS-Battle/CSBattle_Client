import { useEffect, useState, useContext } from "react"
import Button from "components/atoms/Button/Button"
import Label from "components/atoms/radix/Label/Label"
import GameselectAlertDialog from "components/molecules/GameselectAlertDialog/GameselectAtlertDialog"
import GameButtonList from "components/molecules/GameButtonList/GameButtonList"
import { GameType } from "types/game"
import { LobbyContext } from "layout/LobbyLayout"

// 추후 const 데이터 모듈화 처리 필요

const LobbyPage = () => {
  const [gametype, setGametype] = useState<GameType>(GameType.null)
  const [gameLock, setGameLock] = useState<boolean>(true)
  const {setShowTimer} = useContext(LobbyContext)

  // FIXME: 이름 변경
  const _setGameType = (gameType: GameType) => setGametype(gameType)
  const timerStart = () => setShowTimer(true)

  useEffect(() => {
    (gametype !== GameType.null) ? setGameLock(false) : setGameLock(true)
  }, [gametype])

  return (
    <div className="flex flex-col justify-center h-full gap-12 m-4">
      <Label>원하는 게임을 선택하세요!</Label>
      <GameButtonList gametype={gametype} setGametype={_setGameType} />
      <div className="self-end flex-initial">
        <GameselectAlertDialog
          title="게임 유형 선택"
          gametype={gametype}
          description=" 유형으로 게임을 시작하시겠습니까?"
          cancel="취소"
          action="매칭 시작하기"
          actionClick={timerStart}
        >
          <Button
            className="relative right-4"
            color={gameLock? "disabled" : "primary"}
            disabled={gameLock}
          >
            {gameLock? "게임을 선택하세요" : "매칭 시작"}
          </Button>
        </GameselectAlertDialog>
      </div>
    </div>
  )
}

export default LobbyPage
