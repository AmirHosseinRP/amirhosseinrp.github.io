import { type Meta, type StoryObj } from "@storybook/react";
import Input from "./Input";

const meta = {
  title: "UI-Atoms/Input",
  component: Input,
  parameters: { layout: "centered" },
  tags: ["autodocs"],
} satisfies Meta<typeof Input>;

export default meta;
export const Primary: StoryObj<typeof Input> = { args: { defaultValue: "default value" } };
export const Disabled: StoryObj<typeof Input> = {
  args: { value: "disabled field", disabled: true },
};
export const HasError: StoryObj<typeof Input> = {
  args: { defaultValue: "error", className: "form-field--has-error" },
};
