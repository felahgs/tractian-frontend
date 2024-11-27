import {
  Action,
  SET_SEARCH_STRING,
  TOGGLE_ENERGY_FILTER,
  TOGGLE_CRITICAL_FILTER,
} from "./actions";

export type TreeFilterState = {
  searchString: string;
  energyFilterOn: boolean;
  criticalFilterOn: boolean;
};

export const initialState = {
  searchString: "",
  energyFilterOn: false,
  criticalFilterOn: false,
};

export function treeFilterReducer(state: TreeFilterState, action: Action) {
  switch (action.type) {
    case SET_SEARCH_STRING:
      return { ...state, searchString: action.payload };
    case TOGGLE_ENERGY_FILTER:
      return { ...state, energyFilterOn: !state.energyFilterOn };
    case TOGGLE_CRITICAL_FILTER:
      return { ...state, criticalFilterOn: !state.criticalFilterOn };
    default:
      return state;
  }
}
