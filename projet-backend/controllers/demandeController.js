import HttpError from '../util/httpError.js';
import { Demande } from "../models/demande.js"

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
  const { id, nom, telephone, adresse, description } = req.body;
  const createdGame = new Game({
    name,
    categorie,
    duree,
    image,
    nbJoueurs,
  });

  try {
    await createdGame.save();
  } catch(err) {
    console.log("Erreur lors de l'ajout", err)
    return next(new HttpError("Erreur dans la requête", 500));
  }
  res.status(201).json({ game: createdGame });
};

const updateGame = async (req, res, next) => {
  const { name, categorie, duree, image, nbJoueurs } = req.body;
  const gameId = req.params.id;
  
  let updatedGame;
  try {
    updatedGame = await Game.findById(gameId);
    updatedGame.name = name;
    updatedGame.categorie = categorie;
    updatedGame.duree = duree;
    updatedGame.image = image;
    updatedGame.nbJoueurs = nbJoueurs;
    await updatedGame.save();
  } catch(err) {
    console.log("Erreur lors de l'ajout", err)
    return next(new HttpError("Erreur dans la requête", 500));
  }

  res.status(200).json({ game: updatedGame });
};

const deleteGame = async (req, res, next) => {
  const gameId = req.params.id;
  
  try {
    const game = await Game.findByIdAndDelete(gameId);

    if (!game) {
      return res.status(404).json({message: "Suppression échouée."})
    }
  } catch {
    const error = new Error('Jeu non trouvée');
      error.code = 404; 
      return next(error); 
  }

  res.json({message:"Jeu supprimé."})

};

export default {
  getDemandes: getDemandes,
  getGamesById: getDemandesById,
  createDemande: createDemande,
  updateDemande: updateGame,
  deleteDemande: deleteGame,
};
