import React, { useEffect, useState } from 'react'
import axios from 'axios'
import Spinner from './Spinner';
import useGif from '../hooks/useGif';


const Tag = () => {
    
    const[tag,setTag]=useState('car')

    const {gif,loading,fetchData} = useGif(tag);
    

    function changeHandler(event)
    {
        setTag(event.target.value);
    }
    return(
        <div className='w-1/2 bg-blue-500 flex flex-col items-center rounded-lg border border-black gap-y-5 pt-[15px] mt-[15px]'>
            <h1 className='text-2xl underline uppercase font-bold'>Random {tag} Gif</h1>
            {
                loading ? (<Spinner></Spinner>) : (<img src={gif} width="450px"></img>)
            }
            
            <input
            className='w-10/12 text-lg py-2 rounded-lg text-center mb-[3px]'
            onChange={changeHandler}
            value={tag}
            ></input>
            
            <button className='w-10/12 bg-yellow-500 text-lg py-2 rounded-lg mb-[20px]' onClick={()=>fetchData(tag)}>Generate</button>
        </div>
    )
}

export default Tag;