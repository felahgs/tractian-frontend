import type { Meta, StoryObj } from "@storybook/react";
import { ReactComponent as Gold } from "@/icons/gold.svg";

import Button from "./Button";

const meta = {
  component: Button,
  args: {
    disabled: false,
    active: false,
  },
} satisfies Meta<typeof Button>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Primary: Story = {
  args: {
    variant: "primary",
    children: "Primary",
  },
};

export const Secondary: Story = {
  args: {
    variant: "secondary",
    children: "Secondary",
  },
};

export const Compact: Story = {
  args: {
    variant: "primary",
    conpact: true,
    children: "Compact",
  },
};

export const WithIcon: Story = {
  args: {
    variant: "primary",
    children: "With Icon",
    icon: <Gold />,
  },
};
