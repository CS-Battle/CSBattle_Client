import { AlertDialogContent } from "ui/base/radix/AlertDialogContent/AlertDialogContent"
import Button from "ui/base/atoms/Button/Button"
import * as AlertDialog from "@radix-ui/react-alert-dialog"
import { GameType } from "types/game"
import { GameTitleMap } from "../GameButtonList/const"

interface GameSelectAlertDialogProps {
  title: string
  description: JSX.Element | string
  children: JSX.Element
  cancel: JSX.Element | string
  action: JSX.Element | string
  actionClick?: () => void
  gametype: GameType
}

const GameSelectAlertDialog = (props: GameSelectAlertDialogProps) => {
  const { title, description, children, cancel, action, gametype, actionClick } = props

  return (
    <AlertDialog.Root>
      <AlertDialog.Trigger>{children}</AlertDialog.Trigger>
      <AlertDialogContent>
        <div>
          <AlertDialog.Title className="m-0 text-[17px] font-bold">{title}</AlertDialog.Title>
          <AlertDialog.Description className="mt-[10px] mb-5 text-[15px] leading-normal">
            <span className="font-bold text-Primary">{GameTitleMap[gametype]}</span>
            <span>{description}</span>
          </AlertDialog.Description>

          <div className="mt-[25px] flex justify-end">
            <AlertDialog.Cancel>
              <Button className="mx-4" color="cancel">
                {cancel}
              </Button>
            </AlertDialog.Cancel>
            <AlertDialog.Action>
              <Button className="mx-4" color="agree" onClick={actionClick}>
                {action}
              </Button>
            </AlertDialog.Action>
          </div>
        </div>
      </AlertDialogContent>
    </AlertDialog.Root>
  )
}

export default GameSelectAlertDialog
