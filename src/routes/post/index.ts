import express from "express";
import {postController} from "../../controllers/post.controller";
import {ValidationData} from "../../middleware/validation";

export const router = express.Router();

router.post('/post', ValidationData.postValidate, postController.addPost);