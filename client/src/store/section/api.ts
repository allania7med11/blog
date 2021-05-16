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
  update(id: number | undefined, section: Section) {
    return api.patch(`${end_point}/${id}`, section);
  },
  delete(id: number | undefined) {
    return api.delete(`${end_point}/${id}`);
  },
  upload(fb: FormData) {
    return api.post(`uploads`,fb);
  },
};
export default apiSection;
