import { HomePage } from "./HomePage";
import { Meta, StoryObj } from "@storybook/react";

const meta = {
  component: HomePage,
  parameters: {
    layout: "fullscreen",
  },
} satisfies Meta<typeof HomePage>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default = {} satisfies Story;
