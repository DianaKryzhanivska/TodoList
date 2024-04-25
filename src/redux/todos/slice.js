import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  tasks: [],
};

export const slice = createSlice({
  name: "todos",
  initialState,
  reducers: {
    addTask: (state, { payload }) => {
      state.tasks.push(payload);
    },
    deleteTask: (state, { payload }) => {
      state.tasks = state.tasks.filter((task) => task.id !== payload.id);
    },
    reorderTasks: (state, { payload }) => {
      const { startIndex, endIndex } = payload;
      const [removedTask] = state.tasks.splice(startIndex, 1);
      state.tasks.splice(endIndex, 0, removedTask);
    },
  },
});

export const todosReducer = slice.reducer;
export const { addTask, deleteTask, reorderTasks } = slice.actions;
