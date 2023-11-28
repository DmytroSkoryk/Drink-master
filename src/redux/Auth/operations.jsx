import instance from "../instance";
import { createAsyncThunk } from "@reduxjs/toolkit";

export const getProfileThank = createAsyncThunk("auth/current", () =>
  getProfile()
);

export const SignInThank = createAsyncThunk(
  "auth/signin",
  async (body, { rejectWithValue, dispatch }) => {
    try {
      const data = await SignIn(body);
      dispatch(getProfileThank());
      return data;
    } catch (error) {
      return rejectWithValue(error.response.data.message);
    }
  }
);

const SignUpUser = async (body) => {
  return await instance.post("auth/signup", body);
};

export default SignUpUser;

const setToken = (token) => {
  instance.defaults.headers.common["Authorization"] = token;
};

export const SignIn = async (body) => {
  const { data } = await instance.post("auth/signin", body);
  if ("token" in data) setToken(`Bearer ${data.token}`);
  return data;
};

export const getProfile = async () => {
  const result = await instance.get("auth/current");
  return result.data;
};
