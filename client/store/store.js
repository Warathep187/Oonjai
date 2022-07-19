import {createSlice, configureStore} from "@reduxjs/toolkit";
import profileReducers from "./profileReducer";

const initialProfileState = {
    userId: "",
    username: "Warathep",
    profileImageUrl: "/profile-icons/w.png",
    role: "",
    unreadNotifications: 2
}

const profileSlice = createSlice({
    name: "ProfileState",
    initialState: initialProfileState,
    reducers: profileReducers
})

const store = configureStore({
    reducer: {
        profileSlice: profileSlice.reducer
    }
})

export default store;
export const profileActions  = profileSlice.actions;