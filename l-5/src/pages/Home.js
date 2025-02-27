import { useEffect, useState } from "react";
import Spinner from "../components/Spinner"
import Product from "../components/Product";

const Home = () => {
    const API_URL = "https://fakestoreapi.com/products"
    const [loading,setLoading] = useState(false);
    const [posts,setPost] = useState([]);

    async function fetchProductData(){
        setLoading(true);

        try{
            const url = await fetch(API_URL);
            const data = await url.json();
            console.log("the data is : " , data);

            setPost(data);
        }
        catch(error){
            console.log("Error Occured");
            setPost([]);
        }

        setLoading(false);
    }

    useEffect(() => {
        fetchProductData();
    },[])


    return (
        <div>
            {
                loading ? <Spinner></Spinner> : 
                posts.length>0 ?
                (<div className="grid xs:grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 max-w-6xl p-2 mx-auto space-y-10 space-x-5 min-h-[80vh]">
                    {
                        posts.map( (post) => (
                            <Product key={post.id} post={post}></Product>
                        ))  
                    } 
                </div>) :
                <div className="flex justify-center items-center">
                    <p> No Data Found </p>
                </div>
            }
        </div>
    );
};

export default Home;