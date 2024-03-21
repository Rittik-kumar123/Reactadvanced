import React from 'react'
import Pagination from '../components/Pagination';
import Blogs from '../components/Blogs';
import Headers from '../components/Header';

const Home = () =>
{
    return (
        <div className='w-full h-full flex flex-col gap-y-1 mx-auto items-center'>
            <div className='w-11/12 max-w-[650px] flex items-center justify-center flex-col'>
            <Headers></Headers>
            <div className='w-11/12 max-w-[650px] flex items-center justify-center flex-col'>
                <Blogs></Blogs>
                <Pagination></Pagination>
            </div>
        </div>
        </div>
        
    )
}

export default Home;