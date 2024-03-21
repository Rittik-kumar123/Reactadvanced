// import { configureStore  } from "@reduxjs/toolkit";
// import { CardSlics } from "./Slices/CardSlics";


// export const rootReducer = configureStore({
//     reducer:{
//         cart : CardSlics,  
//     }
// });

// const store = createStore(rootReducer);

// export default store;

import { configureStore } from '@reduxjs/toolkit'
import CardSlics from './Slices/CardSlics'

export default configureStore({
  reducer: {
    cart : CardSlics,
  }
})