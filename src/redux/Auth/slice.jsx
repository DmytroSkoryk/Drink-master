import { createSlice } from "@reduxjs/toolkit";
import { SignInThank, getProfileThank, updateUser } from "./operations";

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

const handleFulfilledUpdateUser = (state, action) => {
  try {
    state.isLoading = false;
    state.profile = action.payload?.updatedUser?.profile;
  } catch (error) {
    console.error("Error updating user:", error);
  }
};

const authSlice = createSlice({
  name: "auth",
  initialState,
  extraReducers: (builder) => {
    builder
      .addCase(SignInThank.fulfilled, handleFulfilled)
      .addCase(getProfileThank.fulfilled, handleFulfilledProfile)
      .addCase(updateUser.fulfilled, handleFulfilledUpdateUser)
      .addMatcher(({ type }) => type.endsWith("/pending"), handlePending)
      .addMatcher(({ type }) => type.endsWith("/rejected"), handleRejected);
  },
});

export const authReducer = authSlice.reducer;
