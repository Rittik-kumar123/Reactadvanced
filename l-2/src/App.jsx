import { useContext, useEffect } from "react";
import "./App.css";
import Blogs from "./components/Blogs";
import Header from "./components/Header";
import Pagination from "./components/Pagination";
import { AppContext } from "./context/AppContext";

function App() {
  const {fetchBlogerPosts} = useContext(AppContext)

  useEffect(() => {
    fetchBlogerPosts();
  },[]);
  return (
    <div className="w-full h-full flex flex-col gap-y-1 items-center">
      <Header></Header>
      <Blogs></Blogs>
      <Pagination></Pagination>
    </div>    
  );
}

export default App;
