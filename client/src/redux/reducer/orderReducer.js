import {createReducer} from '@reduxjs/toolkit';

const initialState = {
    orders: []
}

export const orderReducer = createReducer(initialState, (builder)=> {
    builder
        .addCase('placeOrderRequest', (state)=>{
            state.loading = true;
        })
        .addCase('myOrdersRequest', (state)=>{
            state.loading = true;
        })
        .addCase('paymentVerificationRequest', (state)=>{
            state.loading = true;
        })
        .addCase('orderDetailsRequest', (state)=>{
            state.loading = true;
        });


    builder
        .addCase('placeOrderSuccess', (state, action)=>{
            state.loading = false;
            state.message = action.payload;
        })
        .addCase('myOrdersSuccess', (state, action)=>{
            state.loading = false;
            state.orders = action.payload;
        })
        .addCase('paymentVerificationSuccess', (state, action)=>{
            state.loading = false;
            state.message = action.payload;
        })
        .addCase('orderDetailsSuccess', (state, action)=>{
            state.loading = false;
            state.order = action.payload;
        });

    builder
        .addCase('placeOrderFailure', (state, action)=>{
            state.loading = false;
            state.error = action.payload;
        })
        .addCase('myOrdersFailure', (state, action)=>{
            state.loading = false;
            state.error = action.payload;
        })
        .addCase('paymentVerificationFailure', (state, action)=>{
            state.loading = false;
            state.error = action.payload;
        })
        .addCase('orderDetailsFailure', (state, action)=>{
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