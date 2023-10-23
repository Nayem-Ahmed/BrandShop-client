import { createBrowserRouter } from "react-router-dom";
import Errorpage from "../Pages/Errorpage";
import Root from "../MainLayout/Root";
import Home from "../Pages/Home";
import Product from "../Components/Product";
import Cart from "../Components/Cart";
import Login from "../Components/Login";
import ProductbasedBrand from "../Components/ProductbasedBrand";
import SignUp from "../Components/SignUp";
import Details from "../Components/Details";
import Privetrouter from "./Privetrouter";
import Update from "../Components/Update";
// import Users from "../Components/Users";

const router = createBrowserRouter([
    {
        path:'/',
        element:<Root></Root>,
        errorElement: <Errorpage></Errorpage>,
        children: [
          {
            path: "/",
            loader:()=>fetch('/brands.json'),
            element: <Home></Home>,
          },
          {
            path:"/product",
            element:<Privetrouter><Product></Product></Privetrouter>,
          },
          {
            path:"/cart",
            loader:()=> fetch('https://fooddb-server.vercel.app/cart'),
            element:<Privetrouter><Cart></Cart></Privetrouter>,
          },
          {
            path:"/login",
            element:<Login></Login>,
          },
          {
            path:"/signup",
            element:<SignUp></SignUp>,
          },
          {
            path:"/details/:id",
            loader:({params})=> fetch(`https://fooddb-server.vercel.app/details/${params.id}`),
            element:<Privetrouter><Details></Details></Privetrouter>,
          },
          {
            path:"/update/:id",
            loader:({params})=> fetch(`https://fooddb-server.vercel.app/update/${params.id}`),
            element:<Privetrouter><Update></Update></Privetrouter>,
          },
          {
            path:"/productbasedbrand/:productbasedbrandId",
            loader:({params})=> fetch(`https://fooddb-server.vercel.app/products/${params.productbasedbrandId}`),
            element:<ProductbasedBrand></ProductbasedBrand>,
          },
        ],
    },
])
export default router;