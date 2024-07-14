import {
    ADD_TO_CART,
    REMOVE_CART_ITEM,
    SAVE_SHIPPING_INFO

} from "../constants/CartConstant";

import axios from "axios";

export const cartReducer = (
    state = { cartItems: [], shippingInfo: {} },
    action
) => {
    switch (action.type) {
        case ADD_TO_CART:
            const item = action.payload;

            //console.log(item)
            //console.log(state.cartItems)

            const isItemExist = state.cartItems.find((a) => a.product === item.product);
            console.log(isItemExist)
            if (isItemExist) {
                return {  //replace
                    ...state,
                    cartItems: state.cartItems.map((i) =>
                        //console.log(i)
                        i.product === isItemExist.product ? item : i
                    ),
                };

            } else {
                return {
                    ...state,
                    cartItems: [...state.cartItems, item],
                };
            }
        case REMOVE_CART_ITEM:
            return {
                ...state,
                cartItems: state.cartItems.filter((i) => i.product !== action.payload),
            }

        case SAVE_SHIPPING_INFO:
            return {
                ...state,
                shippingInfo: action.payload,
            }

        default:
            return state;
    }
};

