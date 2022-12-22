import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
import { toast } from "react-toastify";
import customFetch from "../../services/axios";

const initialState = {
  user: [],
  isLoading: false,
};

export const registerUser = createAsyncThunk(
  "user/registerUser",
  async (user, thunkAPI) => {
    try {
      const res = await customFetch.post("/auth/register", user);
      return res.data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.response.data.msg);
    }
  }
);

export const loginUser = createAsyncThunk(
  "user/loginUser",
  async (user, thunkAPI) => {
    try {
      const res = await customFetch.post("/auth/login", user);
      return res.data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message.data.msg);
    }
  }
);

const userSlice = createSlice({
  name: "auth",
  initialState,

  extraReducers: {
    [registerUser.pending]: (state) => {
      state.isLoading = true;
    },

    [registerUser.fulfilled]: (state, { payload }) => {
      const { user } = payload;
      state.isLoading = false;
      state.user = user;
      toast.success("Hello", `${user.name}`);
    },

    [registerUser.rejected]: (state, { payload }) => {
      state.isLoading = false;
      toast.error(payload);
    },
  },

  [loginUser.pending]: (state) => {
    state.isLoading = true;
  },

  [loginUser.fulfilled]: (state, { payload }) => {
    const { user } = payload;
    console.log("users", user);
    state.isLoading = false;
    state.user = user;
    toast.success("Welcome Back", `${user.name}`);
  },

  [loginUser.rejected]: (state, { payload }) => {
    state.isLoading = false;
    toast.error(payload);
  },
});

export default userSlice.reducer;
