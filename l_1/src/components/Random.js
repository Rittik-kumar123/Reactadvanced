import React from 'react'
import Spinner from './Spinner';
import useGif from '../hooks/useGif';
const API_KEY = process.env.REACT_APP_GIPHY_API_KEY;

const Random = () => {
    
    const {gif,loading,fetchData} = useGif();
    
    return(
        <div className='w-1/2 bg-green-500 flex flex-col items-center rounded-lg border border-black gap-y-5 pt-[15px] mt-[15px]'>
            <h1 className='text-2xl underline uppercase font-bold'>Random Gif</h1>
            {
                loading ? (<Spinner></Spinner>) : (<img src={gif} width="450px"></img>)
            }
            
            <button className='w-10/12 bg-yellow-500 text-lg py-2 rounded-lg mb-[20px]' onClick={()=> fetchData()}>Generate</button>
        </div>
    )
}

export default Random;