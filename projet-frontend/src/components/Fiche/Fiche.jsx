
import "./Fiche.css";
import { chiens } from "../../data/chiens.js"
import { categories } from "../../data/categories.js"
import { useParams } from "react-router-dom";
import FormDemande from "../FormDemande/FormDemande.jsx";
import DemandesList from "../DemandesList/DemandesList.jsx";
import { useState, useEffect } from "react";

function Fiche() {
    const params = useParams();
    const idChien = params.id;

    const [allData, setAllData] = useState(null);

    async function getData() {
        try {
            const response = await fetch('http://localhost:5000/api/demandes');
            const data = await response.json();
            setAllData(data);
        } catch (err) {
            console.error(err);
        }
    }

    useEffect(() => {
        getData();
    }, []);
    
    let chien;
    chiens.forEach(element => {
        if (element.id == idChien) {
            chien = element;
        }
    });

    return (
        
        <div className="frameFiche">
            <h1>{chien.nom}</h1>
            <div className="conteneurMain">
                <div className="conteneurImg">
                    <img src={chien.image} alt={chien.nom}/>
                </div>
                
                <div className="conteneurInfo">
                    
                    <FormDemande chien={chien} refreshData={getData}/>
                    <h2>Toutes les demandes</h2>
                    <DemandesList idChien={chien.id} allData={allData}/>
                </div>
            </div>
            
        </div>
    );

}  

export default Fiche;

