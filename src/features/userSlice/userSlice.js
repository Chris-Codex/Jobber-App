import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

const initialstate = {
    user: null,
    isLoading: false
}

const userSliice = createSlice({
    name: "usersAuth",
    initialstate,

    reducers: {

    }
})

export default userSliice.reducer