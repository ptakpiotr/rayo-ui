import { createSlice } from "@reduxjs/toolkit";
import { IGlobalState } from "../Types";

const accountInitState: IGlobalState = {
  token: "",
};

const accountSlice = createSlice({
  name: "account",
  initialState: { value: accountInitState },
  reducers: {
    account: (state, action) => {
      state.value = {
        token: action.payload.token,
      };
    },
  },
});

export const { account } = accountSlice.actions;
export default accountSlice.reducer;
