import "./App.css";
import { useState } from "react";
import Random from "./components/Random";
import Tag from "./components/Tag";

function App() {
  return (
      <div className=" h-screen flex flex-col background relative w-full items-center overflow-x-hidden ">
      <h1 className=" w-11/12  bg-white rounded-lg  mx-auto mt-[40px] text-center rounded-lg px-10 py-2 text-2xl font-bold">GIFs</h1>
      <div className="flex flex-col w-full items-center gap-y-10 mt-[30px]">
        <Random></Random>
        <Tag></Tag>
      </div>
    </div>    
  );
}

export default App;
