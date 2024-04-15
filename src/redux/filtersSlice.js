import { createSlice } from '@reduxjs/toolkit';

const filterSlice = createSlice({
  name: 'filter',
  initialState: {
    text: '',
  },
  reducers: {
    setFilter(state, action) {
      state.text = action.payload;
    },
  },
});

export default filtersSlice.reducer;

export const { changeNameFilter } = filtersSlice.actions;

export const selectNameFilter = (state) => state.filters.name;
