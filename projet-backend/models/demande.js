import mongoose from "mongoose";

const demandeSchema = new mongoose.Schema({
    idChien: {type: Number, required: true},
    nom: {type: String, required: true},
    telephone: {type: String, required: true},
    adresse: {type: String, required: true},
    description: {type: String, required: true},
})

export const Demande = mongoose.model("Demande", demandeSchema)