import { createSlice } from '@reduxjs/toolkit';

const contactSlice = createSlice({
  name: 'contacts',
  initialState: {
    filter: '',
  },
  reducers: {
    contactFilter: (state, action) => {
      state.filter = action.payload;
    },
  },
});

export const { contactFilter } = contactSlice.actions;
export default contactSlice.reducer;
