import { useState } from 'react'
import './App.css'
import ChiensList from './components/ChiensList/ChiensList'
import Footer from './components/Footer/Footer'
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import RootLayout from './components/Navigation/RootLayout';
import ErrorPage from "./components/Navigation/ErrorPage"

function App() {

  const router = createBrowserRouter([
    {
      path: "/", element: <RootLayout />, errorElement: <ErrorPage />,
      children: [
        { path: "/", element:
           <ChiensList title="En vedette"></ChiensList> },
        { path: "/login", element: <div className='addRoot'>login</div> },
        { path: "*", element: <ErrorPage /> },
      ]
    }
  ])

  return (
    <RouterProvider router={router} />
  )
}

export default App
