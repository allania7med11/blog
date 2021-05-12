import type { Reducer } from "redux";
import { sectionActionTypes, sectionState } from "../../types/section";
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
  parent:{sections:[]},
  displayId: -1,
};
const { SECTION_CURRENT, SECTION_PARENT, SECTION_CLOSE, SECTION_DISPLAY } =
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
    default:
      return state;
  }
};
export default sectionReducer;
