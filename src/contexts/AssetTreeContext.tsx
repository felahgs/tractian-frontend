import { Action } from "@/app/reducer/action";
import { initialState, TreeFilterState } from "@/app/reducer/reducer";
import { TreeLeaf } from "@/lib/assetsTree";
import { createContext } from "react";

interface ContextTreeType {
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
