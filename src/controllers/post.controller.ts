import {Request, Response} from "express";
import {PostschemaValidation} from "../validation/schema.validate";
import {PostService} from "../services/post.service";

class PostController {
    addPost = async (req: Request, res: Response) => {
        const data = {
            title: req.body.title,
            author: req.body.author,
            description: req.body.description
        };

        const post = await PostService.createPost(data);

        res.status(201).send(post);
    }
}

export const postController = new PostController();
