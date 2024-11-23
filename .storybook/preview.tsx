import type { Preview } from "@storybook/react";
import { Inter } from "next/font/google";
import React from "react";

const inter = Inter({
  subsets: ["latin"],
  display: "swap",
});

const preview: Preview = {
  parameters: {
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/i,
      },
    },
  },
  decorators: [
    (Story) => (
      <div className={inter.className}>
        <Story />
      </div>
    ),
  ],

  tags: ["autodocs"],
};

export default preview;
