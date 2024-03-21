import React from 'react'
import { useLocation, useNavigate } from 'react-router-dom';
import Headers from '../components/Header';
import Blogs from '../components/Blogs';
import Pagination from '../components/Pagination';

const CategoryPage = () =>
{
    const navigation = useNavigate();
    const location = useLocation();
    const category = location.pathname.split("/").at(-1);
    return (
        <div className='w-full h-full flex flex-col gap-y-1 mx-auto items-center'>
            <div className='w-11/12 max-w-[650px] flex items-center justify-center flex-col'>
                <Headers></Headers>
                <div>
                    <button className='rounded-md border shadow-md border-black px-4 py-1 mt-5'
                        onClick={() => navigation(-1)}
                    >
                        back
                    </button>
                    <h2 className='mt-[2.75rem] underline decoration-dashed decoration-sky-500 font-bold italic'>
                        Blogs on  <span>{category}</span>
                    </h2>
                </div>
                <Blogs></Blogs>
                <Pagination></Pagination>
            </div>
        </div> 
    )
}

export default CategoryPage;