import { createReducer } from "@reduxjs/toolkit";

let initialState = {
    isLogin:false,
}

const customReducer = createReducer(initialState, (builder)=>{
    builder
    .addCase("checkLogin", (state,action)=>{
        // state.isLogin = !state.isLogin();
        state.isLogin = action.payload;
        // console.log(state);
    })
    .addCase("checkLogout",(state,action)=>{
        // state.isLogin= !state.isLogin();
        state.isLogin = action.payload;

    })
})

export default customReducer