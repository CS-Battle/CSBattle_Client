import Button from "ui/base/atoms/Button/Button"
import { useLocalstorage } from "hooks/useLocalstorage"
import { useEffect, useState } from "react"
import { useNavigate } from "react-router-dom"
import { getRandomNumber } from "utils/randomNumber"
import { UserCircleIcon } from "@heroicons/react/24/solid"
import TextInput from "ui/base/atoms/TextInput/TextInput"

const LoginPage = () => {
  const { save, load } = useLocalstorage()
  const navigate = useNavigate()
  const [nickname, setNickname] = useState<string>("")
  const defaultName = `anonymous${getRandomNumber(0, 65535)}`

  useEffect(() => {
    const userId = load("userId")

    if (userId !== null) {
      setNickname(userId)
    }
  }, [load])

  const onNicknameChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setNickname(event.target.value)
  }

  const onStartClick = () => {
    const _nickname = nickname === "" ? defaultName : nickname
    save("userId", _nickname)
    navigate("/lobby")
  }

  return (
    <div className="background">
      <div className="glassframe flex flex-col h-96 w-full max-w-lg items-center ring-8 rounded-lg justify-between">
        <p className="font-bold text-3xl">CS-BATTLE</p>
        <div className="w-full flex flex-col gap-y-2">
          <div className="flex justify-center">
            <UserCircleIcon className="w-32" />
          </div>
          <p className="text-md font-bold mx-16">닉네임</p>
          <div className="flex flex-col mx-4 gap-4 items-center justify-center">
            <TextInput placeholder={defaultName} value={nickname} onChange={onNicknameChange} />
            <Button className="rounded-xl w-4/5" onClick={onStartClick}>
              시작
            </Button>
          </div>
        </div>
      </div>
    </div>
  )
}

export default LoginPage
