export interface Breakpoint {
  sm: boolean;
  md: boolean;
  lg: boolean;
  xl: boolean;
}
export interface breakpointState {
  up: Breakpoint;
}
export enum breakpointActionTypes {
  UP_UPDATE = "UP_UPDATE",
}
