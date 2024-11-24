import type { Meta, StoryObj } from "@storybook/react";

import Avatar from "./Avatar";

const meta = {
  component: Avatar,
} satisfies Meta<typeof Avatar>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    initials: "E",
    backgroundColor: "#000000",
  },
};
