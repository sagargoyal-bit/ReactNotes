import React, { Children } from "react";
import ReactDOM  from "react-dom/client";
import Header from "./Components/Header";
import Footer from "./Components/Footer";
import Body from "./Components/Body";
import { createBrowserRouter, Outlet, RouterProvider } from "react-router-dom";
import { Contact } from "./Components/Contact";
import { ResturentMenu } from "./Components/ResturantMenu";

const AppLayout=()=>{
  return(
    <>
      <Header/>
      <Outlet/>
      <Footer/>
    </>
  )}

const appRouter =createBrowserRouter([
  {
    path:"/",
    element:<AppLayout/>,
    errorElement:<Error/>,
    children:[
      {
        path:"/",
        element:<Body/>
      },
      {
        path:"/contact",
        element:<Contact/>
      },
      {
        path:"/restarant/:id",
        element:<ResturentMenu/>
      }
    ]
  }
])

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(<RouterProvider router={appRouter} />);
