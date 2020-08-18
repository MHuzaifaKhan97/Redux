import {createStore} from 'redux';
import bookReducer from './books/bookReducer';

const store = createStore(bookReducer);
export default store;