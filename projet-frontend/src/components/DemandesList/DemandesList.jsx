
import "./DemandesList.css";
import Demande from "../Demande/Demande"
import { chiens } from "../../data/chiens.js"
import { useState } from "react";
import { useEffect } from "react";

function DemandesList({idChien, allData}) {
    

    if (!allData) return <div>Loading...</div>;
    const dataPertinente = allData.demandes.filter(demande => demande.idChien==idChien);

    return (
        <div className="frameDL">
            <ul>
                {dataPertinente.map((demande) => (
                    <li key={demande.nom}>
                        <Demande
                            nom={demande.nom}
                        />
                    </li>
                ))}
            </ul>
        </div>
    );
}

export default DemandesList;