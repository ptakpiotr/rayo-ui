import { createSlice } from "@reduxjs/toolkit";
import { INotificationState } from "../Types";

export const globalNotificationState: INotificationState = {
  enable: false,
};

const notificationSlice = createSlice({
  name: "notifications",
  initialState: { value: globalNotificationState },
  reducers: {
    enable: (state, action) => {
      state.value = action.payload;
    },
    disable: (state, action) => {
      state.value = action.payload;
    },
  },
});

export const { enable, disable } = notificationSlice.actions;

export default notificationSlice.reducer;
