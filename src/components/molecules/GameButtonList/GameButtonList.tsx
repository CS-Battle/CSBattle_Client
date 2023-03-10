import Button from "components/atoms/Button/Button"
import { gameList } from "./const"

const GameButtonList = () => {
  return (
    <div className="justify-center flex-initial">
      <div className="grid grid-cols-3 gap-4">
        {gameList.map((game, i) => (
          <Button key={i}>{game.label}</Button>
        ))}
      </div>
    </div>
  )
}

export default GameButtonList
