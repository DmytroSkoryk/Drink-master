import { createSlice } from "@reduxjs/toolkit";
import { SignInThank, getProfileThank } from "./operations";

const initialState = {
  token: "",
  isLoading: false,
  error: "",
  profile: null,
};

const handlePending = (state) => {
  state.isLoading = true;
  state.error = "";
};

const handleRejected = (state, { error, payload }) => {
  state.isLoading = false;
  state.error = payload ?? error.message;
};

const handleFulfilled = (state, { payload }) => {
  state.isLoading = false;
  state.token = payload.token;
};

const handleFulfilledProfile = (state, { payload }) => {
  state.isLoading = false;
  state.profile = payload;
};

const authSlice = createSlice({
  name: "auth",
  initialState,
  extraReducers: (builder) => {
    builder
      .addCase(SignInThank.fulfilled, handleFulfilled)
      .addCase(getProfileThank.fulfilled, handleFulfilledProfile)
      .addMatcher(({ type }) => type.endsWith("/pending"), handlePending)
      .addMatcher(({ type }) => type.endsWith("/rejected"), handleRejected);
  },
});

export const authReducer = authSlice.reducer;
