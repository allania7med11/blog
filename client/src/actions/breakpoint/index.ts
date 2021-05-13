import { Breakpoint, breakpointActionTypes } from "@/types/breakpoint";

const { UP_UPDATE } = breakpointActionTypes;
export const upUpdate = (payload: Breakpoint) => ({
  type: UP_UPDATE,
  payload: payload,
});
