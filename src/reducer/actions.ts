export type Action =
  | { type: typeof SET_SEARCH_STRING; payload: string }
  | { type: typeof TOGGLE_ENERGY_FILTER }
  | { type: typeof TOGGLE_CRITICAL_FILTER };

export const SET_SEARCH_STRING = "SET_SEARCH_STRING";
export const TOGGLE_ENERGY_FILTER = "TOGGLE_ENERGY_FILTER";
export const TOGGLE_CRITICAL_FILTER = "TOGGLE_CRITICAL_FILTER";
