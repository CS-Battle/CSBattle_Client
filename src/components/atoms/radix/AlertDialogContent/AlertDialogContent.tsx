import * as AlertDialog from "@radix-ui/react-alert-dialog"

interface AlertDialogContentProps {
  children?: JSX.Element
}

export const AlertDialogContent = (props: AlertDialogContentProps) => {
  const { children } = props
  return (
    <AlertDialog.Portal>
      <AlertDialog.Overlay className="fixed inset-0 bg-black opacity-75" />
      <AlertDialog.Content className="fixed top-[50%] left-[50%] max-h-[85vh] w-[90vw] max-w-[450px] translate-x-[-50%] translate-y-[-50%] rounded-[6px] bg-white p-[25px] shadow-[hsl(206_22%_7%_/_35%)_0px_10px_38px_-10px,_hsl(206_22%_7%_/_20%)_0px_10px_20px_-15px] focus:outline-none">
        {children}
      </AlertDialog.Content>
    </AlertDialog.Portal>
  )
}
