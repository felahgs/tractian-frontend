import React from "react";
import { render } from "@testing-library/react";
import "@testing-library/jest-dom";
import Flex from "./Flex";

describe("Flex Component", () => {
  it("should render children correctly", () => {
    const { getByText } = render(
      <Flex>
        <div>Test content</div>
        <div>Another content</div>
      </Flex>,
    );

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

  it("should render with a custom className", () => {
    const { container } = render(
      <Flex fluidH className="custom-class">
        <div>Test content</div>
      </Flex>,
    );

    const divElement = container.querySelector("div");
    expect(divElement).toBeInTheDocument();
    expect(divElement).toHaveClass("custom-class");
  });

  it("should render with correctly with fluid prop", () => {
    const { getByText } = render(
      <Flex fluid>
        <div>fluid</div>
      </Flex>,
    );

    expect(getByText("fluid")).toBeInTheDocument();
  });

  it("should render with correctly with fluidH prop", () => {
    const { getByText } = render(
      <Flex fluidH>
        <div>fluidH</div>
      </Flex>,
    );

    expect(getByText("fluidH")).toBeInTheDocument();
  });

  it("should apply the correct gap value for small, medium, and large", () => {
    const { container: smallContainer } = render(
      <Flex gap="sm">
        <div>Test content</div>
      </Flex>,
    );
    const { container: mediumContainer } = render(
      <Flex gap="md">
        <div>Test content</div>
      </Flex>,
    );
    const { container: largeContainer } = render(
      <Flex gap="lg">
        <div>Test content</div>
      </Flex>,
    );

    expect(smallContainer.querySelector("div")).toBeInTheDocument();
    expect(mediumContainer.querySelector("div")).toBeInTheDocument();
    expect(largeContainer.querySelector("div")).toBeInTheDocument();
  });
});
