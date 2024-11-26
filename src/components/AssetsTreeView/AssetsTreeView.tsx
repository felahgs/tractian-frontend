import React, {
  ChangeEvent,
  useCallback,
  useContext,
  useRef,
  useState,
} from "react";

import Flex from "../Layout/Flex";
import clsx from "clsx";
import debounce from "lodash.debounce";

import SearchIcon from "@/icons/search.svg";

import AssetsTree from "./AssetsTree";

import { TreeLeaf, TreeNode } from "@/lib/assetsTree";
import { AssetTreeContext } from "@/contexts/AssetTreeContext";
import { SET_SEARCH_STRING } from "@/app/reducer/action";

import styles from "./AssetsTreeView.module.scss";

interface AssetsTreeViewProps {
  treeData: Array<TreeNode | TreeLeaf>;
  className: string;
}

function AssetsTreeView({ treeData, className }: AssetsTreeViewProps) {
  const [inputValue, setInputValue] = useState("");
  const { dispatchFilterState } = useContext(AssetTreeContext);

  const inputRef = useRef<HTMLInputElement>(null);

  const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
    setInputValue(event.target.value);
    debouncedSave(event.target.value);
  };

  const handleInputSelect = () => {
    if (inputRef.current) {
      inputRef.current.select();
    }
  };

  // eslint-disable-next-line react-hooks/exhaustive-deps
  const debouncedSave = useCallback(
    debounce(
      (seachInput) =>
        dispatchFilterState({ type: SET_SEARCH_STRING, payload: seachInput }),
      500,
    ),
    [],
  );

  return (
    <Flex direction="column" className={clsx(styles.container, className)}>
      <Flex p="md" align="center" className={clsx(styles.inputContainer)}>
        <input
          ref={inputRef}
          className={styles.input}
          placeholder="Buscar Ativo ou Local"
          type="text"
          name="search"
          id="search-asset"
          value={inputValue}
          onClick={handleInputSelect}
          onChange={handleChange}
        />
        <SearchIcon />
      </Flex>

      <AssetsTree data={treeData} />
    </Flex>
  );
}

export default AssetsTreeView;
