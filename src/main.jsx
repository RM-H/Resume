import React from 'react'
import ReactDOM from 'react-dom/client'
import Mainlayout from "./layouts/Mainlayout.jsx";
import {createBrowserRouter, RouterProvider} from "react-router-dom";
import {createTheme, ThemeProvider} from "@mui/material";
import bodyfont from '/assets/fonts/body.ttf'

const router = createBrowserRouter([
    {
        path: "/",
        element: <Mainlayout/>,


        children: [
            // {
            //     path:'/ats' ,
            //     element: <Department/>
            // }


        ]
    }

]);



ReactDOM.createRoot(document.getElementById('root')).render(
    <React.StrictMode>
        <RouterProvider router={router}>

                <Mainlayout/>


        </RouterProvider>


    </React.StrictMode>,
)
