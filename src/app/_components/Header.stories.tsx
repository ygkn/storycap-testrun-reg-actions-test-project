import { Header } from "./Header";
import { Meta, StoryObj } from "@storybook/react";

const meta = {
  component: Header,
  parameters: {
    layout: "fullscreen",
  },
} satisfies Meta<typeof Header>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default = {} satisfies Story;
