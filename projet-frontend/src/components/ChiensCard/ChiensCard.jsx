import "./ChiensCard.css";
import { NavLink } from "react-router-dom";

function ChiensCard({id, nom, race, age, sexe, image, categorie}) {

    return (
        <div className="frameCC">
            <img src={image} alt={nom}/>
            <h1>{nom}</h1>
            <div className="info">
                <h2>Race: {race}</h2>
                <h2>Age: {age}</h2>
                <h2>Sexe: {sexe}</h2>
                
            </div>
            <NavLink to="/login" className="REDIRECT">
                Voir
            </NavLink>
        </div>
    );
}


// ajouter au moin un code pour tester ???
export default ChiensCard;

