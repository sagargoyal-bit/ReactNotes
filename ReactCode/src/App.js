import React, {lazy, Suspense } from "react";
import ReactDOM  from "react-dom/client";
import Header from "./Components/Header";
import Footer from "./Components/Footer";
import Body from "./Components/Body";
import Cart from "./Components/Cart";
import { createBrowserRouter, Outlet, RouterProvider } from "react-router-dom";
import { Contact } from "./Components/Contact";
import { ResturentMenu } from "./Components/ResturantMenu";
import About from "./Components/About";
import { Simmer } from "./Components/Simmer";
import { Provider } from "react-redux";
import store from "./ReduxStore/Store";

const AppLayout=()=>{
  return(
    <Provider store={store}>
      <Header/>
      <Outlet/>
      <Footer/>
    </Provider>
  )}

const Instamart =lazy(()=>import("./Components/Instamart"))
const appRouter = createBrowserRouter([
  {
    path: "/",
    element: <AppLayout />,
    errorElement: <Error />,
    children: [
      {
        path: "/",
        element: <Body />,
      },
      {
        path: "/contact",
        element: <Contact />,
      },
      {
        path: "/about",
        element: <About />,
      },
      {
        path: "/cart",
        element: <Cart/>,
      },
      {
        path: "/instamart",
        element: (
          <Suspense fallback={<Simmer />}>
            <Instamart />
          </Suspense>
        ),
      },
      {
        path: "/restarant/:id",
        element: <ResturentMenu />,
      },
    ],
  },
]);

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(<RouterProvider router={appRouter} />);
