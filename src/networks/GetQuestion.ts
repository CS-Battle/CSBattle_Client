import { useState } from "react";
import { useLocalstorage } from "hooks/useLocalstorage";

const GetQuestion =  async (_battleId?: string) => {
  const { load } = useLocalstorage()
  const userId = load("userId") || ""
  const battleId = _battleId || ""

  const params = new URLSearchParams({
    userId: userId, battleId: battleId
  })


  await fetch(`http://localhost:8080/battle/question?` + params)

}
export default GetQuestion