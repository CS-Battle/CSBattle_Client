import * as RadixLabel from "@radix-ui/react-label"

type LabelProps = {
  children: string | string[] | JSX.Element
}

const Label = (props: LabelProps) => {
  const { children } = props
  return (
    <div className="flex-initial">
      <RadixLabel.Root className="px-4 text-lg" htmlFor="firstName">
        {children}
      </RadixLabel.Root>
    </div>
  )
}

export default Label
