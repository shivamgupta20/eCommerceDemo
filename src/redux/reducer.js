const initialState = {
    productId:"",

}


export const reducer1  = (state=initialState, action) =>{
    switch(action.type){
        case "ADD_TO_CART_Reducer": {
            return {
                ...state,
                productId: action.productId
            }
        }
        default: {
            return state;
        }
    }
}