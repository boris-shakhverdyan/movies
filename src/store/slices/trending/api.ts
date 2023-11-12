import { createAsyncThunk } from "@reduxjs/toolkit";
import JsonServerAPI from "../../../api/JsonServerAPI";
import { Movie } from "../../../types/index";

export const fetchTrending = createAsyncThunk("trending/fetchTrending", async () => {
    const trendings = (await JsonServerAPI.get("TrendingNow")).data;

    const sessionHistory = sessionStorage.getItem("history");

    const history = sessionHistory && sessionHistory.split(",");

    if (Array.isArray(history)) {
        return [
            ...trendings.filter((trending: Movie) => history.includes(trending.Id)),
            ...trendings.filter((trending: Movie) => !history.includes(trending.Id)),
        ];
    }

    return trendings;
});
