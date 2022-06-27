import { Actiontype } from "../Action/ActionType";
export const addCart=(product)=>{
    return{
        type:Actiontype.ADDITEM,
        payload:product
    }
}
export const removeCart=(product)=>{
    return{
        type:Actiontype.REMOVEITEM,
        payload:product
    }
}