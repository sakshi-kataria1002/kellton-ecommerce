import { USER_ACTION_TYPES } from "./collection.type"

export const getCollections = (collections) => {
    return(
        {  
            type:USER_ACTION_TYPES.GET_COLLECTION,
            payload: collections
        }
    )
}