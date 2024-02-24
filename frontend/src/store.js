import {  applyMiddleware , combineReducers} from 'redux';
import {configureStore } from '@reduxjs/toolkit'
import {thunk} from "redux-thunk";
import {composeWithDevTools} from 'redux-devtools-extension'
import { ProductDetailReducers, ProductReducers } from './reducers/Productreducer';
import { UserReducer } from './reducers/Userreducer';

const reducers  = combineReducers({
    products:ProductReducers,
    productDetails:ProductDetailReducers,
    user:UserReducer,
});

let initialstate = {};

const middleware =[thunk];

const store = configureStore(
    {reducer:reducers} ,initialstate , composeWithDevTools(applyMiddleware(...middleware))
);

export default store;