import { QuestionType } from "types/game"
import { Game, GameType } from "types/game"

export const gameList: Array<Game> = [
  { id: "", type: GameType.toTheEnd },
  { id: "", type: GameType.nOutOfM },
  { id: "", type: GameType.yesOrNo },
  { id: "", type: GameType.oneOnOne },
  { id: "", type: GameType.answerRate },
]

type GameTitle = {
  [key in GameType]: string
}

export const GameTitleMap: GameTitle = {
  [GameType.null]: "",
  [GameType.toTheEnd]: "먼저 끝까지 도달하기",
  [GameType.nOutOfM]: "N전M승",
  [GameType.yesOrNo]: "O/X 퀴즈",
  [GameType.oneOnOne]: "1vs1 배틀",
  [GameType.answerRate]: "정답률 승부",
}

export const QuestionTitleMap = {
  [QuestionType.blank]: "",
  [QuestionType.shortAnswer]: "",
  [QuestionType.order]: "",
  [QuestionType.multiChoice]: "",
}

export const random = { id: "", label: "Random" }
