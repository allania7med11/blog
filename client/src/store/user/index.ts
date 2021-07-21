import { Reducer } from "react-router/node_modules/@types/react";
import { UserActionTypes, UserState } from "./types";

const { USER_UPDATE } = UserActionTypes

const initial = {
    user: null
}

export const userReducer: Reducer<
    UserState,
    { type: UserActionTypes; payload?: any }
> = (state = initial, { type, payload }) => {
    switch (type) {
        case USER_UPDATE:
            return {
                ...state,
                user: payload.user
            };
        default:
            return state;
    }
}