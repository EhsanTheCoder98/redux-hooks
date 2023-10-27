const initialState = {
    loading:false,
    users:[],
    error:""
}

const userReducer = (state=initialState,action) => {
    switch(action.type){
        case "FETCH-USERS":
            return {
                ...state,
                loading:true
            }
        case "FETCH-USERS-SUCCESS":
            return {
                ...state,
                loading:false,
                users:action.payload,
                error:""
            }
        case "FETCH-USERS-FAILURE":
            return {
                ...state,
                loading:false,
                users:[],
                error:action.payload
            } 
        default:
            return state;       
    }
}

export default userReducer;