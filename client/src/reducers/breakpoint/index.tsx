import { Breakpoint, breakpointActionTypes, breakpointState } from "@/types/breakpoint";
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
    { type: breakpointActionTypes; payload: Breakpoint }
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