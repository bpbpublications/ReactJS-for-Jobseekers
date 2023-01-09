const initialState = {
    userList: null,
}

export const mainReducer = (state=initialState, action) => {
    switch(action.type) {
        case "FETCH_USER_LIST_DATA":
            return {...state, userList: action.payload}
        default:
            return state
    }
}