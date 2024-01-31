import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  tasks: {},
  taskName: "",
  taskDesp: "",
};

export const ToDoSlice = createSlice({
  name: "ToDoSlice",
  initialState,
  reducers: {
    setTasks: (state, { payload }) => {
      state.setTasks = payload;
    },
    setTaskName: (state, { payload }) => {
      state.taskName = payload;
    },
    setTaskDesp: (state, { payload }) => {
      state.taskDesp = payload;
    },
  },
});

export const { setTasks, setTaskName, setTaskDesp } = ToDoSlice.actions;

export default ToDoSlice.reducer;
