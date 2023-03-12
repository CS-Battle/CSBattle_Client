import { DialogContent } from "../../atoms/radix/DialogContent/DialogContent"
import Button from "../../atoms/Button/Button"
import * as Dialog from '@radix-ui/react-dialog'

interface ConfirmDialogProps {
  title: string
  description: JSX.Element | string
  children: JSX.Element
  buttonItems: button[]
}

interface button {
  title: string
}

const ConfirmDialog = (props: ConfirmDialogProps) => {
  const {title, description, children, buttonItems} = props

  return (
    <Dialog.Root>
      <Dialog.Trigger>
        {children}
      </Dialog.Trigger>
      <DialogContent>
        <div>
          <Dialog.Title className="m-0 text-[17px] font-medium">
            {title}
          </Dialog.Title>
          <Dialog.Description className="mt-[10px] mb-5 text-[15px] leading-normal">
            {description}
          </Dialog.Description>

          <div className="mt-[25px] flex justify-end">
            {buttonItems.map((item, index) => {
              return (
                <Dialog.Close key={index} asChild>
                  <Button className="mx-4">{item.title}</Button>
                </Dialog.Close>
              )
            })}
          </div>
      </div>
      </DialogContent>
    </Dialog.Root>
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

export default ConfirmDialog