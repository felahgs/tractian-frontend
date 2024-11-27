import { render } from "@testing-library/react";
import { useContext } from "react";
import { AssetTreeContext } from "../AssetTreeContext";
import { initialState } from "@/reducer/reducer";
import { TreeLeaf } from "@/lib/assetsTree";
import { SET_SEARCH_STRING } from "@/reducer";

describe("AssetTreeContext", () => {
  const TestConsumer = () => {
    const context = useContext(AssetTreeContext);
    return (
      <div>
        <div data-testid="selectedAsset">
          {context.selectedAsset ? JSON.stringify(context.selectedAsset) : ""}
        </div>
        <div data-testid="filterState">
          {JSON.stringify(context.filterState)}
        </div>
        <button
          data-testid="dispatchFilterState"
          onClick={() =>
            context.dispatchFilterState({
              type: SET_SEARCH_STRING,
              payload: "",
            })
          }
        >
          Dispatch
        </button>
        <button
          data-testid="handleSetActiveAsset"
          onClick={() =>
            context.handleSetActiveAsset({
              id: "dummy",
              name: "Dummy Asset",
            } as TreeLeaf)
          }
        >
          Set Active Asset
        </button>
      </div>
    );
  };

  it("should have the correct default values", () => {
    const { getByTestId } = render(<TestConsumer />);

    expect(getByTestId("selectedAsset").textContent).toBe("");
    expect(getByTestId("filterState").textContent).toBe(
      JSON.stringify(initialState),
    );
  });

  it("default functions should not throw errors when called", () => {
    const { getByText } = render(<TestConsumer />);

    expect(() => getByText("Dispatch").click()).not.toThrow();
    expect(() => getByText("Set Active Asset").click()).not.toThrow();
  });
});
