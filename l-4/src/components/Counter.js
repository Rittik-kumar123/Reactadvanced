import React from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { decreament, increament } from '../redux/slices/CounterSlice';

const Counter=() => {

    const count = useSelector((state) => state.counter.value)
    const dispatch = useDispatch();


  return (
    <div>
       <button
        onClick={() => dispatch(increament())}
        >
            Increament
       </button>
       <br></br>
       <br></br>

       <div>{count}</div>

       <br></br>
       <br></br>

       <button
        onClick={() => dispatch(decreament ())}
       >
            Decreament
       </button>
    </div>    
  );
}

export default Counter;