import { HeroSection } from "./HeroSection";
import { Meta, StoryObj } from "@storybook/react";

const meta = {
  component: HeroSection,
  parameters: {
    layout: "fullscreen",
  },
} satisfies Meta<typeof HeroSection>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default = {} satisfies Story;
