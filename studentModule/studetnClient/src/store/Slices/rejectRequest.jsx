import { createAsyncThunk } from "@reduxjs/toolkit";

export const rejectRequest = createAsyncThunk("reject", async (id) => {
  console.log(id);
  try {
    const response = await fetch(
      `http://localhost:6500/api/requests/decline/${id}`,
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
