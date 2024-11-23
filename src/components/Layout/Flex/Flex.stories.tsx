import type { Meta, StoryObj } from "@storybook/react";
import Flex from "./Flex";

const meta = {
  component: Flex,
  args: {
    direction: "row",
    justify: "flex-start",
    align: "flex-start",
    wrap: "nowrap",
    gap: "small",
    style: {},
    children: (
      <>
        <p style={{ padding: "5px", backgroundColor: "lightblue" }}>Text 1</p>
        <p style={{ padding: "5px", backgroundColor: "lightcoral" }}>Text 2</p>
        <p style={{ padding: "5px", backgroundColor: "lightgreen" }}>Text 3</p>
        <p style={{ padding: "5px", backgroundColor: "lightsalmon" }}>Text 4</p>
      </>
    ),
  },
  argTypes: {
    gap: {
      options: ["small", "medium", "large"],
      control: "text",
    },
    p: {
      control: "text",
    },
    pr: {
      control: "text",
    },
    pl: {
      control: "text",
    },
    pt: {
      control: "text",
    },
    pb: {
      control: "text",
    },
  },
} satisfies Meta<typeof Flex>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {},
};
