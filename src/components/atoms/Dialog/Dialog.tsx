import React from "react"
import * as DialogPrimitive from "@radix-ui/react-dialog"
import { Cross1Icon } from "@radix-ui/react-icons"

interface DialogContentProps {
  children?: JSX.Element | string
}

export const DialogContent = (props: DialogContentProps) => {
  const { children } = props
  return (
    <DialogPrimitive.Portal>
      <DialogPrimitive.Overlay />
      <DialogPrimitive.Content>
        {children}
        {/* 열심히 고치는중.. */}
        <DialogPrimitive.Close aria-label="Close">
          <Cross1Icon />
        </DialogPrimitive.Close>
      </DialogPrimitive.Content>
    </DialogPrimitive.Portal>
  )
}
// export const DialogContent = React.forwardRef(
//   ({ children, ...props }, forwardedRef) => (

//   )
// );

export const Dialog = DialogPrimitive.Root
export const DialogTrigger = DialogPrimitive.Trigger
