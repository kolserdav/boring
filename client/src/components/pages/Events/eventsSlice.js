import { createSlice } from "@reduxjs/toolkit";

export const categoriesSlice = createSlice({
  name: 'categories',
  initialState: {
    allCategories: [],
    selectedCategoriesIds: []
  },
  reducers: {
    addCategories: (state, action) => {
      const payload = action.payload
      if (Array.isArray(payload)) {
        state.allCategories.push(...payload);
      }
      else {
        state.allCategories.push(payload);
      }
    }
  }
})