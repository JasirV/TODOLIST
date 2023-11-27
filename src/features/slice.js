import { createSlice } from "@reduxjs/toolkit";

const todoslice = createSlice({
  name: "todo",
  initialState: [],
  reducers: {
    addData: (state, action) => {
      return [...state, { id: Date.now(), text: action.payload }];
    },
    deleteTask: (state, action) => {
      return state.filter((item) => item.id !== action.payload);
    },
    editTask: (state, action) => {
        return state.map((item) => 
          item.id === action.payload.id
            ? { ...item, text: action.payload.text }
            : item
    
        );
      },
      
  },
});
export default todoslice.reducer;
export const { addData,deleteTask, editTask } = todoslice.actions;
