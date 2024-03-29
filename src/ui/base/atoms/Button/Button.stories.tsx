import { ComponentStory, ComponentMeta } from "@storybook/react"
import Button from "./Button"

export default {
  title: "Atom/Button",
  component: Button,
  argTypes: {
    backgroundColor: { control: "color" },
  },
} as ComponentMeta<typeof Button>

const Template: ComponentStory<typeof Button> = (args) => <Button {...args} />
export const Default = Template.bind({})

Default.args = {
  children: "Default",
}
