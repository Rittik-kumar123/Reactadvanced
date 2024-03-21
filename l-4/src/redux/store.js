import { configureStore } from "@reduxjs/toolkit";
import CounterSlice from "./slices/CounterSlice";

//to make redux store we have to call configStore
//as we know we need slices to make a store so here i have made a single counter slicer so i have included it
//key is same as the name of slice
export const store = configureStore({
    reducer : {
        counter : CounterSlice
    },
})