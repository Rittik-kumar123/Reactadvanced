import React, { useContext, useEffect, useState } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import { AppContext } from '../context/AppContext';
import Headers from '../components/Header';
import BlogDetails from '../components/BlogDetails';
import Pagination from '../components/Pagination';
import Spinner from '../components/Spinner';

const BlogPage = () => {
    const newBaseUrl = "https://codehelp-apis.vercel.app/api/get-blog";
    const [blog, setBlog] = useState(null);
    const [relatedBlogs, setRelatedBlogs] = useState(null);
    const location = useLocation();
    const navigate = useNavigate();
    const { loading, setLoading } = useContext(AppContext);

    const blogId = location.pathname.split("/").pop();

    async function fetchRelatedBlogs() {
        setLoading(true);
        const url = `${newBaseUrl}?blogId=${blogId}`;
        try {
            const res = await fetch(url);
            const data = await res.json();

            setBlog(data.blog);
            setRelatedBlogs(data.relatedBlogs);
        } catch (error) {
            console.error("Error occurred:", error);
            setBlog(null);
            setRelatedBlogs([]);
        }
        setLoading(false);
    }

    useEffect(() => {
        if (blogId) {
            fetchRelatedBlogs();
        }
    }, [location.pathname, blogId]);

    return (
        <div className='flex items-center justify-center flex-col'>
            <Headers/>
            
            <div className='rounded-md border shadow-md border-black px-4 py-1 mt-[23px]'>
                <button onClick={() => navigate(-1)}>back</button>
            </div>

            {loading ? (
                <Spinner></Spinner>
            ) : blog ? (
                <div className='flex justify-center items-center flex-col'>
                    <BlogDetails post={blog} />
                    <h2 className='mt-[2rem] underline font-bold'>Related Blogs</h2>
                    {relatedBlogs?.map(post => (
                        <div key={post.id} className='mt-[2rem]'>
                            <BlogDetails post={post} />
                        </div>
                    ))}
                </div>
            ) : (
                <div>
                    <p>No Blog Found</p>
                </div>
            )}
        </div>
    );
};

export default BlogPage;
