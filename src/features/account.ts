import { createSlice } from "@reduxjs/toolkit";
import { IGlobalState } from "../Types";

const accountInitState: IGlobalState = {
  token: "",
  email: "",
};

const accountSlice = createSlice({
  name: "account",
  initialState: { value: accountInitState },
  reducers: {
    account: (state, action) => {
      state.value = {
        token: action.payload.token,
        email: action.payload.email,
      };
    },
  },
});

export const { account } = accountSlice.actions;
export default accountSlice.reducer;
