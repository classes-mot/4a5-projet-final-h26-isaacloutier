import "./Demande.css";
import { NavLink } from "react-router-dom";

function Demande({nom}) {

    return (
        <div className="frameD">
            {nom}
        </div>
    );
}


// ajouter au moin un code pour tester ???
export default Demande;