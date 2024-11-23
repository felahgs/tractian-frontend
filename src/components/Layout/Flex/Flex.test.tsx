import React from "react";
import { render } from "@testing-library/react";
import "@testing-library/jest-dom"; // For the `toBeInTheDocument` matcher
import Flex from "./Flex";

describe("Flex Component", () => {
  it("should render children correctly", () => {
    const { getByText } = render(
      <Flex>
        <div>Test content</div>
        <div>Another content</div>
      </Flex>,
    );

    // Check that both children are rendered
    expect(getByText("Test content")).toBeInTheDocument();
    expect(getByText("Another content")).toBeInTheDocument();
  });

  it("should render with a custom className", () => {
    const { container } = render(
      <Flex className="custom-class">
        <div>Test content</div>
      </Flex>,
    );

    const divElement = container.querySelector("div");
    expect(divElement).toBeInTheDocument();
    expect(divElement).toHaveClass("custom-class");
  });

  it("should apply the correct gap value for small, medium, and large", () => {
    const { container: smallContainer } = render(
      <Flex gap="small">
        <div>Test content</div>
      </Flex>,
    );
    const { container: mediumContainer } = render(
      <Flex gap="medium">
        <div>Test content</div>
      </Flex>,
    );
    const { container: largeContainer } = render(
      <Flex gap="large">
        <div>Test content</div>
      </Flex>,
    );

    const { container: customContainer } = render(
      <Flex gap="20px">
        <div>Test content</div>
      </Flex>,
    );

    expect(smallContainer.querySelector("div")).toBeInTheDocument();
    expect(mediumContainer.querySelector("div")).toBeInTheDocument();
    expect(largeContainer.querySelector("div")).toBeInTheDocument();
    expect(customContainer.querySelector("div")).toBeInTheDocument();
  });
});
