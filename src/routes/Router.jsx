import { createBrowserRouter } from "react-router-dom";
import MainLayout from "../layouts/MainLayout";
import Home from "../components/pages/home/Home";
import Blogs from "../components/pages/blogs/Blogs";
import Login from "../components/pages/login/Login";
import Register from "../components/pages/register/Register";
import Chef from "../components/pages/chef/Chef";
import ChefSingle from "../components/pages/chef/ChefSingle";
import PrivateRoute from "./PrivateRoute";


export const router= createBrowserRouter([
    {
        path:'/',
        element:<MainLayout></MainLayout>,
        children:[
            {
                path:'/',
                element:<Home></Home>,
                loader: ()=> fetch('http://localhost:3000/food')
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
                element: <Chef></Chef>,
                loader: ()=> fetch(`http://localhost:3000/chef/`)
                
                
            },
            {
                path:'/chef/:id',
                element: <PrivateRoute> <ChefSingle></ChefSingle> </PrivateRoute>,
                loader: ({params})=> fetch(`http://localhost:3000/chef/${params.id}`)
                
                
            },
            {
                path:'/blogs',
                element: <PrivateRoute><Blogs></Blogs></PrivateRoute>
            }
        ]
    }
])

