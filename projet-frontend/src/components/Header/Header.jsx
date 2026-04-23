import { NavLink } from "react-router-dom";
import "./Header.css";
import { AuthContext } from "../../context/AuthContext/AuthContext";
import { useContext } from "react";


function Header() {
    const auth = useContext(AuthContext);
    return (
        <header className="header">
            <h1>WOOFONTRENCY</h1>
            <ul>
                {auth.isLoggedIn ? <button onClick={auth.logout}>Logout</button> : 
                    <li>
                        <NavLink to="login">Login</NavLink>
                    </li>
                }

                <li>
                        <NavLink to="/">Acceuil</NavLink>
                </li>
                
            </ul>  
        </header>
    );
}

export default Header;