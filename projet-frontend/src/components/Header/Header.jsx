import { NavLink } from "react-router-dom";
import "./Header.css";
import { AuthContext } from "../../context/AuthContext/AuthContext";
import { useContext } from "react";
import { useTranslation } from "react-i18next";


function Header() {
    const { t, i18n } = useTranslation();
    const auth = useContext(AuthContext);
    const changeLanguage = (lang) => {
        i18n.changeLanguage(lang);
    };
    return (
        <header className="header">
            <h1>WOOFONTRENCY</h1>
            <ul>
                {auth.isLoggedIn ? <li><button onClick={auth.logout}>{t("header.logout")}</button></li> : 
                    <li>
                        <NavLink to="login">{t("header.login")}</NavLink>
                    </li>
                }

                <li>
                        <NavLink to="/">{t("header.acceuil")}</NavLink>
                </li>
                <li>
                    <button onClick={() => changeLanguage('fr')}>
                        Français
                    </button>
                </li>
                <li>
                    <button onClick={() => changeLanguage('en')}>
                        English
                    </button>
                </li>
            </ul>  
        </header>
    );
}

export default Header;