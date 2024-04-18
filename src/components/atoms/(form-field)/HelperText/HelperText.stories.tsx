import { type Meta, type StoryObj } from "@storybook/react";
import HelperText from "./HelperText";

const meta = {
  title: "components/atoms/form-field/HelperText",
  component: HelperText,
  parameters: { layout: "centered" },
  tags: ["autodocs"],
} satisfies Meta<typeof HelperText>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Primary: Story = { args: { children: "guide test" } };
