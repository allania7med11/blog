import api from "../api";
import { UserCreate, UserLogin } from "./types";

const end_point = "users";
export let apiUser = {
  create(user: UserCreate) {
    return api.post(end_point, user);
  },
  login(user: UserLogin) {
    return api.post(`${end_point}/login`, user);
  },
  current() {
    return api.get(`${end_point}/current`);
  },
  logout() {
      return api.delete(`${end_point}/logout`);
  }
};

