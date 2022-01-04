// const updateAge = () => {
//   return {
//     type: "UPDATE_AGE",
//     payload: 40,
//   };
// };

// export const userActions = {
//   updateAge,
// };

///// if i used sepread actions and reducer /////
// import { createAction } from "@reduxjs/toolkit";
// export const updateAge = createAction("UPDATE_AGE");
// export const updateName = createAction("UPDATE_NAME");
// export const updateStatus = createAction("UPDATE_STATUS");

import { createAsyncThunk } from "@reduxjs/toolkit";
export const fetchUserName = createAsyncThunk("fetchuser", async () => {
  const response = await fetch("https://jsonplaceholder.typicode.com/users");
  const res2 = await response.json();
  return res2[0].name;
});

export const fetchUserdata = createAsyncThunk("fetchUserData", async () => {
  const response = await fetch("https://jsonplaceholder.typicode.com/users");
  const res2 = await response.json();
  return res2;
});
