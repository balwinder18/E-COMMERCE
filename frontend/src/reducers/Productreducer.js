
import {ALL_PRODUCT_SUCCESS,CLEAR_ERRORS,ALL_PRODUCT_REQUEST,ALL_PRODUCT_FAIL,PRODUCT_DETAILS_FAIL,PRODUCT_DETAILS_REQUEST,PRODUCT_DETAILS_SUCCESS} from "../constants/Productconstants";

export const ProductReducers = ((state ={products:[]}  , action)=>{
    switch(action.type){
        case ALL_PRODUCT_REQUEST:
            
            return{
                loading:true,
                products:[]
    }    
    case ALL_PRODUCT_SUCCESS:
            
    return{
        loading:false,
        products:action.payload.products,
        productscount: action.payload.productscount,
        resultperpage:action.payload.resultperpage
}    
case ALL_PRODUCT_FAIL:
            
return{
    loading:false,
    error:action.payload
}    
case CLEAR_ERRORS:
            
return{
    ...state,
    error:null
}  

    
        default:
           return state;
    }
})



export const ProductDetailReducers = (state={product:{}}  , action)=>{
    switch(action.type){
        case PRODUCT_DETAILS_REQUEST:
            return{
                loading:true,
                ...state,
    };
    case PRODUCT_DETAILS_SUCCESS:
        return{
        loading:false,
        product:action.payload,
       
}  ; 
        
case PRODUCT_DETAILS_FAIL:
            
return{
    loading:false,
    error:action.payload,
}  ;  
case CLEAR_ERRORS:
            
return{
    ...state,
    error:null
} ; 

    
        default:
           return state;
    };
};