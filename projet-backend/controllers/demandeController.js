import HttpError from '../util/httpError.js';
import { Demande } from "../models/demande.js"

const getDemandes = async (req, res, next) => {
  let demandes;
  try {
    demandes = await Demande.find();
  } catch (err) {
    console.log("Erreur lors du get", err)
    return next(new HttpError("Erreur requête", 500));
  }

  res.json({
    demandes: demandes.map(d => d.toObject({ getters: true }))
  });
};

const getDemandesById = async (req, res, next) => {
  const demandeId = req.params.id;


  let demande;
  try {
    
    demande = await Demande.findById(demandeId);
  } catch(err) {
    console.log("Erreur lors de la recherche par id", err)
    return next(new HttpError("Erreur requête", 500));
  }
  if (!demande) {
    const error = new Error('Jeu non trouvée');
      error.code = 404;
      return next(error);
  }

  res.json({ demande: demande.toObject({getters: true})});
};


const createDemande = async (req, res, next) => {
  const { idChien, nom, telephone, adresse, description } = req.body;
  const createDemande = new Demande({
    idChien,
    nom,
    telephone,
    adresse,
    description
  });

  try {
    await createDemande.save();
  } catch(err) {
    console.log("Erreur lors de l'ajout", err)
    return next(new HttpError("Erreur dans la requête", 500));
  }
  res.status(201).json({ demande: createDemande });
};

const updateDemande = async (req, res, next) => {
  const { idChien, nom, telephone, adresse, description } = req.body;
  const demandeId = req.params.id;
  
  let updatedDemande;
  try {
    updatedDemande = await Demande.findById(demandeId);
    updateDemande.idChien = idChien;
    updatedDemande.nom = nom;
    updatedDemande.telephone = telephone;
    updatedDemande.adresse = adresse;
    updatedDemande.description = description;
    await updatedDemande.save();
  } catch(err) {
    console.log("Erreur lors de l'ajout", err)
    return next(new HttpError("Erreur dans la requête", 500));
  }

  res.status(200).json({ demande: updatedDemande });
};

const deleteDemande = async (req, res, next) => {
  const demandeId = req.params.id;
  
  try {
    const demande = await Demande.findByIdAndDelete(demandeId);

    if (!demande) {
      return res.status(404).json({message: "Suppression échouée."})
    }
  } catch {
    const error = new Error('Demande non trouvée');
      error.code = 404; 
      return next(error); 
  }

  res.json({message:"Demande supprimée."})

};

export default {
  getDemandes: getDemandes,
  getDemandesById: getDemandesById,
  createDemande: createDemande,
  updateDemande: updateDemande,
  deleteDemande: deleteDemande,
};
