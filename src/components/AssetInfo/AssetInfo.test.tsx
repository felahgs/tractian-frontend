/* eslint-disable react/display-name */
import "@testing-library/jest-dom";

import React from "react";
import { render, screen } from "@testing-library/react";

import { AssetTreeContext, ContextTreeType } from "@/contexts/AssetTreeContext";
import { ComponentNode, TreeLeaf } from "@/lib/assetsTree";

import AssetInfo from "./AssetInfo";

jest.mock("@/icons/dot.svg", () => () => <div>Dot Icon</div>);
jest.mock("@/icons/bolt.svg", () => () => <div>Bolt Icon</div>);
jest.mock("@/icons/inbox.svg", () => () => <div>Inbox Icon</div>);
jest.mock("@/icons/sensor.svg", () => () => <div>Sensor Icon</div>);
jest.mock("@/icons/md_outliner_router.svg", () => () => (
  <div>Receptor Icon</div>
));

describe("AssetInfo Component", () => {
  const renderWithContext = (selectedAsset: ComponentNode | null) => {
    return render(
      <AssetTreeContext.Provider value={{ selectedAsset } as ContextTreeType}>
        <AssetInfo className="test-class" />
      </AssetTreeContext.Provider>,
    );
  };

  it("should render the 'select asset' message when no asset is selected", () => {
    renderWithContext(null); // No asset selected

    expect(
      screen.getByText("Selecione um ativo para ver seus detalhes."),
    ).toBeInTheDocument();
  });

  it("should render asset information when an asset is selected", () => {
    const mockAsset: ComponentNode = {
      name: "Wind Sensor",
      gatewayId: "12345",
      sensorId: "67890",
      status: "operating",
      sensorType: "energy",
    } as TreeLeaf;

    renderWithContext(mockAsset);

    // Check if the asset name is rendered
    expect(screen.getByText("Wind Sensor")).toBeInTheDocument();

    expect(screen.getByText("67890")).toBeInTheDocument();
    expect(screen.getByText("12345")).toBeInTheDocument();
    expect(screen.getByText("Tipo de Equipamento")).toBeInTheDocument();
    expect(screen.getByText("Elétrica")).toBeInTheDocument();
    expect(screen.getByText("E")).toBeInTheDocument();
  });

  it("should render mechanical responsibilities for non-energy assets", () => {
    const mockAsset: ComponentNode = {
      name: "Motor Mecânico",
      gatewayId: "98765",
      sensorId: "54321",
      status: "operating",
      sensorType: "vibration",
    } as TreeLeaf;

    renderWithContext(mockAsset);

    expect(screen.getByText("Mecânica")).toBeInTheDocument();
    expect(screen.getByText("M")).toBeInTheDocument();
  });
});
