import { CART_LOADING, CART_ADDDATA, CART_ERROR,CART_GET, CART_TOTAL,CART_ITEM } from "./action";

const initialState = {
    error: false,
    loading: false,
    cart: [],
    total:0,
    item:0
}
export const cartReducer = (store = initialState, { type, payload }) => {
    // console.log("the payload is",payload)
    switch (type) {
        case CART_LOADING:
            return {
                ...store,
                loading: true
            }

        case CART_ADDDATA:
            return {
                ...store,
                loading: true,
                cart: [...payload]
            }
        case CART_ERROR:
            return {
                ...store,
                loading: false,
                error: true
            }

        case CART_GET :
            return{
                ...store,
                loading:false,
                error:false,
                cart:[payload]
            }
        case CART_TOTAL:
            return{
                ...store,
                total:payload

            }
        case CART_ITEM:
            return{
                ...store,
                item:payload
            }
        default:
            return store
    }

}