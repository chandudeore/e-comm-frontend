//in the store we need to create some thing first is creatStor that redux is provide
import {createStore,combineReducers,applyMiddleware} from 'redux'
import { productReducer } from './product/reducer';
import { loginReducer } from './Login/reducer';
import { cartReducer } from './Cart/reducer';
import thunk from 'redux-thunk'
const rootReducer=combineReducers({
    login:loginReducer,
    product:productReducer,
    cart:cartReducer
})

export const store=createStore (rootReducer,applyMiddleware(thunk));