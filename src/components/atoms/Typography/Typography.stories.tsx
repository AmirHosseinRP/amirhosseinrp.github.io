import { type Meta, type StoryObj } from "@storybook/react";
import Typography from "./Typography";

const meta = {
  title: "components/atoms/Typography",
  component: Typography,
  parameters: { layout: "centered" },
  tags: ["autodocs"],
} satisfies Meta<typeof Typography>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Primary: Story = { args: { variant: "h1", children: "صرفا جهت تست" } };
