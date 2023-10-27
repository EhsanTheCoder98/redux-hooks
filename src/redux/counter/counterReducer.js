const initialState = {
    counter:0,
}

const reducer = (state=initialState,action)=>{
    switch(action.type){
        case "INCREASE":
            return{
                ...state,
                counter:state.counter+action.payload
            }
        case "DECREASE":
            return{
                ...state,
                counter:state.counter-action.payload
            }
        default:
            return state;
    }
}

export default reducer;