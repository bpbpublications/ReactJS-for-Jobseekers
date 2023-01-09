const initialState = {
    dislikesCounter: 0,
}

export const dislikeReducer = (state=initialState, action) => {
    switch(action.type) {
        case "UPDATE_DISLIKES_COUNT":
            return {...state, dislikesCounter: state.dislikesCounter + action.updateByValue}
        default:
            return state
    }
}