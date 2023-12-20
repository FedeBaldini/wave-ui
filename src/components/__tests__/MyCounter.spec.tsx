import { render } from "@testing-library/react";

import { MyCounter } from "../MyCounter";

describe("Common render", () => {
  it("renders without crashing", () => {
    render(<MyCounter />);
  });
});
