import { Input } from "./input";
import { Meta, StoryObj } from "@storybook/react";

const meta = {
  component: Input,
  args: {
    placeholder: "Placeholder",
  },
} satisfies Meta<typeof Input>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default = {} satisfies Story;
