/* eslint-disable react/display-name */
import React from "react";
import { render, screen, fireEvent } from "@testing-library/react";
import "@testing-library/jest-dom";

import { AssetTreeContext, ContextTreeType } from "@/contexts/AssetTreeContext";

import AssetTreeLeaf from "../AssetsTreeLeaf";
import { TreeLeaf } from "@/lib/assetsTree";

jest.mock("@/icons/location.svg", () => () => (
  <svg data-testid="location-icon" />
));
jest.mock("@/icons/asset.svg", () => () => <svg data-testid="asset-icon" />);
jest.mock("@/icons/component.svg", () => () => (
  <svg data-testid="component-icon" />
));
jest.mock("@/icons/dot.svg", () => () => <svg data-testid="dot-icon" />);
jest.mock("@/icons/bolt.svg", () => () => <svg data-testid="bolt-icon" />);

const mockData = {
  id: "1",
  name: "Component 1",
  type: "component",
  status: "operating",
  sensorType: "vibration",
  path: new Map(),
  locationId: "1",
  parentId: "1",
  gatewayId: "gateway-1",
  sensorId: "sensor-1",
} as TreeLeaf;

const mockHandleSetActiveAsset = jest.fn();

const renderAssetTreeLeaf = (data = mockData) => {
  render(
    <AssetTreeContext.Provider
      value={
        {
          selectedAsset: data,
          handleSetActiveAsset: mockHandleSetActiveAsset,
          filterState: null,
          dispatchFilterState: null,
        } as unknown as ContextTreeType
      }
    >
      <AssetTreeLeaf data={data} />
    </AssetTreeContext.Provider>,
  );
};

describe("AssetTreeLeaf", () => {
  it("calls handleSetActiveAsset when clicked", () => {
    renderAssetTreeLeaf();

    expect(mockHandleSetActiveAsset).not.toHaveBeenCalled();

    fireEvent.click(screen.getByText("Component 1"));

    expect(mockHandleSetActiveAsset).toHaveBeenCalledWith(mockData);

    expect(mockHandleSetActiveAsset).toHaveBeenCalledTimes(1);
  });

  it("applies the correct active state after clicking", () => {
    renderAssetTreeLeaf();

    const componentNode = screen.getByText("Component 1");

    fireEvent.click(componentNode);

    expect(mockHandleSetActiveAsset).toHaveBeenCalledTimes(1);
  });

  it("applies the correct active state when clicked multiple times", () => {
    renderAssetTreeLeaf();

    const componentNode = screen.getByText("Component 1");

    fireEvent.click(componentNode);
    expect(mockHandleSetActiveAsset).toHaveBeenCalledTimes(1);

    fireEvent.click(componentNode);
    expect(mockHandleSetActiveAsset).toHaveBeenCalledTimes(2);
  });
});
