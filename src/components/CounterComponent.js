import React from 'react';
import { increase } from '../redux/counter/counterAction';
import { connect } from 'react-redux';

const CounterComponent = (props) => {
    return (
        <div>
            <h1>Number:{props.counter}</h1>
            <button onClick={props.increase}>Increase</button>
        </div>
    );
};

const mapStateToProps = state => {
    return{
        counter:state.counter
    }
}
const mapDispatchToProps = dispatch => {
    return{
        increase: ()=> dispatch(increase())
    }
}





export default connect(mapDispatchToProps, mapStateToProps)(CounterComponent);