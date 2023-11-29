import instance from "../instance";
import { createAsyncThunk } from "@reduxjs/toolkit";

export const SignUpUser = async (body) => {
  return await instance.post("auth/signup", body);
};

const setToken = (token) => {
  instance.defaults.headers.common["Authorization"] = token;
};

export const SignInThank = createAsyncThunk(
  "auth/signin",
  async (body, { rejectWithValue, dispatch }) => {
    try {
      const { data } = await instance.post("auth/signin", body);
      setToken(`Bearer ${data.token}`);
      dispatch(getProfileThank());
      return data;
    } catch (error) {
      return rejectWithValue(error.response.data.message);
    }
  }
);

export const getProfileThank = createAsyncThunk("auth/current", async () => {
  const result = await instance.get("auth/current");
  return result.data;
});
