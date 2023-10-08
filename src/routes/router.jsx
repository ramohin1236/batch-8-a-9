import {
    createBrowserRouter
  } from "react-router-dom";
import Layout from "../components/Layout";
import Home from "../components/Home";
import Login from "../components/Login";
import Camera from "../components/Camera";
import Tv from "../components/Tv";
import Gadget from "../components/Gadget";
import Registration from "../components/Registration";
import Computer from "../components/Computer";
import About from "../components/About";
import ServiceDetails from "../components/Services/ServiceDetails";
import PrivateRoute from "./PrivateRoute";

  const router = createBrowserRouter([
    {
      path: "/",
      element: <Layout/>,
      children:[
        {
         path: "/",
         element:<Home/>
        },
        {
         path: "/camera",
         element:<Camera/>
        },
        {
         path: "/tv",
         element:<Tv/>
        },
        {
         path: "/gadget",
         element:<Gadget/>
        },
        {
         path: "/details/:id",
         element:<PrivateRoute><ServiceDetails></ServiceDetails></PrivateRoute>,
         loader: ()=>fetch('/services.json')
        },
        {
         path: "/computer",
         element:<Computer/>
        },
        {
         path: "/login",
         element:<Login/>
        },
        {
         path: "/rgs",
         element:<Registration/>
        },
        {
         path: "/about",
         element:<About/>
        },
      ]
    },
  ]);


  export default router;