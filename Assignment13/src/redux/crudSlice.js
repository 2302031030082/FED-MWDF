import { createSlice } from "@reduxjs/toolkit";

const crudSlice = createSlice({
  name: "crud",
  initialState: { users: [] },
  reducers: {
    addUser: (state, action) => {
      state.users.push({ id: Date.now(), name: action.payload });
    },
    updateUser: (state, action) => {
      const { id, name } = action.payload;
      const user = state.users.find(u => u.id === id);
      if (user) user.name = name;
    },
    deleteUser: (state, action) => {
      state.users = state.users.filter(u => u.id !== action.payload);
    },
  },
});

export const { addUser, updateUser, deleteUser } = crudSlice.actions;
export default crudSlice.reducer;
