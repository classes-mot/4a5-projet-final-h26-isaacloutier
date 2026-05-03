import { useContext } from "react";
import "./ChiensCard.css";
import { NavLink } from "react-router-dom";
import { AuthContext } from "../../context/AuthContext/AuthContext";
import { useTranslation } from "react-i18next";

function ChiensCard({id, nom, race, age, sexe, image, categorie}) {
    const auth = useContext(AuthContext);
    const { t } = useTranslation();
    return (
        <div className="frameCC">
            <div className="imgContainer">
                <img src={image} alt={nom}/>
            </div>
            
            <h1>{nom}</h1>
            <div className="info">
                <h2>{t("acceuil.race") + race}</h2>
                <h2>{t("acceuil.age") +age}</h2>
                <h2>{t("acceuil.sexe") +sexe}</h2>
                
            </div>
            {auth.isLoggedIn ? 
            <NavLink to={`/adopter/${id}`} className="REDIRECT">
                {t("acceuil.voir")}
            </NavLink> : null}
            
        </div>
    );
}


// ajouter au moin un code pour tester ???
export default ChiensCard;

