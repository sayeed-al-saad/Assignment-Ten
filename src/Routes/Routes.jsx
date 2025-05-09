import { createBrowserRouter } from "react-router-dom";
import Root from "../Layout/Root";
import Home from "../Pages/Home/Home";
import Login from "../Login/Login";
import Register from "../Register/Register";
import PrivateRoutes from "./PrivateRoutes";
import Details from "../Pages/Details/Details";



const router = createBrowserRouter([
    {
        path: "/",
        element: <Root></Root>,
        children:[
            {
                path: "/",
                element: <Home></Home>,
                loader: () => fetch("/touristspots.json")
            },
            {
                path: "/login",
                element: <Login></Login>,
            },
            {
                path: "/register",
                element: <Register></Register>,
            },
            {
                path: "/touristspots/:id",
                element: <PrivateRoutes><Details></Details></PrivateRoutes>,
                loader: () => fetch("/touristspots.json")
            }  
        ]
    
    }
])

export default router;