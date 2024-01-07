import { createReducer } from "@reduxjs/toolkit";

let initialState = {
    isAuthenticated:false,
}

const customReducer = createReducer(initialState, (builder)=>{
    builder
    .addCase("checkLogin", (state,action)=>{
        state.isAuthenticated = action.payload;
    })
    .addCase("checkLogout",(state,action)=>{
        // state.isLogin= !state.isLogin();
        state.isAuthenticated = action.payload;

    })
})

export default customReducer