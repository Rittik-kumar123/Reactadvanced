import React, { useContext } from 'react'
import { AppContext } from '../context/AppContext';
import Spinner from './Spinner';


const Blogs = () =>  
{
    //consume
    const {posts,loading} = useContext(AppContext);//useContext hook through which we can consume centrelized Data
    return (
        <div className='w-11/12 max-w-[650px] py-8 flex flex-col gap-y-7 mt-[65px] mb-[70px] items-center justify-center'>
            {
                loading ? 
                (<Spinner></Spinner>) : 
                (posts.lenth === 0 ? 
                   (<div>
                        <p>No Post Found</p>
                   </div>) : 
                   (posts.map((post) => (
                    <div key={post.id}>
                        <p className='font-bold text-lg'>{post.title}</p>
                        <p className='text-sm mt-[4px]'>By <span className='italic'>{post.author}</span> on <span className='underline font-bold'>{post.category}</span></p>
                        <p className='text-sm mt-[4px]'>Posted on {post.date}</p>
                        <p className='text-md mt-[14px]'>{post.content}</p>
                        <div className='flex gap-x-3'>
                            {post.tags.map((tag,index) => {
                                return <span key={index} className='text-blue-700 text-xs font-bold underline mt-[5px]'>{`#${tag}`}</span>
                            })}
                        </div>
                    </div>
                   )))
                )
            }
        </div>
    )
}

export default Blogs;