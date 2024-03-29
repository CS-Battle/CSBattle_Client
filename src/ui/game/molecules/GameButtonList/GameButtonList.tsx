import Button from "ui/base/atoms/Button/Button"
import { GameTitleMap, gameList } from "./const"
import { GameType } from "types/game"

interface GameButtonListProps {
  gametype: GameType
  setGametype: (type: GameType) => void
  disabled?: boolean
}

const GameButtonList = (props: GameButtonListProps) => {
  const { setGametype, disabled=false } = props
  const onClickButton = (gameType: GameType) => () => setGametype(gameType)

  return (
    <div className="justify-center flex-initial">
      <div className="grid grid-cols-3 gap-4">
        {gameList.map((game, i) => (
          <Button
            key={i}
            className="glassbutton focus:bg-OnPrimaryVariantContainer focus:text-OnPrimary disabled:text-opacity-80"
            onClick={onClickButton(game.type)}
            disabled={disabled}
          >
            {GameTitleMap[game.type]}
          </Button>
        ))}
      </div>
    </div>
  )
}

export default GameButtonList
