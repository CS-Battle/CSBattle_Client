import { useState } from "react";
import { useLocalstorage } from "hooks/useLocalstorage";
import GetQuestion from "networks/GetQuestion";


type Question = {
  questionId: string;
  content: string;
};

type AnswerResult = {
  userId: string;
  questionIdx: number;
  isCorrect: boolean;
};

const Connect = () => {
  const { load } = useLocalstorage()
  const [battleId, setBattleId] = useState("")
  const [questionId, setQuestionId] = useState("")
  const userId = load("userId") || ""

  const eventSource = new EventSource(`http://localhost:8080/connect/` + userId)

  eventSource.addEventListener("sse", (event) => {
    console.log("event.data : " + event.data);
  });

  eventSource.addEventListener(`battle-start`, (e) => {
    const { data: battle_Id } = e
    console.log("battle started!! battle id : ", battle_Id)
    setBattleId(battle_Id)
    GetQuestion()
    alert("battle started!!")
  })

  eventSource.addEventListener(`answer-result`, (e) => {
    const { data: answerResult } = e;
    const answerResultJson = JSON.parse(answerResult) as AnswerResult;

    console.log("answerResultJson : ", answerResultJson);

    if (answerResultJson.isCorrect) {
      alert(
        answerResultJson.userId + "님이 "
        + answerResultJson.questionIdx + "번째 문제의 정답을 맞추셨습니다!"
      )
    } else {
      alert(
        answerResultJson.userId + "님이 "
        + answerResultJson.questionIdx + "번째 문제를 틀리셨습니다 ㅜㅜ"
      )
    }
  })

  eventSource.addEventListener(`opponent-left`, (e) => {
    const { data: message } = e;
    alert(message);
    window.location.reload();
  });

  eventSource.addEventListener(`checking-connection`, (e) => {
    const { data: message } = e;
  });

  eventSource.addEventListener("Question", (e) => {
    const { data: questionJson } = e;
    const question = JSON.parse(questionJson) as Question;
    console.log("ID : ", question.questionId, "문제 : ", question.content);
    setQuestionId(question.questionId);
  });

  eventSource.addEventListener("timeOut", (e) => {
    const { data: timelimit } = e;
    alert(timelimit);
  });
}
export default Connect;