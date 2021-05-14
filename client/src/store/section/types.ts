import { ThunkDispatch } from "redux-thunk";
import type { AnyAction } from "redux";
import { ChangeEvent } from "react";
export type CUD = "create" | "update" | "delete";

export type UpdateSection = { action: CUD; section: Section };
export type Dispatch = ThunkDispatch<{}, {}, AnyAction>;

export interface Section {
  id?: Number;
  type?: string;
  title?: string;
  description?: string;
  body?: string;
  sectionId?: string;
}
export interface parentSection extends Section {
  sections: Section[];
}
export interface sectionState {
  action: CUD;
  show: boolean;
  current: Section;
  parent: parentSection;
  displayId: Number;
  extend: boolean;
}

export enum sectionActionTypes {
  SECTION_CURRENT = "SECTION_CURRENT",
  SECTION_PARENT = "SECTION_PARENT",
  SECTION_CLOSE = "SECTION_CLOSE",
  SECTION_DISPLAY = "SECTION_DISPLAY",
  SECTION_EXTEND = "SECTION_EXTEND",
}

export interface UseSection {
  current: Section;
  action: CUD;
  dispatch: Dispatch;
}

export type UpdateInput = ChangeEvent<HTMLInputElement | HTMLTextAreaElement>;
