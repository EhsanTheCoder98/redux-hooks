import { combineReducers } from "redux";
import reducer from "./counter/counterReducer";
import reducerNumber from "./number/numberReducer";

const rootReducers = combineReducers({
    number:reducerNumber,
    counter:reducer,
})

export default rootReducers;