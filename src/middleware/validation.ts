import {NextFunction, Request, Response} from "express";
import {PostschemaValidation, UserSchemaValidation} from "../validation/schema.validate";

// declare module 'express' {
//     interface Request {
//         data: {
//             title: string;
//             author: string;
//             description: string;
//         };
//     }
// }

export class ValidationData {
    static postValidate (req: Request, res: Response, next: NextFunction) {
        const data = {
            title: req.body.title,
            author: req.body.author,
            description: req.body.description
        }

        const {error, value} = PostschemaValidation.validate(data);

        if (error) {
            return res.status(400).send({
                message: error.message
            });
        }

        // req.post = value;
        next();
    }

    static userValidate (req: Request, res: Response, next: NextFunction) {
        const data = {
            email: req.body.email,
            password: req.body.password,
            name: req.body.name,
            phone: req.body.phone
        };

        const {error} = UserSchemaValidation.validate(data);

        if (error) {
            return res.status(400).send({
                message: error.message
            });
        }

        next();
    }
}

