import { AlertDialogContent } from "../../atoms/radix/AlertDialogContent/AlertDialogContent"
import Button from "../../atoms/Button/Button"
import * as AlertDialog from "@radix-ui/react-alert-dialog"

interface TimeoutDialogProps {
  title: string
  description: JSX.Element | string
  children: JSX.Element
  cancel: JSX.Element | string
  action: JSX.Element | string
}

const TimeoutDialog = (props: TimeoutDialogProps) => {
  const { title, description, children, cancel, action } = props
  return (
    <AlertDialog.Root>
      <AlertDialog.Trigger>{children}</AlertDialog.Trigger>
      <AlertDialogContent>
        <div>
          <AlertDialog.Title className="m-0 text-[17px] font-bold">{title}</AlertDialog.Title>
          <AlertDialog.Description className="mt-[10px] mb-5 text-[15px] leading-normal">
            <span>{description}</span>
          </AlertDialog.Description>

          <div className="mt-[25px] flex justify-end">
            <AlertDialog.Cancel>
              <Button className="mx-4">{cancel}</Button>
            </AlertDialog.Cancel>
            <AlertDialog.Action>
              <Button className="mx-4">{action}</Button>
            </AlertDialog.Action>
          </div>
        </div>
      </AlertDialogContent>
    </AlertDialog.Root>
  )
}

export default TimeoutDialog
