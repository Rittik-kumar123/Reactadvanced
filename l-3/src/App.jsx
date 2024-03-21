import { useContext, useEffect } from "react";
import "./App.css";
import { AppContext } from "./context/AppContext";
import { Route, Routes, useLocation, useSearchParams } from "react-router-dom";
import Home from "./pages/Home";
import BlogPage from "./pages/BlogPage";
import TagPage from "./pages/TagPage";
import CategoryPage from "./pages/CategoryPage";

function App() {
  const {fetchBlogerPosts} = useContext(AppContext);

  const [searchParams , setSearchParams] = useSearchParams();
  const location = useLocation();
  useEffect(() => {
     const page = searchParams.get("page") ?? 1;

     if(location.pathname.includes("tags")){
      //iska matlab tag wala page show karna hai
      const tag=location.pathname.split("/").at(-1).replaceAll("-"," ");
      fetchBlogerPosts(Number(page),tag);
     }
     else if(location.pathname.includes("categories"))
     {
      const category=location.pathname.split("/").at(-1).replaceAll("-"," ");
      fetchBlogerPosts(Number(page),category);
     }
     else{
      fetchBlogerPosts(Number(page));
     }
  },[location.pathname,location.search]);
  ///blog/:blogId here :blogId is dynamic parameter
  return (
      <Routes>
        <Route path='/' element={<Home></Home>}></Route>
        <Route path='/blogs/:blogId' element={<BlogPage></BlogPage>}></Route>
        <Route path='/tag/:tag' element={<TagPage></TagPage>}></Route>
        <Route path='/categories/:category' element={<CategoryPage></CategoryPage>}></Route>
      </Routes>
  );
}

export default App;
