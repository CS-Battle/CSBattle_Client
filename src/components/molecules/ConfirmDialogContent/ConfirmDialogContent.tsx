import { DialogContent } from "../../atoms/radix/DialogContent/DialogContent"
import * as Dialog from '@radix-ui/react-dialog'

interface ConfirmDialogContentProps {
  title: string
  description: JSX.Element | string
}

const ConfirmDialogContent = (props: ConfirmDialogContentProps) => {
  const {title, description} = props

  return (
    <DialogContent>
      <div>
        <Dialog.Title className="m-0 text-[17px] font-medium">
          {title}
        </Dialog.Title>
        <Dialog.Description className="mt-[10px] mb-5 text-[15px] leading-normal">
          {description}
        </Dialog.Description>

        <div className="mt-[25px] flex justify-end">
          <Dialog.Close asChild>
            <button className="mx-4">예</button>
          </Dialog.Close>
          <Dialog.Close asChild>
            <button className="mx-4">아니오</button>
          </Dialog.Close>
        </div>
      </div>
    </DialogContent>
  )
}

export default ConfirmDialogContent