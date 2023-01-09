const redux = require("redux"); //This is the syntax to import modules in Node environment.

const initialState = {
    counter: 0,
    userList: [],
}

const mainReducer = (state = initialState, action) => {
    switch(action.type) {
        case "counter/increment":
            return { ...state, counter: state.counter + 1}
        default:
            return state
    }
}

const globalStore = redux.createStore( mainReducer )

globalStore.subscribe(() => {
    console.log(globalStore.getState());
})

globalStore.dispatch({ type: "counter/increment" });
globalStore.dispatch({ type: "counter/increment" });
globalStore.dispatch({ type: "counter/increment" });
globalStore.dispatch({ type: "counter/increment" });
