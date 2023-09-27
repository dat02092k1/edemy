import {Request, Response} from "express";
import {PostschemaValidation} from "../validation/schema.validate";
import {PostService} from "../services/post.service";

class PostController {
    addPost = async (req: Request, res: Response) => {
        const data = {
            title: req.body.title,
            author: req.body.author,
            description: req.body.description
        }

        const {error, value} = PostschemaValidation.validate(data);

        if (error) {
            res.status(400).send({
                message: error.message
            });
        }

        const post = await PostService.createPost(value);
        res.status(201).send(post);
    }
}

export const postController = new PostController();
