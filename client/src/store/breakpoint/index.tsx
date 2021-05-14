import { breakpointActionTypes, breakpointState } from "./types";
import type { Reducer } from "redux";
const initial: breakpointState = {
    up: {
        sm: true,
        md: true,
        lg: true,
        xl: true,
    }
}
const { UP_UPDATE } = breakpointActionTypes

const breakpointReducer: Reducer<
    breakpointState,
    { type: breakpointActionTypes; payload: any }
> = (state = initial, { type, payload }) => {
    switch (type) {
        case UP_UPDATE:
            return {
                ...state,
                up: payload
            };
        default:
            return state;
    }
};
export default breakpointReducer