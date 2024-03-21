import React, { useContext } from 'react'
import { AppContext } from '../context/AppContext';
import Spinner from './Spinner';
import BlogDetails from './BlogDetails';


const Blogs = () =>  
{
    //consume
    const {posts,loading} = useContext(AppContext);//useContext hook through which we can consume centrelized Data
    return (
        <div className='w-11/12 max-w-[650px] py-9 flex flex-col gap-y-9 items-center justify-center mb-[20px] '>
            
            {
                loading ? 
                (<Spinner></Spinner>) : 
                (posts.lenth === 0 ? 
                   (<div>
                        <p>No Post Found</p>
                   </div>) : 
                   (posts.map((post) => (
                     <BlogDetails key={post.id} post={post}></BlogDetails>
                   )))
                )
            }
        </div>
    )
}

export default Blogs;