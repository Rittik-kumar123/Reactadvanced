import React from 'react'
import "./Spinner.css"

const Spinner = () =>
{
    return (
        <div className='h-full w-11/12 max-w-[700px] py-8 flex flex-col gap-y-7 mt-[111px] mb-[70px] items-center justify-center h-full'>
            <div className='spinner '></div>
        </div>
    )
}

export default Spinner;