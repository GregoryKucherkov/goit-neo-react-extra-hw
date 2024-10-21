import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  name: "",
  modal: false,
};

const filtersSlice = createSlice({
  name: "filters",
  initialState,
  reducers: {
    changeFilter(state, action) {
      state.name = action.payload; // Update the  filter
    },
    setModal(state, action) {
      state.modal = action.payload;
    },
  },
});

export const { changeFilter, setModal } = filtersSlice.actions;

export default filtersSlice.reducer;
