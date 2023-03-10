import Button from "../components/atoms/Button/Button"
import * as Label from "@radix-ui/react-label"
import { Dialog, DialogTrigger, DialogContent } from "../components/atoms/Dialog/Dialog"

const LobbyPage = () => {
  return (
    <>
      <div className="flex flex-col justify-center h-full gap-12">
        <div className="flex-initial">
          <Label.Root className="px-4 text-lg" htmlFor="firstName">
            원하는 게임을 선택하세요!
          </Label.Root>
        </div>
        <div className="justify-center flex-initial">
          <div className="grid grid-cols-3 gap-4">
            <Button className="">먼저 끝까지 도달하기</Button>
            <Button className="">N전M승</Button>
            <Button className="">O/X 퀴즈</Button>
            <Button className="">1vs1 배틀</Button>
            <Button className="">정답률 승부</Button>
            <Button className="">Random</Button>
          </div>
        </div>

        <div className="self-end flex-initial">
          <Dialog>
            <DialogTrigger>
              <Button className="relative mx-12">게임 시작</Button>
            </DialogTrigger>
            <DialogContent></DialogContent>
          </Dialog>
        </div>
      </div>
    </>
  )
}

export default LobbyPage
