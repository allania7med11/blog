import { Section } from "./types";
import api from "../api";

const end_point = "sections";
let apiSection = {
  create(section: Section) {
    return api.post(end_point, section);
  },
  read(sectionId?: String) {
    return api.get(`${end_point}${sectionId ? "/" + sectionId : ""}`);
  },
  update(id: Number | undefined, section: Section) {
    return api.patch(`${end_point}/${id}`, section);
  },
  delete(id: Number | undefined) {
    return api.delete(`${end_point}/${id}`);
  },
};
export default apiSection;
