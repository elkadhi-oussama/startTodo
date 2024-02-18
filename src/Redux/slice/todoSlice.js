import { createSlice } from "@reduxjs/toolkit";
import { dataTodo } from "../../dataTodo";
const initialState = {
  todo: dataTodo,
};

export const todoSlice = createSlice({
  name: "todo",
  initialState,
  reducers: {
    addTodo: (state, action) => {
      console.log(state);
      console.log(action);
    },
    deleteTodo: (state, action) => {
      console.log(state);
      console.log(action);
    },
  },
});

export const { addTodo, deleteTodo } = todoSlice.actions;
export default todoSlice.reducer;
