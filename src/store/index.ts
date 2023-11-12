import { configureStore } from "@reduxjs/toolkit";
import { appReducer } from "./slices/app/appSlice";
import { trendingReducer } from "./slices/trending/trendingSlice";
import { featuredReducer } from "./slices/featured/featuredSlice";
import { useDispatch } from "react-redux";

export const store = configureStore({
    reducer: {
        app: appReducer,
        trending: trendingReducer,
        featured: featuredReducer,
    },
});

export type RootState = ReturnType<typeof store.getState>;

export type AppDispatch = typeof store.dispatch;
export const useAppDispatch: () => AppDispatch = useDispatch;
