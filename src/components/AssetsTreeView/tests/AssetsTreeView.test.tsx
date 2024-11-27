/* eslint-disable react/display-name */
import React from "react";
import "@testing-library/jest-dom";
import { render, screen, fireEvent, waitFor } from "@testing-library/react";

import { AssetTreeContext, ContextTreeType } from "@/contexts/AssetTreeContext";
import { SET_SEARCH_STRING } from "@/reducer/actions";

import AssetsTreeView from "../AssetsTreeView";
import { TreeLeaf, TreeNode } from "@/lib/assetsTree";

// Mocking SearchIcon
jest.mock("@/icons/search.svg", () => () => <svg data-testid="search-icon" />);

const mockDispatchFilterState = jest.fn();

const treeData = [
  {
    id: "1",
    name: "Node 1",
    type: "location",
    children: [],
    path: new Map(),
    parentId: null,
  } as TreeNode,
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
  } as TreeLeaf,
];

const renderAssetsTreeViewWithContext = (
  treeData: Array<TreeNode | TreeLeaf>,
) => {
  const mockFilterState = {
    energyFilterOn: false,
    criticalFilterOn: false,
    searchString: "",
  };

  render(
    <AssetTreeContext.Provider
      value={
        {
          dispatchFilterState: mockDispatchFilterState,
          filterState: mockFilterState,
        } as unknown as ContextTreeType
      }
    >
      <AssetsTreeView treeData={treeData} className="test-class" />
    </AssetTreeContext.Provider>,
  );
};

describe("AssetsTreeView", () => {
  afterAll(() => {
    jest.clearAllMocks();
  });

  beforeEach(() => {
    mockDispatchFilterState.mockClear();
  });

  it("renders the input field with correct placeholder", () => {
    renderAssetsTreeViewWithContext(treeData);

    const input = screen.getByPlaceholderText("Buscar Ativo ou Local");
    expect(input).toBeInTheDocument();
  });

  it("updates the inputValue state when the user types", () => {
    renderAssetsTreeViewWithContext(treeData);

    const input = screen.getByPlaceholderText("Buscar Ativo ou Local");

    fireEvent.change(input, { target: { value: "Component" } });

    expect(input).toHaveValue("Component");
  });

  it("calls dispatchFilterState with the debounced value after typing", async () => {
    renderAssetsTreeViewWithContext(treeData);

    const input = screen.getByPlaceholderText("Buscar Ativo ou Local");

    fireEvent.change(input, { target: { value: "Component" } });

    await waitFor(() => {
      expect(mockDispatchFilterState).toHaveBeenCalledWith({
        type: SET_SEARCH_STRING,
        payload: "Component",
      });
    });
  });

  it("renders the AssetsTree component", () => {
    renderAssetsTreeViewWithContext(treeData);

    expect(screen.getByText("Node 1")).toBeInTheDocument();
    expect(screen.getByText("Component 1")).toBeInTheDocument();
  });
});
