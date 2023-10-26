import React from 'react';
import { increase } from '../redux/counter/counterAction';
import {  useSelector } from 'react-redux/es/hooks/useSelector';
import { useDispatch } from 'react-redux';

const CounterComponent = () => {
    const state = useSelector(state=>state);
    const dispatch = useDispatch();
    return (
        <div>
            <h1>Number:{state.counter}</h1>
            <button onClick={()=>dispatch(increase())}>Increase</button>
        </div>
    );
};



export default CounterComponent;