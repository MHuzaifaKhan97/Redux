import React from 'react';
import './App.css';
import BookContainer from './components/BookContainer';
import { Provider } from 'react-redux';
import store from './redux/store';

function App() {
  return (
    <div className="App">
      <Provider store={store}>
        <BookContainer />
      </Provider>
    </div>
  );
}

export default App;
