const redux = require('redux');
const createStore = redux.createStore;

const BUY_BOOK = "BUY_BOOK";
const ADD_BOOK = "ADD_BOOK";
const BUY_MAGEZINE = "BUY_MAGEZINE";
const ADD_MAGEZINE = "ADD_MAGEZINE";

// Creating initial State 
const initState = {
    noOfBooks: 10,
    noOfMagezines: 20,
}

// actions
const buyBook = () => {
    return {
        type: BUY_BOOK,
        detail: "Book is purchased"
    }
}
const addBook = () => {
    return {
        type: ADD_BOOK,
        detail: "Book is purchased"
    }
}
const buyMagezine = () => {
    return {
        type: BUY_MAGEZINE,
        detail: "Book is purchased"
    }
}
const addMagezine = () => {
    return {
        type: ADD_MAGEZINE,
        detail: "Book is purchased"
    }
}

const Reducer = (state = initState, action) => {
    switch (action.type) {
        case 'BUY_BOOK': return {
            ...state,
            noOfBooks: state.noOfBooks - 1
        }
        case 'ADD_BOOK': return {
            ...state,
            noOfBooks: state.noOfBooks + 1
        }
        case 'BUY_MAGEZINE': return {
            ...state,
            noOfMagezines: state.noOfMagezines - 1
        }
        case 'ADD_MAGEZINE': return {
            ...state,
            noOfMagezines: state.noOfMagezines + 1
        }
        default: return state;
    }
}
const store = createStore(Reducer);

console.log('Initial State: ', store.getState())
const unsubscribe = store.subscribe(() => {console.log("Updated State: ",store.getState())})

store.dispatch(addBook())
store.dispatch(buyBook())
store.dispatch(buyBook())
store.dispatch(buyMagezine())
store.dispatch(buyMagezine())
store.dispatch(addMagezine())

unsubscribe();