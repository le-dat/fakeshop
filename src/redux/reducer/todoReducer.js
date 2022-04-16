import { createSlice } from "@reduxjs/toolkit";

export const todoReducer = createSlice({
  name: "todo",
  initialState: {
    job: "",
    jobs: [],
  },
  reducers: {
    setAction: (state, action) => {
      state.job = action.payload;
    },
    addAction: (state, action) => {
      state.jobs = [...state.jobs, action.payload];
    },
    deleteAction: (state, action) => {
      const newState = [...state.jobs];
      newState.splice(action.payload, 1);
      state.jobs = newState;
    },
  },
});
export const { setAction, addAction, deleteAction } = todoReducer.actions;
export default todoReducer.reducer;
