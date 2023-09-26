import { createAsyncThunk } from "@reduxjs/toolkit";

export const acceptRequset = createAsyncThunk("accept", async (id) => {
    console.log(id);
  try {
    const response = await fetch(
      `http://localhost:6500/api/requests/accept/${id}`,
      {
        method: "PUT",
      }
    );
    const result = await response.json();
    console.log(result);
    return result;
  } catch (error) {
    return error.response.data;
  }
});
