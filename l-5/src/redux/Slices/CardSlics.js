import { createSlice } from "@reduxjs/toolkit";


export const CardSlics = createSlice({
    name: "cart",
    // initialState : [],
    initialState :[],
    reducers : {
        add : (state,action) => {
            state.push(action.payload);
        },
        remove: (state,action) => {
            return state.filter((item) => item.id != action.payload)
        },
    }
});

export const {add,remove} = CardSlics.actions;
export default CardSlics.reducer;