/* eslint-disable react/display-name */
import React from "react";
import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";

import { AssetTreeContext, ContextTreeType } from "@/contexts/AssetTreeContext";
import { TreeNode, ComponentNode } from "@/lib/assetsTree";

import AssetsTree from "../AssetsTree";

jest.mock("@/icons/location.svg", () => () => (
  <svg data-testid="location-icon" />
));
jest.mock("@/icons/asset.svg", () => () => <svg data-testid="asset-icon" />);
jest.mock("@/icons/component.svg", () => () => (
  <svg data-testid="component-icon" />
));
jest.mock("@/icons/dot.svg", () => () => <svg data-testid="dot-icon" />);
jest.mock("@/icons/bolt.svg", () => () => <svg data-testid="bolt-icon" />);

const treeData: Array<TreeNode | ComponentNode> = [
  {
    id: "1",
    name: "Node 1",
    type: "location",
    children: [],
    path: new Map(),
    parentId: null,
  },
  {
    id: "2",
    name: "Component 1",
    type: "component",
    sensorType: "energy",
    status: "operating",
    path: new Map(),
    locationId: "1",
    parentId: "1",
    gatewayId: "gateway-1",
    sensorId: "sensor-1",
  },
  {
    id: "3",
    name: "Asset 1",
    type: "asset",
    path: new Map(),
    locationId: "1",
    parentId: "1",
    sensorType: "energy",
    status: "alert",
    gatewayId: "gateway-2",
    sensorId: "sensor-2",
    children: [],
  },
];

const mockFilterState = {
  energyFilterOn: false,
  criticalFilterOn: false,
  searchString: "",
};

const renderAssetsTreeWithContext = (filterState = mockFilterState) => {
  render(
    <AssetTreeContext.Provider
      value={
        {
          filterState,
          handleSetActiveAsset: jest.fn(),
        } as unknown as ContextTreeType
      }
    >
      <AssetsTree data={treeData} />
    </AssetTreeContext.Provider>,
  );
};

const renderEmptyTree = (filterState = mockFilterState) => {
  render(
    <AssetTreeContext.Provider
      value={
        {
          filterState,
          handleSetActiveAsset: jest.fn(),
        } as unknown as ContextTreeType
      }
    >
      <AssetsTree data={[]} />
    </AssetTreeContext.Provider>,
  );
};

jest.mock("@/lib/assetsTreeFilters", () => ({
  NameSearchFilter: jest.fn().mockImplementation(() => ({
    apply: jest.fn((node) => node.name.toLowerCase().includes("component")),
  })),
  EnergyFilter: jest.fn().mockImplementation(() => ({
    apply: jest.fn((node) => node.sensorType === "energy"),
  })),
  CriticalFilter: jest.fn().mockImplementation(() => ({
    apply: jest.fn((node) => node.status === "operating"),
  })),
}));

describe("AssetsTree", () => {
  afterEach(() => {
    jest.clearAllMocks();
  });

  it("should render tree with no filters applied", () => {
    renderAssetsTreeWithContext();

    expect(screen.getByText("Node 1")).toBeInTheDocument();
    expect(screen.getByText("Component 1")).toBeInTheDocument();
    expect(screen.getByText("Asset 1")).toBeInTheDocument();
  });

  it("should render filtered tree when energyFilter is applied", () => {
    const filterState = {
      energyFilterOn: true,
      criticalFilterOn: false,
      searchString: "",
    };
    renderAssetsTreeWithContext(filterState);

    expect(screen.queryByText("Node 1")).not.toBeInTheDocument();
    expect(screen.getByText("Component 1")).toBeInTheDocument();
    expect(screen.queryByText("Asset 1")).not.toBeInTheDocument();
  });

  it("should show a message when the tree is rendered without data", () => {
    renderEmptyTree();

    expect(
      screen.getByText(
        "Não foram encontrados ativos que correspondam aos filtros selecionados.",
      ),
    ).toBeInTheDocument();
  });

  it("should render tree with search filter applied", () => {
    const filterState = {
      energyFilterOn: false,
      criticalFilterOn: false,
      searchString: "Component",
    };
    renderAssetsTreeWithContext(filterState);

    expect(screen.queryByText("Node 1")).not.toBeInTheDocument();
    expect(screen.getByText("Component 1")).toBeInTheDocument();
    expect(screen.queryByText("Asset 1")).not.toBeInTheDocument();
  });

  it("should render tree with multiple filters applied", () => {
    const filterState = {
      energyFilterOn: true,
      criticalFilterOn: true,
      searchString: "Component",
    };
    renderAssetsTreeWithContext(filterState);

    expect(screen.queryByText("Node 1")).not.toBeInTheDocument();
    expect(screen.getByText("Component 1")).toBeInTheDocument();
    expect(screen.queryByText("Asset 1")).not.toBeInTheDocument();
  });
});
