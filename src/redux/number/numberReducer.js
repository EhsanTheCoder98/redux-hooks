const initialState = {
    number:10,
}

const reducerNumber = (state=initialState,action)=>{
    switch(action.type){
        case "INCREASE-NUMBER":
            return{
                ...state,
                number:state.number+1
            }
        case "DECREASE-NUMBER":
            return{
                ...state,
                number:state.number-1
            }
        default:
            return state;
    }
}

export default reducerNumber;