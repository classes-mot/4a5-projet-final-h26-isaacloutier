// users-controller.js
import jwt from 'jsonwebtoken';
import { User } from "../models/user.js"
import HttpError from '../util/httpError.js';


const login = async (req, res, next) => {
  const {nom, password } = req.body;
  let token;
    try {
      console.log('identifié!');
      token = jwt.sign(
        { userId: existingUser.id, email: existingUser.email },
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
      userId: existingUser.id,
      email: existingUser.email,
      token: token,
    });
  };


export default {
  registerUser,
  login,
};
