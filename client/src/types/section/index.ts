import { ThunkDispatch } from "redux-thunk";
import type { AnyAction } from "redux";
export type CUD = "create" | "update" | "delete";
export type UpdateSection = { action: CUD; section: Section };
export type Dispatch = ThunkDispatch<{}, {}, AnyAction>;
export interface Section {
  id: Number | null;
  type: string | null;
  title: string | null;
  description: string | null;
  body: string | null;
  sectionId: string | null;
}
export interface sectionState {
  action: string;
  show: boolean;
  current: Section;
  list: Section[];
}

export enum sectionActionTypes {
  SECTION_CURRENT = "SECTION_CURRENT",
  SECTION_LIST = "SECTION_LIST",
  SECTION_CLOSE = "SECTION_CLOSE",
}
