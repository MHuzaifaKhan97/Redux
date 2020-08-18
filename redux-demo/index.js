const redux = require('redux');
const createStore = redux.createStore;  // Creating Store

const BUY_BOOK = "BUY_BOOK";
const ADD_BOOK = "ADD_BOOK";
const initState = {
    noOfBooks: 10,
}

// actions
const buyBook = () => {
    return {
        type: BUY_BOOK,
        detail: 'Book is Purchased'
    }
}
const addBook = () => {
    return {
        type: ADD_BOOK,
        detail: 'Book is Added'
    }
}
// Reducer
const Reducer = (state = initState, action) => {
    switch (action.type) {
        case "BUY_BOOK": return {
            ...state,
            noOfBooks: state.noOfBooks - 1,
        }
        case "ADD_BOOK": return {
            ...state,
            noOfBooks: state.noOfBooks + 1,
        }
        default: return state;
    }
}

const store = createStore(Reducer);

console.log("Initial State: ", store.getState());
const unsubscribe = store.subscribe(() => { console.log("Updated State: ", store.getState()) })

store.dispatch(buyBook())
store.dispatch(buyBook())
store.dispatch(buyBook())
store.dispatch(addBook())
store.dispatch(addBook())
store.dispatch(addBook())
unsubscribe()