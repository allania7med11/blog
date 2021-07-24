import type { Reducer } from "redux";
import { UserActionTypes, UserState } from "./types";

const { USER_UPDATE } = UserActionTypes

let initial:UserState = {
    current: null
}
const userReducer: Reducer<
    UserState,
    { type: UserActionTypes; payload?: any }
> = (state = initial, { type, payload }) => {
    switch (type) {
        case USER_UPDATE:
            return {
                ...state,
                current: payload
            };
        default:
            return state;
    }
    
}
export default userReducer