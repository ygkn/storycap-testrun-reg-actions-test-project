import { Avatar, AvatarFallback, AvatarImage } from "./avatar";
import { Meta, StoryObj } from "@storybook/react";

const meta = {
  component: Avatar,
  args: {
    children: [
      <AvatarImage src="/placeholder-user.jpg" />,
      <AvatarFallback>JD</AvatarFallback>,
    ],
  },
} satisfies Meta<typeof Avatar>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default = {} satisfies Story;
