import React from "react";
import CartReducer from '../Reducer/Reducer';
import { combineReducers } from "redux";
const RootReducer=combineReducers(
   CartReducer,
);
export default RootReducer;