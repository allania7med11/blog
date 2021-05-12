import type { Reducer } from "redux";
import { sectionActionTypes, sectionState } from "../../types/section";
const initial: sectionState = {
  action: "create",
  show: false,
  current: {
    id: null,
    type: null,
    title: null,
    description: null,
    body: null,
    sectionId: null,
  },
  list: [],
};
const { SECTION_CURRENT, SECTION_LIST, SECTION_CLOSE } = sectionActionTypes;
const sectionReducer: Reducer<
  sectionState,
  { type: sectionActionTypes; payload?: any }
> = (state = initial, { type, payload }) => {
  switch (type) {
    case SECTION_CURRENT:
      return {
        ...state,
        current: payload.section ? payload.section : initial.current,
        action: payload.action,
        show: true,
      };
    case SECTION_LIST:
      return { ...state, list: payload.list, show: false };
    case SECTION_CLOSE:
      return { ...state, show: false };
    default:
      return state;
  }
};
export default sectionReducer;
