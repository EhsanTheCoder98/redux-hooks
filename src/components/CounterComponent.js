import React from 'react';
import { increase , decrease} from '../redux/counter/counterAction';
import {  useSelector } from 'react-redux/es/hooks/useSelector';
import { useDispatch } from 'react-redux';

const CounterComponent = () => {
    const state = useSelector(state=>state.counter.counter);
    const dispatch = useDispatch();
    return (
        <div>
            <h1>Number:{state}</h1>
            <button onClick={()=>dispatch(increase())}>Increase</button>
            <button onClick={()=>dispatch(decrease())}>Decrease</button>
        </div>
    );
};



export default CounterComponent;