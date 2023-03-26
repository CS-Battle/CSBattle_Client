import Button from "components/atoms/Button/Button"
import { gameList } from "./const"

interface GameButtonListProps {
  gametype: string
  setGametype: (v: string) => void
}
const GameButtonList = (props: GameButtonListProps) => {
  const { setGametype } = props

  const onClickButton = (g: string) => {
    setGametype(g)
  }

  return (
    <div className="justify-center flex-initial">
      <div className="grid grid-cols-3 gap-4">
        {gameList.map((game, i) => (
          <Button key={i} className="glassbutton" onClick={() => onClickButton(game.label)}>
            {game.label}
          </Button>
        ))}
      </div>
    </div>
  )
}

export default GameButtonList
