import {Request, Response} from "express";
import {PostschemaValidation} from "../validation/schema.validate";
import {PostService} from "../services/post.service";
import {UserService} from "../services/user.service";

class UserController {
    signUp = async (req: Request, res: Response) => {
        const data = {
            email: req.body.email,
            password: req.body.password,
            name: req.body.name,
            phone: req.body.phone
        };

        const user = await UserService.signUp(data);

        res.status(201).send(user);
    }
}

export const userController = new UserController();
