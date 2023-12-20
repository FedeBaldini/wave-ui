import { Meta, StoryFn } from "@storybook/react";

import { MyCounter, Props } from "../MyCounter";

export default {
  title: "components / MyCounter",
  component: MyCounter
} as Meta;

export const Standard: StoryFn<Props> = (args) => <MyCounter {...args} />;
