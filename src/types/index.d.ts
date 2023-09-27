import * as express from 'express';
import {IPosts} from "../interface/post.interface";

declare global {
    namespace Express {
        interface Request {
            post?: IPosts;
        }
    }
}