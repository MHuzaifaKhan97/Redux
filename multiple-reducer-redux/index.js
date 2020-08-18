const { redux, createStore, combineReducers } = require('redux');
// OR
// const redux = require('redux');
// const createStore = redux.createStore;
// const combineReducers = redux.combineReducers;

const BUY_BOOK = "BUY_BOOK";
const ADD_BOOK = "ADD_BOOK";
const BUY_MAGEZINE = "BUY_MAGEZINE";
const ADD_MAGEZINE = "ADD_MAGEZINE";

// Creating initial State 
const initStateBooks = {
    noOfBooks: 10,
}
const initStateMagezines = {
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

const bookReducer = (state = initStateBooks, action) => {
    switch (action.type) {
        case 'BUY_BOOK': return {
            ...state,
            noOfBooks: state.noOfBooks - 1
        }
        case 'ADD_BOOK': return {
            ...state,
            noOfBooks: state.noOfBooks + 1
        }
        default: return state;
    }
}
const magezineReducer = (state = initStateMagezines, action) => {
    switch (action.type) {
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


// const reducer = combineReducers({
//     bookReducer,
//     magezineReducer,
// })
// OR
const reducer = combineReducers({
    Book: bookReducer,
    Magezine: magezineReducer,
})

const store = createStore(reducer);

console.log('Initial State: ', store.getState())
const unsubscribe = store.subscribe(() => { console.log("Updated State: ", store.getState()) })

store.dispatch(addBook())
store.dispatch(buyBook())
store.dispatch(buyBook())
store.dispatch(buyMagezine())
store.dispatch(buyMagezine())
store.dispatch(addMagezine())

unsubscribe();