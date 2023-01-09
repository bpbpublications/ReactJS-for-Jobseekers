const initialState = {
    likesCounter: 0,
}

export const likeReducer = (state=initialState, action) => {
    switch(action.type) {
        case "UPDATE_LIKES_COUNT":
            return {...state, likesCounter: state.likesCounter + action.updateByValue}
        default:
            return state
    }
}