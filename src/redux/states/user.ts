import { createSlice } from "@reduxjs/toolkit";
import { Roles, UserInfo } from "../../models";
import { clearLocalStorageUser, persistLocalStorageUserState } from "../../utilities";

export const EmptyUserState: UserInfo = {
    id: 0,
    name: "",
    email: "",
    rol: Roles.EMPTY
}

export const UserKey = 'user';

export const userSlice = createSlice({
    name: "user",
    initialState: localStorage.getItem(UserKey) ? JSON.parse(localStorage.getItem(UserKey) as string) : EmptyUserState,
    reducers: {
        createUser: (state, action) => {
            persistLocalStorageUserState<UserInfo>(UserKey, action.payload)
            return action.payload
        },
        updateUser: (state, action) => {
            const result = { ...state, ...action.payload }
            persistLocalStorageUserState<UserInfo>(UserKey, result)
            return result
        },
        resetUser: () => {
            clearLocalStorageUser(UserKey)
            return EmptyUserState
        }
    }
})

export const { createUser, updateUser, resetUser } = userSlice.actions

export default userSlice.reducer