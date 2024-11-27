import { Action } from "@/reducer/actions";
import { initialState, TreeFilterState } from "@/reducer/reducer";
import { TreeLeaf } from "@/lib/assetsTree";
import { createContext } from "react";

export interface ContextTreeType {
  selectedAsset: TreeLeaf | null;
  filterState: TreeFilterState;
  dispatchFilterState: (action: Action) => void;
  handleSetActiveAsset: (newAsset: TreeLeaf) => void;
}

export const AssetTreeContext = createContext<ContextTreeType>({
  selectedAsset: null,
  filterState: initialState,
  dispatchFilterState: () => {},
  handleSetActiveAsset: () => {},
});
