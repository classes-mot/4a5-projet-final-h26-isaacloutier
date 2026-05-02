
import { useState } from "react";
import "./FormDemande.css";
function FormDemande({chien, refreshData}) {

    const [demandeAlrExists, setDemandeAlrExists] = useState(false)
    const [aucuneDemandeACeNom, setAucuneDemandeACeNom] = useState(false)

    async function submitHandler(event) {
        event.preventDefault();
        const fd = new FormData(event.target);
        const data = Object.fromEntries(fd);


        const nouvelleDemande = {
                idChien: chien.id,
                nom: data.nom,
                telephone: data.telephone,
                adresse: data.adresse,
                description: data.desc
        }
        const allData = await getData();
        const action = event.nativeEvent.submitter.value;


        let existe = false;
        let demandeId;
        allData.demandes.forEach(demande => {
            
            if (nouvelleDemande.nom == demande.nom && nouvelleDemande.idChien == demande.idChien && !existe) {
                setDemandeAlrExists(true);
                setAucuneDemandeACeNom(false);
                existe = true;
                demandeId = demande._id;
            }
        });

        if (action == "envoyer") {
            if (!existe) {
                postData(nouvelleDemande);
                setDemandeAlrExists(false)
                setAucuneDemandeACeNom(false);
            }
        } else if (action == "modifier") {
            setDemandeAlrExists(false)
            if (existe) {
                updateData(nouvelleDemande, demandeId);
            } else {
                setAucuneDemandeACeNom(true);
            }
        } else if (action == "supprimer") {
            setDemandeAlrExists(false)
            if (existe) {
                deleteData(demandeId);
                event.target.reset();
            } else {
                setAucuneDemandeACeNom(true);
            }
            
        }
        

    }

    async function updateData(nouvelleDemande, id) {
        try {
            const response = await
                fetch(`http://localhost:5000/api/demandes/update/${id}`, {
                method: 'PATCH',
                headers: {
                'Content-Type': 'application/json',
                "Authorization": `Bearer ${localStorage.getItem("token")}`
                },
                body: JSON.stringify(nouvelleDemande)
            });
        } catch (err) {
            console.error(err);
        }
        refreshData();
    }

    async function deleteData(id) {
        try {
            const response = await
                fetch(`http://localhost:5000/api/demandes/delete/${id}`, {
                method: 'DELETE',
                headers: {
                'Content-Type': 'application/json',
                "Authorization": `Bearer ${localStorage.getItem("token")}`
                }
            });
        } catch (err) {
            console.error(err);
        }
        refreshData();
    }


    async function postData(nouvelleDemande) {
        try {
            const response = await
                fetch('http://localhost:5000/api/demandes/add', {
                method: 'POST',
                headers: {
                'Content-Type': 'application/json',
                "Authorization": `Bearer ${localStorage.getItem("token")}`
                },
                body: JSON.stringify(nouvelleDemande)
            });
        } catch (err) {
            console.error(err);
        }
        refreshData();
    }

    async function getData() {
        let data;
        try {
            const response = await
                fetch('http://localhost:5000/api/demandes', {
                method: 'GET',
                headers: {
                'Content-Type': 'application/json',
                },
            
            });
            data = await response.json()
            
        } catch (err) {
            console.error(err);
        }
        
        return data;
    }

    return (
    <form onSubmit={submitHandler}className="formDemande">
                    <label htmlFor="nom">Nom complet:</label>
                    <input id="nom" name="nom" type="text"/>

                    <label htmlFor="telephone">Téléphone:</label>
                    <input id="telephone" name="telephone" type="text"/>

                    <label htmlFor="adresse">Adresse:</label>
                    <input id="adresse" name="adresse" type="text"/>

                    <label htmlFor="desc">Description de la demande:</label>
                    <textarea id="desc" name="desc" rows="10"/>
                    <div className="buttons">
                        <button type="submit" value="modifier">Modifier</button>
                        <button type="submit" value="envoyer" id="envoyer">Envoyer</button>
                        <button type="submit" value="supprimer">Supprimer</button>
                    </div>
                    {demandeAlrExists ? <div>Vous avez déjà placé une demande.</div> : null}
                    {aucuneDemandeACeNom ? <div>Aucune demande à ce nom.<br/> Assurez-vous d'avoir entré une valeur dans la section "Nom complet".</div> : null}
                    

                </form>
    );

}

export default FormDemande;  