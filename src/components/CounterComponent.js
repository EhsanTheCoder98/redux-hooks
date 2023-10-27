import React , {useState} from 'react';
import { increase , decrease} from '../redux/counter/counterAction';
import {  useSelector } from 'react-redux/es/hooks/useSelector';
import { useDispatch } from 'react-redux';

const CounterComponent = () => {
    const state = useSelector(state=>state.counter.counter);
    const dispatch = useDispatch();
    const [value,setValue] = useState(1);
    return (
        <div>
            <h1>Number:{state}</h1>
            <input type='text' value={value} onChange={(event)=>setValue(event.target.value)} />
            <button onClick={()=>dispatch(increase(+value))}>Increase</button>
            <button onClick={()=>dispatch(decrease(+value))}>Decrease</button>
        </div>
    );
};



export default CounterComponent;