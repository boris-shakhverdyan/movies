import { createSlice } from "@reduxjs/toolkit";
import { RootState } from "../..";

const appSlice = createSlice({
    name: "app",
    initialState: {
        isLoading: false,
    },
    reducers: {
        setIsLoading(state, { payload }) {
            state.isLoading = payload;
        },
    },
});

export const selectIsLoading = (state: RootState) => state.app.isLoading;

export const { setIsLoading } = appSlice.actions;

export const appReducer = appSlice.reducer;
