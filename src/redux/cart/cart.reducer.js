import CART_ACTION_TYPES from "./cart.types";
import { addItemToCart , clearItem, removeItem } from "./cart.utils";

const INITIAL_STATE = {
//    hidden: true,
    cartItems:[] //because there are multiple cart items to store
    
}

const cartReducer = (state = INITIAL_STATE, action) => {
    switch(action.type) {
    //case CART_ACTION_TYPES.TOGGLE_CART_HIDDEN:
    //    return {
    //        ...state,
    //        hidden: !state.hidden
    //    }
    case CART_ACTION_TYPES.ADD_ITEM:
        return{
            ...state,
            cartItems: addItemToCart(state.cartItems, action.payload)

            //cartItems: [state.cartItems,action.payload]
            //state.cartItems are alreday exiting items
            //action.payload is updated items

        }
        case CART_ACTION_TYPES.CLEAR_ITEM:
            return{
                ...state,
                cartItems: clearItem(state.cartItems,action.payload)
            }
        case CART_ACTION_TYPES.REMOVE_ITEM:
            return{
                ...state,
                cartItems: removeItem(state.cartItems, action.payload)
            }
        default:
            return state
    }
}

export default cartReducer