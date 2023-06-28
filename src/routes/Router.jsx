import { createBrowserRouter } from "react-router-dom";
import MainLayout from "../layouts/MainLayout";
import Home from "../components/pages/home/Home";
import Blogs from "../components/pages/blogs/Blogs";
import Login from "../components/pages/login/Login";
import Register from "../components/pages/register/Register";
import Chef from "../components/pages/chef/Chef";
import ChefSingle from "../components/pages/chef/ChefSingle";
import PrivateRoute from "./PrivateRoute";
import Page404 from "../shared/Page404";


export const router= createBrowserRouter([
    {
        path:'/',
        element:<MainLayout></MainLayout>,
        children:[
            {
                path:'/',
                element:<Home></Home>,
                loader: ()=> fetch('https://my-fav-recipe-server-abdullahbinziad-gmailcom.vercel.app/food')
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
                loader: ()=> fetch(`https://my-fav-recipe-server-abdullahbinziad-gmailcom.vercel.app/chef/`)
                
    
            },
            {
                path:'/chef/:id',
                element: <PrivateRoute> <ChefSingle></ChefSingle> </PrivateRoute>,
                loader: ({params})=> fetch(`https://my-fav-recipe-server-abdullahbinziad-gmailcom.vercel.app/chef/${params.id}`)
                
                
            },
            {
                path:'/blogs',
                element: <Blogs></Blogs>
            },
            {
                path:'*',
                element: <Page404></Page404>
            }
        ]
    }
])

