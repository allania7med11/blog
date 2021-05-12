import api from "../../api/section";
import {
  Dispatch,
  Section,
  sectionActionTypes,
  UpdateSection,
} from "./../../types/section/index";
const { SECTION_CURRENT, SECTION_LIST, SECTION_CLOSE } = sectionActionTypes;
export const currentUpdate = (payload: Section) => ({
  type: SECTION_CURRENT,
  payload: payload,
});
export const listUpdate = (payload: Section[]) => ({
  type: SECTION_LIST,
  payload: payload,
});
export const close = () => ({
  type: SECTION_CLOSE,
});

const submitChoice = {
  create: (section: Section) => api.create(section),
  update: (section: Section) => api.update(section.id, section),
  delete: (section: Section) => api.delete(section.id),
};
export const readSections = (sectionId: Number | undefined) => async (
  dispatch: Dispatch
) => {
  let response = await api.read(sectionId);
  dispatch(listUpdate(response.data));
};
export const updateSection = ({ action, section }: UpdateSection) => async (
  dispatch: Dispatch
) => {
  await submitChoice[action](section);
  let response = await api.read(undefined);
  dispatch(listUpdate(response.data));
};
