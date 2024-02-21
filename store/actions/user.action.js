import { createAsyncThunk } from "@reduxjs/toolkit";
import { signIn } from "next-auth/react";
import axios from "axios";

export const registerUser = createAsyncThunk(
  "user/registerUser",
  async ({ values, router }, { dispatch }) => {
    try {
      const user = await axios.post("/api/auth/register", values);
      return user.data;
    } catch (error) {
      console.log(error.response.data.message);
      throw error;
    }
  }
);

export const signInUser = createAsyncThunk(
  "user/signInUser",
  async ({ values, router }, { dispatch }) => {
    try {
      const resault = await signIn("credentials", {
        redirect: false,
        login: values.login,
        password: values.password,
      });

      const user = await axios.get("/api/auth/user");
     
      return resault;
    } catch (error) {
      console.log(error.response.data.message);
      throw error;
    }
  }
);
