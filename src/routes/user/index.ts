import express from "express";
import {userController} from "../../controllers/user.controller";
import {ValidationData} from "../../middleware/validation";

export const router = express.Router();

router.post('/user', ValidationData.userValidate, userController.signUp);