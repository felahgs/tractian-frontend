import { TreeLeaf } from "@/lib/assetsTree";
import { createContext } from "react";

interface ContextTreeType {
  selectedAsset: TreeLeaf | null;
  handleSetActiveAsset: (newAsset: TreeLeaf) => void;
}

export const AssetTreeContext = createContext<ContextTreeType>({
  selectedAsset: null,
  handleSetActiveAsset: () => {},
});
