import { FeaturesSection } from "./FeaturesSection";
import { Meta, StoryObj } from "@storybook/react";

const meta = {
  component: FeaturesSection,
  parameters: {
    layout: "fullscreen",
  },
} satisfies Meta<typeof FeaturesSection>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default = {} satisfies Story;
