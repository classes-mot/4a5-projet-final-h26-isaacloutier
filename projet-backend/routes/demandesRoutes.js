import express from 'express';
import { check } from 'express-validator';
import demandesController from '../controllers/demandeController.js';
import checkAuth from "../authentification/checkAuth.js"

const validationsDemande = [
    check("id").not().isEmpty(),
    check("name").not().isEmpty(),
    check("telephone").not().isEmpty(),
    check("adresse").not().isEmpty(),
    check("description").not().isEmpty(),
  ];

const router = express.Router();

router.get('/', demandesController.getDemandes);

router.use(checkAuth);

router.post(
  '/add', validationsDemande, demandesController.createDemande
);

router.patch('/update/:id', validationsDemande, demandesController.updateDemande);

router.delete('/delete/:id', demandesController.deleteDemande);

export default router;