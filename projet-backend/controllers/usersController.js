// users-controller.js
import jwt from 'jsonwebtoken';
import HttpError from '../util/httpError.js';


const login = async (req, res, next) => {
  const {nom, password } = req.body;
  let token;
    try {
      console.log('identifié!');
      token = jwt.sign(
        { nom: nom, password: password },
        'isaacProjet',
        { expiresIn: '1h' }
      );
      console.log(token);
    } catch (err) {
      console.error(err);
      const error = new HttpError(
        'Signing up failed, please try again later.',
        500
      );
      return next(error);
    }
    res.status(201).json({
      nom: nom, 
      password: password,
      token: token,
    });
  };


export default {
  login,
};
