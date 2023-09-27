import express from "express";
import {postController} from "../../controllers/post.controller";

export const router = express.Router();

router.post('/post', postController.addPost);