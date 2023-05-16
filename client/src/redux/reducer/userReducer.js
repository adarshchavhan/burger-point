import {createReducer} from '@reduxjs/toolkit';

const initialState = {
    users: []
}

export const userReducer = createReducer(initialState, (builder)=> {
    builder
        .addCase('loadUserRequest', (state)=>{
            state.loading = true;
        })
        .addCase('logoutRequest', (state)=>{
            state.loading = true;
        })
        .addCase('setAddressRequest', (state)=>{
            state.loading = true;
        });       

    builder
        .addCase('loadUserSuccess', (state, action)=>{
            state.loading = false;
            state.currentUser = action.payload;
            state.userAddress = action.payload?.address;
            state.isAuth=true;
        })
        .addCase('logoutSuccess', (state, action)=>{
            state.loading = false;
            state.message = action.payload;
            state.currentUser = null;
            state.isAuth=false;
        })
        .addCase('setAddressSuccess', (state, action)=>{
            state.loading = false;
            state.message = action.payload;
        });

    builder
        .addCase('loadUserFailure', (state, action)=>{
            state.loading = false;
            state.error = action.payload;
            state.currentUser = null;
            state.isAuth = false;
        })
        .addCase('logoutFailure', (state, action)=>{
            state.loading = false;
            state.error = action.payload;
        })
        .addCase('setAddressFailure', (state, action)=>{
            state.loading = false;
            state.error = action.payload;
        });

    builder
        .addCase('clearError', (state)=>{
            state.error = null;
        })
        .addCase('clearMessage', (state)=>{
            state.message = null;
        });
});