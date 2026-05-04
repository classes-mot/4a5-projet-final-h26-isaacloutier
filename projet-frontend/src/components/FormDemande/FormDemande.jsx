
import { useState } from "react";
import "./FormDemande.css";
import { useTranslation } from "react-i18next";
function FormDemande({chien, refreshData}) {

    const [demandeAlrExists, setDemandeAlrExists] = useState(false)
    const [aucuneDemandeACeNom, setAucuneDemandeACeNom] = useState(false)
    const [champsObli, setChampsObli] = useState(false)
    const [t] = useTranslation();

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
        if (data.nom != "" && data.telephone != "" && data.adresse != "" && data.desc != "") {
            setChampsObli(false);
            if (action == "envoyer") {
                if (!existe) {
                    postData(nouvelleDemande);

                    setAucuneDemandeACeNom(false);
                    
                }
            } else if (action == "modifier") {

                if (existe) {
                    updateData(nouvelleDemande, demandeId);
                } else {
                    setDemandeAlrExists(false);
                    setAucuneDemandeACeNom(true);
                }
            } else if (action == "supprimer") {
                
                if (existe) {
                    deleteData(demandeId);
                    event.target.reset();
                } else {
                    setDemandeAlrExists(false);
                    setAucuneDemandeACeNom(true);
                }
                
            }
        } else {
            setChampsObli(true);
            setDemandeAlrExists(false);
            setAucuneDemandeACeNom(false);
        }
        


        

    }

    async function updateData(nouvelleDemande, id) {
        try {
            const response = await
                fetch(`${import.meta.env.VITE_BACKEND_URL}/api/demandes/update/${id}`, {
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
                fetch(`${import.meta.env.VITE_BACKEND_URL}/api/demandes/delete/${id}`, {
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
                fetch(`${import.meta.env.VITE_BACKEND_URL}/api/demandes/add`, {
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
                fetch(`${import.meta.env.VITE_BACKEND_URL}api/demandes`, {
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
                    <label htmlFor="nom">{t("fiche.nom")}</label>
                    <input id="nom" name="nom" type="text"/>

                    <label htmlFor="telephone">{t("fiche.telephone")}</label>
                    <input id="telephone" name="telephone" type="text"/>

                    <label htmlFor="adresse">{t("fiche.adresse")}</label>
                    <input id="adresse" name="adresse" type="text"/>

                    <label htmlFor="desc">{t("fiche.description")}</label>
                    <textarea id="desc" name="desc" rows="10"/>
                    <div className="buttons">
                        <button type="submit" value="modifier">{t("fiche.modifier")}</button>
                        <button type="submit" value="envoyer" id="envoyer">{t("fiche.envoyer")}</button>
                        <button type="submit" value="supprimer">{t("fiche.supprimer")}</button>
                    </div>
                    {demandeAlrExists ? <div>{t("fiche.erreurEnvoyer")}</div> : null}
                    {aucuneDemandeACeNom ? <div>{t("fiche.erreurModifierLigne1")}<br/> {t("fiche.erreurModifierLigne2")}</div> : null}
                    {champsObli ? <div>{t("fiche.erreurChampsObli")}</div> : null}
                    

                </form>
    );

}

export default FormDemande;  