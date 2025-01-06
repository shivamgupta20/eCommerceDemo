import { GET_COUNTRIES_SUCCESS } from "./actionTypes";

const initialState = {
    countries: []
}

export const countryReducer = (state = initialState, action) => {
    switch(action.type){
        case GET_COUNTRIES_SUCCESS: {
            return {countries: action.data}
        }
        default: {
            return state;   
        }
    }
}