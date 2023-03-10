import Button from "components/atoms/Button/Button"
import { Dialog, DialogTrigger, DialogContent } from "components/atoms/radix/Dialog/Dialog"
import Label from "components/atoms/radix/Label/Label"
import GameButtonList from "components/molecules/GameButtonList/GameButtonList"

const LobbyPage = () => {
  return (
    <div className="flex flex-col justify-center h-full gap-12">
      <Label>원하는 게임을 선택하세요!</Label>
      <GameButtonList />

      <div className="self-end flex-initial">
        <Dialog>
          <DialogTrigger>
            <Button className="relative mx-12">게임 시작</Button>
          </DialogTrigger>
          <DialogContent></DialogContent>
        </Dialog>
      </div>
    </div>
  )
}

export default LobbyPage
