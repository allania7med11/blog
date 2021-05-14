import type { Reducer } from "redux";
import { sectionActionTypes, sectionState } from "./types";
const initial: sectionState = {
  action: "create",
  show: false,
  current: {
    id: 0,
    type: "page",
    title: "",
    description: "",
    body: "",
    sectionId: "",
  },
  parent: { sections: [] },
  displayId: -1,
  extend: true,
};
const { SECTION_CURRENT, SECTION_PARENT, SECTION_CLOSE, SECTION_DISPLAY,SECTION_EXTEND } =
  sectionActionTypes;
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
    case SECTION_PARENT:
      return { ...state, parent: payload, show: false };
    case SECTION_CLOSE:
      return { ...state, show: false };
    case SECTION_DISPLAY:
      return { ...state, displayId: payload };
    case SECTION_EXTEND:
      return { ...state, extend: !state.extend };
    default:
      return state;
  }
};
export default sectionReducer;
