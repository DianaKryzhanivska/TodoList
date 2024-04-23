import { createAsyncThunk } from "@reduxjs/toolkit";
import instance from "../instance";

export const registerThunk = createAsyncThunk(
  "user/register",
  async (body, { rejectWithValue }) => {
    try {
      const response = await instance.post("/user/register", body);
      return response.data;
    } catch (error) {
      return rejectWithValue(error.message);
    }
  }
);
