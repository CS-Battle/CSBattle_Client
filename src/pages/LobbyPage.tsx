import { useEffect, useState, useContext } from "react"
import Button from "ui/base/atoms/Button/Button"
import Label from "ui/base/radix/Label/Label"
import GameSelectAlertDialog from "ui/game/molecules/GameSelectAlertDialog/GameSelectAlertDialog"
import GameButtonList from "ui/game/molecules/GameButtonList/GameButtonList"
import { GameType } from "types/game"
import { LobbyContext } from "layout/LobbyLayout"
import { useLocalstorage } from "hooks/useLocalstorage"
import { useSSE } from "hooks/useSSE"

// 추후 const 데이터 모듈화 처리 필요

const LobbyPage = () => {
  const [gametype, setGametype] = useState<GameType>("null")
  const [gameLock, setGameLock] = useState<boolean>(true)
  const [matchLock, setMatchLock] = useState<boolean>(false)
  const { setShowTimer } = useContext(LobbyContext)
  const { load } = useLocalstorage()
  const userId = load("userId")
  useSSE(userId)
  // FIXME: 이름 변경
  const _setGameType = (gameType: GameType) => setGametype(gameType)
  const matchingStart = (userId: string) => async () => {
    setShowTimer(true)
    setMatchLock(true)
  }

  useEffect(() => {
    gametype !== "null" ? setGameLock(false) : setGameLock(true)
  }, [gametype])

  return (
    <div className="flex flex-col justify-center h-full gap-12 m-4">
      <Label>원하는 게임을 선택하세요!</Label>
      <GameButtonList gametype={gametype} setGametype={_setGameType} disabled={matchLock} />
      <div className="self-end flex-initial">
        <GameSelectAlertDialog
          title="게임 유형 선택"
          gametype={gametype}
          description=" 유형으로 게임을 시작하시겠습니까?"
          cancel="취소"
          action="매칭 시작하기"
          actionClick={matchingStart(userId)}
        >
          <Button className="relative right-4" color={gameLock ? "disabled" : "primary"} disabled={gameLock}>
            {gameLock ? "게임을 선택하세요" : "매칭 시작"}
          </Button>
        </GameSelectAlertDialog>
      </div>
    </div>
  )
}

export default LobbyPage
