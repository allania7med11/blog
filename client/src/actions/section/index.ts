import api from "@/api/section";
import {
  CUD,
  Dispatch,
  parentSection,
  Section,
  sectionActionTypes,
  UpdateSection,
} from "@/types/section";

const {
  SECTION_CURRENT,
  SECTION_PARENT,
  SECTION_CLOSE,
  SECTION_DISPLAY,
  SECTION_EXTEND,
} = sectionActionTypes;
export const currentCreate = (type: "section" | "page", id: string) => {
  let payload = { action: "create", section: {} };
  payload.section = {
    type: type,
    title: "",
    description: "",
    body: "",
    sectionId: id,
  };
  return {
    type: SECTION_CURRENT,
    payload: payload,
  };
};
export const currentUpdate = (payload: { action: CUD; section?: Section }) => ({
  type: SECTION_CURRENT,
  payload: payload,
});

export const parentUpdate = (payload: parentSection) => ({
  type: SECTION_PARENT,
  payload: payload,
});
export const close = () => ({
  type: SECTION_CLOSE,
});
export const displayUpdate = (payload: Number) => ({
  type: SECTION_DISPLAY,
  payload: payload,
});
export const extendUpdate = () => ({
  type: SECTION_EXTEND,
});

const submitChoice = {
  create: (section: Section) => api.create(section),
  update: (section: Section) => api.update(section.id, section),
  delete: (section: Section) => api.delete(section.id),
};
export const readSections =
  (sectionId?: Number) => async (dispatch: Dispatch) => {
    let id = sectionId ? sectionId + "" : "";
    let response = await api.read(id);
    dispatch(parentUpdate(response.data));
  };
export const updateSections =
  ({ action, section }: UpdateSection) =>
  async (dispatch: Dispatch) => {
    await submitChoice[action](section);
    let id = section.sectionId ? section.sectionId + "" : "";
    let response = await api.read(id);
    dispatch(parentUpdate(response.data));
  };
