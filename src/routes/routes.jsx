import { createBrowserRouter } from "react-router-dom";
import Register from "../layoutpage/Register";
import Login from "../layoutpage/Login";
import Home from "../layoutpage/Home";
import News from "../component/News";


const router = createBrowserRouter([
    {
        path: "/",
        element: <Login></Login>
    },
    {
        path: "/register",
        element: <Register></Register>
    },
    {
        path: "/home",
        element: <Home></Home>,
        children: [
            {
                path: '/home',
                element: <News></News>,
                loader: ( ) => fetch('https://openapi.programming-hero.com/api/news/category/01')
            },
            {
                path: '/home/:id',
                element: <News></News>,
                loader: ( {params} ) => fetch(`https://openapi.programming-hero.com/api/news/category/${params.id}`)
            }
        ]
    }
]);

export default router 