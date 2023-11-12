import { createSlice } from "@reduxjs/toolkit";
import { RootState } from "../..";
import { fetchTrending } from "./api";
import { Movie } from "../../../types";

const initialState: Movie[] = [];

const trendingSlice = createSlice({
    name: "trending",
    initialState,
    reducers: {},
    extraReducers: (builder) => {
        builder.addCase(fetchTrending.fulfilled, (_, { payload }) => {
            return payload;
        });

        builder.addCase(fetchTrending.rejected, (_, { error }) => {
            console.error(error);
        });
    },
});

export const selectTrending = (state: RootState): Movie[] => state.trending;

export const trendingReducer = trendingSlice.reducer;
