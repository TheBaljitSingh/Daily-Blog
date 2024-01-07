import { createReducer } from "@reduxjs/toolkit";

let initialState = {
    isAuthenticated:false,
    isView:{
        title: "",
        description: "",
    },
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
    .addCase("clickView", (state, action)=>{
        state.isView.title = action.payload;
        state.isView.description = action.payload
    })
})

export default customReducer