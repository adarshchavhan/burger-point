import { createSlice, current } from '@reduxjs/toolkit';

const initialState = {
    cartItems: [{
        name:'',
        price:'',
        photo:'',
        quantity: 0
    }],
    subTotal: 0,
    taxPrice: 0,
    shippingPrice: 0,
    totalPrice: 0,
    shippingInfo:{
        name: '',
        street:'',
        city:'',
        state:'',
        pinCode:'',
        phoneNo:''
    }
}

export const cartSlice = createSlice({
    name: 'User',
    initialState,
    reducers: {
        addToCart(state, action) {
            const item = state.cartItems.find(i => i.id === action.payload.id);
            if (item) {
                if (item.quantity < 5) {
                    item.quantity++;
                }
            } else {
                state.cartItems.push(action.payload)
            }
        },
        incrementQuantity(state, action) {
            console.log(action.payload.id)
            const item = state.cartItems.find(i => i.id === action.payload.id);
            if (item.quantity < 5) {
                item.quantity++;
            }
        },
        decrementQuantity(state, action) {
            const item = state.cartItems.find(i => i.id === action.payload.id);
            if (item.quantity > 1) {
                item.quantity--;
            } else {
                const items = state.cartItems.filter(i => i.id !== action.payload.id);
                state.cartItems = items;
            }
        },
        removeItem(state, action) {
            const items = state.cartItems.filter(i => i.id !== action.payload.id);
            state.cartItems = items;
        },
        calculatePrice(state) {
            let itemPrice = 0;
            state.cartItems.forEach(i =>itemPrice += i.price * i.quantity);
            state.subTotal = itemPrice;
            state.taxPrice = Number(itemPrice * 0.18).toFixed(2);
            state.shippingPrice =state.subTotal > 999 ? 0 : 50;
            state.totalPrice = state.subTotal + Number(state.taxPrice) + state.shippingPrice;
        },
        
        addShippingInfo(state, action){
            state.shippingInfo = action.payload;
        },

        emptyCart(state){
            state.cartItems =  [],
            state.subTotal = 0,
            state.taxPrice = 0,
            state.shippingPrice = 0,
            state.totalPrice = 0,
            state.shippingInfo ={}
        }
    }
})

export const { addToCart, incrementQuantity, decrementQuantity, removeItem, calculatePrice, addShippingInfo, emptyCart } = cartSlice.actions;
export default cartSlice.reducer;