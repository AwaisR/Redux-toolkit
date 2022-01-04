import { createSlice } from "@reduxjs/toolkit";
import { fetchUserdata } from "./userActions";
const initialState = {
  userData: [],
  loading: false,
  error: "",
};
const TableReducer = createSlice({
  name: "tableDAta",
  initialState,
  reducers: {},
  extraReducers: {
    [fetchUserdata.pending]: (state, action) => {
      state.userData = action.payload;
    },
    [fetchUserdata.fulfilled]: (state, action) => {
      state.userData = action.payload;
    },
    [fetchUserdata.rejected]: (state, action) => {
      state.error = "something went wrong";
    },
  },
});

export default TableReducer.reducer;
