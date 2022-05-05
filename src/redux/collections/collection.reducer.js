//import SHOP_DATA from '../../pages/ShopPage/shop.data'

import { USER_ACTION_TYPES } from "./collection.type"

const INITIAL_STATE = {
//    collections: SHOP_DATA,
        collections:[]
}

const collectionReducer = (state = INITIAL_STATE, action) => {
    switch(action.type) {
        case USER_ACTION_TYPES.GET_COLLECTION:
            return{
                ...state,
                collections: action.payload
            }
        default:
            return state
    }
}

export default collectionReducer
