import { Meta, StoryFn } from "@storybook/react";

import { Container } from "../components";

export default {
  title: "components / Container",
  component: Container
} as Meta;

export const Standard: StoryFn = (args) => (
  <Container {...args} />
);
