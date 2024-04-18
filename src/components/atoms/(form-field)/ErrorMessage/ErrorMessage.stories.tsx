import { type Meta, type StoryObj } from "@storybook/react";
import ErrorMessage from "./ErrorMessage";

const meta = {
  title: "components/atoms/form-field/ErrorMessage",
  component: ErrorMessage,
  parameters: { layout: "centered" },
  tags: ["autodocs"],
} satisfies Meta<typeof ErrorMessage>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Primary: Story = { args: { children: "This field is required" } };
