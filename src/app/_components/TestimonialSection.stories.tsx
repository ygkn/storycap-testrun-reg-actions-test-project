import { TestimonialSection } from "./TestimonialSection";
import { Meta, StoryObj } from "@storybook/react";

const meta = {
  component: TestimonialSection,
  parameters: {
    layout: "fullscreen",
  },
} satisfies Meta<typeof TestimonialSection>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default = {} satisfies Story;
