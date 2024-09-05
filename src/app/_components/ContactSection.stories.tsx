import { ContactSection } from "./ContactSection";
import { Meta, StoryObj } from "@storybook/react";

const meta = {
  component: ContactSection,
  parameters: {
    layout: "fullscreen",
  },
} satisfies Meta<typeof ContactSection>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default = {} satisfies Story;
