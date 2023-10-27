import { combineReducers } from "redux";
import reducer from "./counter/counterReducer";
import reducerNumber from "./number/numberReducer";
import userReducer from "./users/usersReducer";

const rootReducers = combineReducers({
    number:reducerNumber,
    counter:reducer,
    user:userReducer
})

export default rootReducers;