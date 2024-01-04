import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  tasks: {},
};

export const ToDoSlice = createSlice({
  name: "ToDoSlice",
  initialState,
  reducers: {
    setTasks: (state, { payload }) => {
      state.setTasks = payload;
    },
  },
});

export const { setTasks } = ToDoSlice.actions;

export default ToDoSlice.reducer;
