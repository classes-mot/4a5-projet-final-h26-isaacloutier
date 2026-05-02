import { useState } from 'react'
import './App.css'
import ChiensList from './components/ChiensList/ChiensList'
import Footer from './components/Footer/Footer'
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import RootLayout from './components/Navigation/RootLayout';
import ErrorPage from "./components/Navigation/ErrorPage"
import LoginForm from './components/LoginForm/LoginForm';
import { AuthContext } from './context/AuthContext/AuthContext';
import Fiche from "./components/Fiche/Fiche"

function App() {

  const [isLoggedIn, setIsLoggedIn] = useState(() => localStorage.getItem("token") !== null);

    const loginHandler = () => {
      setIsLoggedIn(true);

    }

    const logoutHandler = () => {
      setIsLoggedIn(false);
      localStorage.removeItem("token");
    }

  const router = createBrowserRouter([
    {
      path: "/", element: <RootLayout />, errorElement: <ErrorPage />,
      children: [
        { path: "/", element:
          <>
            <ChiensList title="En vedette"></ChiensList> 
            <ChiensList title="Âge d'or"></ChiensList>
            <ChiensList title="Nouveautés"></ChiensList>
          </>

          },
           
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
          <>
          
            <ChiensList title="En vedette"></ChiensList>
            <ChiensList title="Âge d'or"></ChiensList>
            <ChiensList title="Nouveautés"></ChiensList>

          </>
           
          
          },
        { path: "/adopter/:id", element: <Fiche/> },
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
