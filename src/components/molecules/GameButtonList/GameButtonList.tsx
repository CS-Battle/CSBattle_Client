import Button from "components/atoms/Button/Button"
import { GameTitleMap, gameList } from "./const"
import { GameType } from "types/game"
import { useEffect } from "react"

interface GameButtonListProps {
  gametype: GameType
  setGametype: (type: GameType) => void
}

const GameButtonList = (props: GameButtonListProps) => {
  const { setGametype } = props
  const onClickButton = (gameType: GameType) => setGametype(gameType)


  return (
    <div className="justify-center flex-initial">
      <div className="grid grid-cols-3 gap-4">
        {gameList.map((game, i) => (
            <Button
              key={i}
              className="glassbutton focus:bg-OnPrimaryVariantContainer focus:text-OnPrimary"
              onClick={() => onClickButton(game.type)}
            >{GameTitleMap[game.type]}</Button>

        ))}
      </div>
    </div>
  )
}

export default GameButtonList
