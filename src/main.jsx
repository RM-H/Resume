import React from 'react'
import ReactDOM from 'react-dom/client'
import Mainlayout from "./layouts/Mainlayout.jsx";
import {createBrowserRouter, RouterProvider} from "react-router-dom";
import Home from './pages/Home.jsx'

const router = createBrowserRouter([
    {
        path: "/",
        element: <Mainlayout/>,


        children: [
            {
                path:'/' ,
                element: <Home/>
            }


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
