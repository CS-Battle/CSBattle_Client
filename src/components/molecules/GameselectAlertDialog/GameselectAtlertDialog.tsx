import { AlertDialogContent } from "../../atoms/radix/AlertDialogContent/AlertDialogContent"
import Button from "../../atoms/Button/Button"
import * as AlertDialog from '@radix-ui/react-alert-dialog'

interface GameselectAlertDialogProps {
  title: string
  description: JSX.Element | string
  children: JSX.Element
  cancel: JSX.Element | string
  action: JSX.Element | string
}

const GameselectAlertDialog = (props: GameselectAlertDialogProps) => {
  const {title, description, children, cancel, action} = props

  return (
    <AlertDialog.Root>
      <AlertDialog.Trigger>
        {children}
      </AlertDialog.Trigger>
      <AlertDialogContent>
        <div>
          <AlertDialog.Title className="m-0 text-[17px] font-medium">
            {title}
          </AlertDialog.Title>
          <AlertDialog.Description className="mt-[10px] mb-5 text-[15px] leading-normal">
            {description}
          </AlertDialog.Description>

          <div className="mt-[25px] flex justify-end">
            <AlertDialog.Cancel><Button className="mx-4">{cancel}</Button></AlertDialog.Cancel>
            <AlertDialog.Action><Button className="mx-4">{action}</Button></AlertDialog.Action>
          </div>
      </div>
      </AlertDialogContent>
    </AlertDialog.Root>
    // <DialogContent>
    //   <div>
    //     <Dialog.Title className="m-0 text-[17px] font-medium">
    //       {title}
    //     </Dialog.Title>
    //     <Dialog.Description className="mt-[10px] mb-5 text-[15px] leading-normal">
    //       {description}
    //     </Dialog.Description>

    //     <div className="mt-[25px] flex justify-end">
    //       <Dialog.Close asChild>
    //         <Button className="mx-4">예</Button>
    //       </Dialog.Close>
    //       <Dialog.Close asChild>
    //         <Button className="mx-4">아니오</Button>
    //       </Dialog.Close>
    //     </div>
    //   </div>
    // </DialogContent>
  )
}

export default GameselectAlertDialog