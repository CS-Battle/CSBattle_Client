import Button from "components/atoms/Button/Button"
import Label from "components/atoms/radix/Label/Label"
import ConfirmDialog from "components/molecules/ConfirmDialog/ConfirmDialog"
import GameButtonList from "components/molecules/GameButtonList/GameButtonList"

// 추후 const 데이터 모듈화 처리 필요
const buttonLists = [
  {
    title: "매칭 시작"
  },
  {
    title: "취소"
  }
]
const LobbyPage = () => {
  return (
    <div className="flex flex-col justify-center h-full gap-12">
      <Label>원하는 게임을 선택하세요!</Label>
      <GameButtonList />

      <div className="self-end flex-initial">
        <ConfirmDialog
          title = "게임 유형 선택"
          description = "해당 유형으로 게임을 시작하시겠습니까?"
          buttonItems = {buttonLists}
        >
          <Button className="relative mx-12">게임 시작</Button>
        </ConfirmDialog>
      </div>
    </div>
  )
}

export default LobbyPage
