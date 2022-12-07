import { createBrowserRouter } from "react-router-dom";
import About from "../About/About";
import Contact from "../Contact/Contact";
import Home from "../Home/Home";
import Layout from "../Layout/Layout";
import Projects from "../Projects/Projects";
import Skills from "../Skills/Skills";

export const router=createBrowserRouter([
    {
        path:'/',
        element:<Layout></Layout>,
        children:[
            {
                path:'/',
                element:<Home></Home>
            },
            {
                path:'/about',
                element:<About></About>
            },
            {
                path:'/skills',
                element:<Skills></Skills>

            },
            {
                path:'/projects',
                element:<Projects></Projects>

            },
            {
                path:'/contact',
                element:<Contact></Contact>
            }
        ]
    }
]);