/* eslint-disable react/display-name */
import "@testing-library/jest-dom";
import React from "react";

import { render, screen, fireEvent } from "@testing-library/react";
import AssetTreeNode from "../AssetsTreeNode";
import { TreeNode } from "@/lib/assetsTree";

jest.mock("@/icons/location.svg", () => () => (
  <svg data-testid="location-icon" />
));
jest.mock("@/icons/asset.svg", () => () => <svg data-testid="asset-icon" />);
jest.mock("@/icons/component.svg", () => () => (
  <svg data-testid="component-icon" />
));
jest.mock("@/icons/arrow_down.svg", () => () => (
  <svg data-testid="arrow-down" />
));
jest.mock("@/icons/arrow_right.svg", () => () => (
  <svg data-testid="arrow-right" />
));

const mockData: TreeNode = {
  id: "1",
  name: "Location 1",
  type: "location",
  children: [
    {
      id: "2",
      name: "Asset 1",
      type: "asset",
      children: [
        {
          id: "3",
          name: "Component 1",
          type: "component",
          path: new Map(),
          gatewayId: null,
          sensorType: null,
          status: null,
          sensorId: null,
          locationId: null,
          parentId: null,
        },
      ],
      path: new Map(),
      locationId: "1",
      parentId: null,
      sensorType: null,
      status: null,
      gatewayId: null,
      sensorId: null,
    },
  ],
  path: new Map(),
  parentId: null,
};

const renderTreeNode = (data: TreeNode) => {
  render(<AssetTreeNode data={data} />);
};

describe("AssetTreeNode", () => {
  it("renders a location node with an asset and a component", () => {
    renderTreeNode(mockData);

    expect(screen.getByText("Location 1")).toBeInTheDocument();
  });

  it("renders asset node when opened", () => {
    renderTreeNode(mockData);

    expect(screen.queryByText("Asset 1")).toBeNull();

    fireEvent.click(screen.getByText("Location 1"));

    expect(screen.getByText("Asset 1")).toBeInTheDocument();
  });

  it("renders component node when asset node is opened", () => {
    renderTreeNode(mockData);

    fireEvent.click(screen.getByText("Location 1"));
    fireEvent.click(screen.getByText("Asset 1"));

    expect(screen.getByText("Component 1")).toBeInTheDocument();
  });

  it("toggles the tree node state when clicked", () => {
    renderTreeNode(mockData);

    expect(screen.queryByText("Asset 1")).toBeNull();

    fireEvent.click(screen.getByText("Location 1"));
    expect(screen.getByText("Asset 1")).toBeInTheDocument();

    fireEvent.click(screen.getByText("Location 1"));
    expect(screen.queryByText("Asset 1")).toBeNull();
  });
});
