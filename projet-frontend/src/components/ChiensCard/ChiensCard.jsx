import { useContext } from "react";
import "./ChiensCard.css";
import { NavLink } from "react-router-dom";
import { AuthContext } from "../../context/AuthContext/AuthContext";

function ChiensCard({id, nom, race, age, sexe, image, categorie}) {
    const auth = useContext(AuthContext);
    return (
        <div className="frameCC">
            <div className="imgContainer">
                <img src={image} alt={nom}/>
            </div>
            
            <h1>{nom}</h1>
            <div className="info">
                <h2>Race: {race}</h2>
                <h2>Age: {age}</h2>
                <h2>Sexe: {sexe}</h2>
                
            </div>
            {auth.isLoggedIn ? 
            <NavLink to={`/adopter/${id}`} className="REDIRECT">
                Voir
            </NavLink> : null}
            
        </div>
    );
}


// ajouter au moin un code pour tester ???
export default ChiensCard;

