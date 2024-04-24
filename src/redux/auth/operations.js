import { createAsyncThunk } from "@reduxjs/toolkit";
import instance, { clearToken, setToken } from "../instance";
import { toast } from "react-toastify";

export const registerThunk = createAsyncThunk(
  "user/register",
  async (body, { rejectWithValue }) => {
    try {
      const response = await instance.post("/user/register", body);
      return response.data;
    } catch (error) {
      switch (error.response.status) {
        case 400:
          toast.error("Validation error: please check your data");
          break;
        case 409:
          toast.error("User with this email already exists");
          break;
        default:
          break;
      }
      return rejectWithValue(error.message);
    }
  }
);

export const loginThunk = createAsyncThunk(
  "user/login",
  async (body, { rejectWithValue }) => {
    try {
      const response = await instance.post("/user/login", body);
      setToken(response.data.token);
      toast.success(`Welcome to TodoList ${response.data.user.name}!`);
      return response.data;
    } catch (error) {
      toast.error("Email or password is invalid");
      return rejectWithValue(error.message);
    }
  }
);

export const logoutThunk = createAsyncThunk(
  "/user/logout",
  async (_, { rejectWithValue }) => {
    try {
      const response = await instance.post("/user/logout");
      clearToken();
      return response.data;
    } catch (error) {
      switch (error.response.status) {
        case 401:
          toast.error("You are not authorized to log out");
          break;
        default:
          toast.error("Something went wrong. Please try again later");
      }
      return rejectWithValue(error.message);
    }
  }
);

export const getUserInfoThunk = createAsyncThunk(
  "user-info",
  async (_, { rejectWithValue }) => {
    try {
      const response = await instance.get("/user/user-info");
      return response.data;
    } catch (error) {
      return rejectWithValue(error.message);
    }
  }
);
