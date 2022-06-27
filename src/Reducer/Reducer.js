import { Actiontype } from "../Action/ActionType";
const cart=[];
const CartReducer=(state=cart,action)=>{
    const product=action.payload;
    switch(action.type){
        case Actiontype.ADDITEM:
            //check if product already exist
            const exist=state.find((x)=>x.id===product.id);
            if(exist){
                //Increse the quality
                return state.map((arr)=>arr.id===product.id?{...arr,qty:arr.qty+1}:arr)
            }
            else{
                //add data and set qty is 1 
                const product=action.payload;
                return[
                    ...state,{...product,qty:1}
                ]
            }
        break;
        case Actiontype.REMOVEITEM:
            const exist1=state.find((x)=>x.id===product.id);
            if(exist1.qty===1){ 
                return state.filter((x)=>x.id!==exist1.id);
            }
            else{
                return state.map((x)=>x.id===product.id?{...x,qty:x.qty-1}:x)
            }
            break;

        default:
            return state;
            
    
    }


}
export default CartReducer;