import { updateUrl } from "@/App";
import { Dispatch } from "../section/types";
import { apiUser } from "./api";
import { User, UserActionTypes, UserCreate, UserLogin } from "./types";

const { USER_UPDATE } = UserActionTypes

export const userUpdate = (payload: User) => ({
    type: USER_UPDATE,
    payload: payload,
});

export const signUp =
    (user: UserCreate) =>
        async (dispatch: Dispatch) => {
            let response = await apiUser.create(user);
            dispatch(userUpdate(response.data))
            updateUrl.push('/lectures');
        };
export const login =
        (user: UserLogin) =>
            async (dispatch: Dispatch) => {
                let response = await apiUser.login(user);
                console.log(response.data);
                dispatch(userUpdate(response.data))
                updateUrl.push('/lectures');
            };
    
