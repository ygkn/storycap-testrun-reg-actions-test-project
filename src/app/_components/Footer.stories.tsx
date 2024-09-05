import { Footer } from "./Footer";
import { Meta, StoryObj } from "@storybook/react";

const meta = {
  component: Footer,
  parameters: {
    layout: "fullscreen",
  },
} satisfies Meta<typeof Footer>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default = {} satisfies Story;
