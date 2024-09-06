import type { TestRunnerConfig } from "@storybook/test-runner";
import path from "path";
import { title } from "process";
import { screenshot } from "storycap-testrun";

export const customViewport = {
  mobile: {
    name: "Mobile",
    styles: {
      width: "390px",
      height: "640px",
    },
  },
  tablet: {
    name: "Tablet",
    styles: {
      width: "767px",
      height: "1024px",
    },
  },
  pc: {
    name: "PC",
    styles: {
      width: "1280px",
      height: "720px",
    },
  },
};

const config: TestRunnerConfig = {
  async postVisit(page, context) {
    page.setDefaultTimeout(0);

    for (const viewport of Object.values({
      ...customViewport,
    })) {
      const viewportName = viewport.name;
      const viewportWidth = Number(viewport.styles.width.replace(/px$/, ""));
      const viewportHeight = Number(viewport.styles.height.replace(/px$/, ""));

      await page.setViewportSize({
        width: viewportWidth,
        height: viewportHeight,
      });

      await screenshot(page, context, {
        output: {
          file: path.join("[title]", "[name]", `${viewportName}.png`),
        },
      });
    }
  },
};

export default config;
