import express from "express";
import { router as postRouter } from './post'; // Import the router from post.route.ts

export const router = express.Router();

router.use("/v1/api", postRouter);