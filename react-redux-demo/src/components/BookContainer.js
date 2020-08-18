import React from 'react';
import { connect } from 'react-redux';
import { buyBook } from '../redux';

const BookContainer = (props) => {
    return (
        <div>
            <h1>No of Books - {props.noOfBooks}</h1>
            <button onClick={props.buyBook}>Buy Book</button>
        </div>
    );
}

const mapStatetoProps = (state) => {
    return {
        noOfBooks: state.noOfBooks,
    }
}

const mapDispatchtoProps = (disptch) => {
    return {
        buyBook: function () {
            disptch(buyBook());
        }
    }
}
export default connect(mapStatetoProps, mapDispatchtoProps)(BookContainer);