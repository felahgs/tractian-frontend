import type { Meta, StoryObj } from "@storybook/react";

import Header from "./Header";

const meta = {
  parameters: {
    layout: "fullscreen",
  },
  component: Header,
} satisfies Meta<typeof Header>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {
  parameters: {
    nextjs: {
      appDirectory: true,
      navigation: {
        pathname: "/home",
      },
    },
  },
  args: {
    companies: [
      {
        id: "1",
        name: "Company 1",
      },
      {
        id: "2",
        name: "Company 2",
      },
      {
        id: "3",
        name: "Company 3",
      },
    ],
  },
};
