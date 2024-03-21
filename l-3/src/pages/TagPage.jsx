import React from 'react'
import Headers from '../components/Header';
import { useLocation, useNavigate } from 'react-router-dom';
import Pagination from '../components/Pagination';
import Blogs from '../components/Blogs';

const TagPage = () =>
{
    const navigation = useNavigate();
    const location = useLocation();
    const tag = location.pathname.split("/").at(-1);
    return (
        <div className='w-full h-full flex flex-col gap-y-1 items-center'>
            <div className='w-11/12 max-w-[650px] flex items-center justify-center flex-col'>
                <Headers></Headers>
                <div className='mt-[45px] mb-[10px] flex items-center flex-col'>
                    <button className='rounded-md border shadow-md border-black px-4 py-1 mt-5'
                    onClick={() => navigation(-1)}
                    >
                        back
                    </button>
                    <h2 className='px-4 py-1 mt-5 font-bold underline decoration-dashed decoration-sky-500'>
                        Blogs Tagged <span>{tag}</span>
                    </h2>
                </div>
                <Blogs></Blogs>
                <Pagination></Pagination>
            </div>
        </div> 
    )
}

export default TagPage;