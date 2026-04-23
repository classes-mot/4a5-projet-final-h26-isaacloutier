import { useState } from 'react'
import './App.css'
import ChiensList from './components/ChiensList/ChiensList'
import Footer from './components/Footer/Footer'
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import RootLayout from './components/Navigation/RootLayout';
import ErrorPage from "./components/Navigation/ErrorPage"
import LoginForm from './components/LoginForm/LoginForm';
import { AuthContext } from './context/AuthContext/AuthContext';

function App() {

  const [isLoggedIn, setIsLoggedIn] = useState(false);

    const loginHandler = () => {
      setIsLoggedIn(true);
    }

    const logoutHandler = () => {
      setIsLoggedIn(false);
    }

  const router = createBrowserRouter([
    {
      path: "/", element: <RootLayout />, errorElement: <ErrorPage />,
      children: [
        { path: "/", element:
           <ChiensList title="En vedette"></ChiensList> },
        { path: "/login", element: <LoginForm/> },
        { path: "*", element: <ErrorPage /> },
      ]
    }
  ])

  const routerLoggedIn = createBrowserRouter([
    {
      path: "/", element: <RootLayout />, errorElement: <ErrorPage />,
      children: [
        { path: "/", element:
           <ChiensList title="En vedette"></ChiensList> },
        { path: "/login", element: <div className='addRoot'>login</div> },
        { path: "/voir", element: <div className='addRoot'>voir</div> },
        { path: "*", element: <ErrorPage /> },
      ]  
    }
  ])

  return (
    <AuthContext.Provider value={{
      isLoggedIn: isLoggedIn,
      login: loginHandler,
      logout: logoutHandler
    }}>
      <RouterProvider router={isLoggedIn ? routerLoggedIn : router} />
    </AuthContext.Provider>
  )
}

export default App
