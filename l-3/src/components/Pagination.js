import React, { useContext } from 'react'
import { AppContext } from '../context/AppContext';

const Pagination = () =>
{
    const {page,totalPages,handlePageChange} = useContext(AppContext)
    return (
        <div className='w-[100%] flex justify-center items-center border-2 shadow-md fixed bottom-0 bg-white mx-auto'>
            <div className='flex justify-between py-2 w-11/12 max-w-[669px]'>
                <div className='flex gap-x-2'>
                    { page < totalPages && 
                        <button className='rounded-md border shadow-md border-black px-4 py-1' onClick={() => handlePageChange(page+1)}>
                            Next
                        </button>
                    }
                    { page > 1 && 
                        <button className='rounded-md border shadow-md border-black px-4 py-1' onClick={() => handlePageChange(page-1)}>
                            Previous
                        </button>
                    }
                </div>
                <p className='font-bold text-sm'>
                    page {page} of {totalPages}
                </p>
            </div>
        </div>
    )
}

export default Pagination;
//   mr-[500px]
// 