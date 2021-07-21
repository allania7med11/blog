export interface UserCreate {
  username: string;
  password: string;
  email: string;
}
export interface User {
  username: string;
  email: string;
}
export interface UserState {
  user: User | null
}
export enum UserActionTypes {
  USER_UPDATE = "USER_UPDATE",
}




