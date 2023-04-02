export type Game = {
  id: string
  type: GameType
}

export enum QuestionType {
  null = -1,
  blank,
  shortAnswer,
  order,
  multiChoice,
}

export enum GameType {
  null = -1,
  toTheEnd, // NOTE: 먼저 끝까지 도달하기
  nOutOfM, // NOTE: N전M승
  yesOrNo, // NOTE: O/X 퀴즈
  oneOnOne, // NOTE: 1vs1 배틀
  answerRate, // NOTE: 정답률 승부
}
