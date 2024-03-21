import React from 'react'
import { NavLink } from 'react-router-dom';


const BlogDetails = ({post}) =>
{
    return (
        <div className='mt-[20px] flex items-center justify-center flex-col'>
            <NavLink to={`/blogs/${post.id}`}>
                <span className='font-bold hover:opacity-75'>{post.title}</span>
            </NavLink>
            <p>
                By
                <span className=''> {post.author} </span>
                on{" "}
                <NavLink to={`/categories/${post.category.replaceAll(" ","-")}`}>
                    <span className='italic text-lime-600'>{post.category}</span>
                </NavLink>
            </p>
            <p>Posted on {post.date}</p>
            <p className='w-[650px]'>{post.content}</p>
            <div>
                {post.tags.map((tag,index) => 
                (
                    <NavLink key={index} to={`/tag/${tag.replaceAll(" ","-")}`}>
                        <span className='text-sky-600'>{`#${tag}`} </span>
                    </NavLink>
                ))}
            </div>
        </div>
    )
}

export default BlogDetails;