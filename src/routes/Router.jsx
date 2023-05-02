import { createBrowserRouter } from "react-router-dom";
import MainLayout from "../layouts/MainLayout";
import Home from "../components/pages/home/Home";
import Blogs from "../components/pages/blogs/Blogs";
import Login from "../components/pages/login/Login";
import Register from "../components/pages/register/Register";
import Chef from "../components/pages/chef/Chef";


export const router= createBrowserRouter([
    {
        path:'/',
        element:<MainLayout></MainLayout>,
        children:[
            {
                path:'/',
                element:<Home></Home>
            },
            {
                path:'/login',
                element:<Login></Login>
            },
            {
                path:'/register',
                element:<Register></Register>
            },
            {
                path:'/chef',
                element:<Chef></Chef>
            },
            {
                path:'/logs',
                element:<Blogs></Blogs>
            }
        ]
    }
])

