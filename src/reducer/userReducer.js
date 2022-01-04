import {
  createAction,
  createReducer,
  createSlice,
  createAsyncThunk,
} from "@reduxjs/toolkit";
import { fetchUserName } from "./userActions";
const initialState = {
  name: "Awais",
  age: "25",
  status: "coder",
};

/////// old redux method //////
// const userReducer = (state = initialState, action) => {
//   if (action.type === "UPDATE_AGE") {
//     return {
//       ...state,
//       age: action.payload,
//     };
//   }
//   return state;
// };

////////// redux tool kit method ///////
// const userReducer = createReducer(initialState, (builder) => {
//   builder.addCase("UPDATE_AGE", (state, action) => {
//     state.age = action.payload;
//   });
//   builder.addCase("UPDATE_NAME", (state, action) => {
//     state.name = action.payload;
//   });
//   builder.addCase("UPDATE_STATUS", (state, action) => {
//     state.status = action.payload;
//   });
// });

//////// redux toolkit latest slice method  no more use of action file//////////

const userReducer = createSlice({
  name: "profile",
  initialState,
  reducers: {
    updateName(state, action) {
      state.name = action.payload;
    },
    updateAge(state, action) {
      state.age = action.payload;
    },
    updateStatus(state, action) {
      state.status = action.payload;
    },
  },
  extraReducers: {
    [fetchUserName.pending]: (state, action) => {
      state.name = "loading please wait";
    },
    [fetchUserName.fulfilled]: (state, action) => {
      state.name = action.payload;
    },
    [fetchUserName.rejected]: (state, action) => {
      state.name = "try again";
    },
  },
});
export const { updateName, updateAge, updateStatus } = userReducer.actions;
export default userReducer.reducer;
