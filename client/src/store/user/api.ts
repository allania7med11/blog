import api from "../api";
import { UserCreate } from "./types";

const end_point = "users";
export let apiUser = {
  create(user: UserCreate) {
    return api.post(end_point, user);
  }
};

