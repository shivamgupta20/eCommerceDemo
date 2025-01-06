import { combineReducers } from "redux";
import { reducer1 } from "./reducer";
import { countryReducer } from "./countryReducer";

export default combineReducers({
    reducer1,
    countries: countryReducer
})