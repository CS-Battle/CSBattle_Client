import Button from "components/atoms/Button/Button"
import { Dialog, DialogTrigger } from "components/atoms/radix/DialogContent/DialogContent"
import Label from "components/atoms/radix/Label/Label"
import ConfirmDialogContent from "components/molecules/ConfirmDialogContent/ConfirmDialogContent"
import GameButtonList from "components/molecules/GameButtonList/GameButtonList"

const LobbyPage = () => {
  return (
    <div className="flex flex-col justify-center h-full gap-12">
      <Label>원하는 게임을 선택하세요!</Label>
      <GameButtonList />

      <div className="self-end flex-initial">
        <Dialog>
          <DialogTrigger asChild>
            <Button className="relative mx-12">게임 시작</Button>
          </DialogTrigger>
          <ConfirmDialogContent
            title = "게임 유형 선택"
            description = "해당 유형으로 게임을 시작하시겠습니까?"
          />
        </Dialog>
      </div>
    </div>
  )
}

export default LobbyPage
