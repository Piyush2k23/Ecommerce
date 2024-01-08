import { createSlice } from '@reduxjs/toolkit';

const initialState:any = {
    cartItems: [],
    cartTotalQuantity: 0,
    cartTotalAmount: 0,
};

const cartSlice = createSlice({
    name: 'cart',
    initialState,
    reducers:{
        addToCart(state,action){
            const itemIndex = state.cartItems.findIndex((item:any) => item.id === action.payload.id);
            if(itemIndex >= 0){
                state.cartItems[itemIndex].cartQuantity += 1 ;
            }
            else{
                const cartProduct = {...action.payload, cartQuantity: 1}
                state.cartItems.push(cartProduct);
                state.cartTotalQuantity += 1;
                if(state.cartTotalQuantity===1){

                }
                else{
                    state.cartTotalAmount = state.cartTotalAmount * state.cartTotalQuantity;
                }

            }  
        },
        removeToCart(state,action){
            state.cartItems = state.cartItems.filter((item: any) => item.id !== action.payload.id);
        }
    }
});

export const { addToCart, removeToCart } = cartSlice.actions;
export default cartSlice.reducer;