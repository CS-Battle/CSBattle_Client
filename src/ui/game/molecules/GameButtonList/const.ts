import { QuestionType } from "types/game"
import { Game, GameType } from "types/game"

export const gameList: Array<Game> = [
  { id: "", type: "toTheEnd" },
  { id: "", type: "nOutOfM" },
  { id: "", type: "yesOrNo" },
  { id: "", type: "oneOnOne" },
  { id: "", type: "answerRate" },
]

export const GameTitleMap: {
  [key in GameType]: string
} = {
  null: "",
  toTheEnd: "먼저 끝까지 도달하기",
  nOutOfM: "N전M승",
  yesOrNo: "O/X 퀴즈",
  oneOnOne: "1vs1 배틀",
  answerRate: "정답률 승부",
}

export const QuestionTitleMap: {
  [key in QuestionType]: string
} = {
  null: "",
  blank: "",
  shortAnswer: "",
  order: "",
  multiChoice: "",
}

export const QuestionTypeMap: { [key in number]: QuestionType } = {
  0: "null",
  1: "blank",
  2: "shortAnswer",
  3: "order",
  4: "multiChoice",
}

export const random = { id: "", label: "Random" }
