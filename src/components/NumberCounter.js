import React from 'react';
import { increaseNumber , decreaseNumber } from '../redux/number/numberAction';
import {  useSelector } from 'react-redux/es/hooks/useSelector';
import { useDispatch } from 'react-redux';

const NumberCounter = () => {
    const state = useSelector(state=>state.number.number);
    const dispatch = useDispatch();
    return (
        <div>
            <h1>Number{state}</h1>
            <button onClick={()=>dispatch(increaseNumber())}>Increase</button>   
            <button onClick={()=>dispatch(decreaseNumber())}>Decrease</button>   
        </div>
    );
};

export default NumberCounter;