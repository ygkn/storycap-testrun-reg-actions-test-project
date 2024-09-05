import type { Preview } from "@storybook/react";

import { Bricolage_Grotesque } from "next/font/google";
import { Space_Mono } from "next/font/google";
import "../src/app/globals.css";

const fontHeading = Bricolage_Grotesque({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-heading",
});

const fontBody = Space_Mono({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-body",
  weight: "400",
});

document.body.classList.add(
  "antialiased",
  fontHeading.variable,
  fontBody.variable,
);

const preview: Preview = {
  parameters: {
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/i,
      },
    },
  },
};

export default preview;
