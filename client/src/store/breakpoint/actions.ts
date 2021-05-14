import { breakpointActionTypes } from "./types";

const { UP_UPDATE } = breakpointActionTypes;
export const upUpdate = (payload: {[key:string]:boolean}) => ({
  type: UP_UPDATE,
  payload: payload,
});
