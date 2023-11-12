import { createSlice } from "@reduxjs/toolkit";
import { RootState } from "../..";
import { fetchFeatured } from "./api";
import { Movie } from "../../../types";

const initialState: Movie | null = null;

const featuredSlice = createSlice({
    name: "featured",
    initialState,
    reducers: {
        setFeatured(_, { payload }) {
            return payload;
        },
    },
    extraReducers: (builder) => {
        builder.addCase(fetchFeatured.fulfilled, (_, { payload }) => {
            return payload;
        });

        builder.addCase(fetchFeatured.rejected, (state, { error }) => {
            console.error(error);
            return state;
        });
    },
});

export const selectFeatured = (state: RootState): Movie | null => state.featured;

export const { setFeatured } = featuredSlice.actions;

export const featuredReducer = featuredSlice.reducer;
