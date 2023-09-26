import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

import { OAuth2Client } from "google-auth-library";

const clientId =
  "485416172818-uh7hb3c31dmd1ebir8bq5u2brb4iofjo.apps.googleusercontent.com";
const client = new GoogleAuth({ clientId });

export const signIn = async () => {
  const tokenResponse = await client.request({
    url: "https://oauth2.googleapis.com/token",
    method: "POST",
    data: {
      grant_type: "client_credentials",
    },
  });

  const { access_token } = tokenResponse.data;
  console.log(access_token);
  return access_token;
};


export const signInWithGoogleAsync = createAsyncThunk(
  "auth/signInWithGoogle",
  async () => {
    const response = await signIn();
    return response;
  }
);

export const GoogleAuthSlice = createSlice({
  name: "auth",
  initialState: {
    user: {},
    loading: false,
    error: null,
  },
  extraReducers: {
      [signInWithGoogleAsync.pending]: (state) => {
        state.loading = true;
      },
      [signInWithGoogleAsync.fulfilled]: (state, action) => {
        state.loading = false;
        state.user = action.payload;
      },
      [signInWithGoogleAsync.rejected]: (state, action) => {
        state.isLoading = false;
        state.error = action.error.message;
      }
  },
});

export default GoogleAuthSlice.reducer;
