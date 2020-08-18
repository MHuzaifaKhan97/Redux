const { redux, createStore, applyMiddleware } = require('redux');
const axios = require('axios');
const thunkMiddleware = require('redux-thunk').default;

const USER_REQUEST = "USER_REQUEST";
const USER_SUCCESS = "USER_SUCCESS";
const USER_ERROR = "USER_ERROR";

const initState = {
    loading: false,
    user: [],
    error: '',
}

// Actions Creators
const userRequest = () => {
    return {
        type: USER_REQUEST,
    }
}
const userSuccess = (users) => {
    return {
        type: USER_SUCCESS,
        payload: users,
    }
}
const userError = (error) => {
    return {
        type: USER_ERROR,
        payload: error,
    }
}
// Reducers

const reducer = (state = initState, action) => {
    switch (action.type) {
        case "USER_REQUEST": return {
            ...state,
            loading: true
        }
        case "USER_SUCCESS": return {
            loading: false,
            users: action.payload,
            error: ''
        }
        case "USER_ERROR": return {
            loading: false,
            users: [],
            error: action.payload
        }
    }
}

const fetchUser = () => {
    return function (dispatch) {
        dispatch(userRequest())
        axios.get('https://jsonplaceholder.typicode.com/users')
            .then((res) => {
                // res.data
                const users = res.data.map((user) => user.name)
                dispatch(userSuccess(users))
            })
            .catch(err => {
                //error.message
                const error = err.message;
                dispatch(userError(error));
            })
    }
}
const store = createStore(reducer, applyMiddleware(thunkMiddleware));
store.subscribe(() => { console.log("UpdatedValue: ", store.getState()) })
store.dispatch(fetchUser())