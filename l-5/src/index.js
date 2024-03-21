import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import {BrowserRouter} from "react-router-dom"
import "./index.css";
// import { Provider } from "react-redux";
// import { store } from "./redux/Store";
import Store from "./redux/Store";
import { Provider } from 'react-redux'
import { ToastContainer } from "react-toastify";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(

    <BrowserRouter>
      <Provider store={Store}>
          <App />
          <ToastContainer></ToastContainer>
      </Provider>
    </BrowserRouter> 
  
);
