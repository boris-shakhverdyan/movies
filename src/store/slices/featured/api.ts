import { createAsyncThunk } from "@reduxjs/toolkit";
import JsonServerAPI from "../../../api/JsonServerAPI";

export const fetchFeatured = createAsyncThunk("featured/fetchFeatured", async () => {
    return (await JsonServerAPI.get("Featured")).data;
});
