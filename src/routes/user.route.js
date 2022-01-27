import express from 'express';
import * as userController from '../controllers/user.controller';
import { userAuth } from '../middlewares/auth.middleware';
import { newUserValidator } from '../validators/user.validator';

const router = express.Router();

//route to create a new user
router.post('/register', newUserValidator, userController.newUser);

//route to login user
router.post('/login',userController.login);

//route to forgetPassword
router.post('/forgetPassword', userController.forgetPassword);

//route to reset password
router.put('/resetPassword', userAuth,userController.resetPassword);

//route to get a single user by their user id
// router.get('/:_id',userController.getUser);

//route to update a single user by their user id
// router.put('/:_id', userController.updateUser);

//route to delete a single user by their user id
// router.delete('/:_id', userController.deleteUser);

export default router;
