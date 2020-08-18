import { BUY_BOOK } from './bookType';

const initState = {
    noOfBooks: 15,
}

const bookReducer = (state = initState, action) => {
    switch(action.type){
        case BUY_BOOK:return{
            ...state,
            noOfBooks:state.noOfBooks - 1,
        }
        default: return state;
    }
}
export default bookReducer;