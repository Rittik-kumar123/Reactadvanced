//Here we have made centrelized data using context provider and we are using it by using a hook called useContext
import { createContext, useState } from "react";
import {baseUrl} from "../baseUrl"
//1.context Api created
//step1
export const AppContext = createContext(); 
//2.provide context api
export default function AppContextProvider({children}){
    const [loading, setLoading] = useState(false);
    const [posts, setPosts] = useState([]);
    const [page, setPage] = useState(1);
    const [totalPages,setTotalPages] = useState(null);

    //data filling

    async function fetchBlogerPosts(page=1){
        setLoading(true);
        let url = `${baseUrl}?page=${page}`
        try{
            const result = await fetch(url);
            const data = await result.json();
            setPage(data.page);
            setPosts(data.posts);
            setTotalPages(data.totalPages);
        }
        catch(error){
            console.log("Error in fetching data");
            setPage(1);
            setPosts([]);
            setTotalPages(null);
        }
        setLoading(false);
    }

    function handlePageChange(page){
        setPage(page);
        fetchBlogerPosts(page)
    }
    const value = {
        loading,
        setLoading,
        posts,
        setPosts,
        page,
        setPage,
        totalPages,
        setTotalPages,
        handlePageChange,
        fetchBlogerPosts,
    };

    //step2
    return <AppContext.Provider value={value}>
        {children}
    </AppContext.Provider>
}

