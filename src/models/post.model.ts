//importing modules
import  {Schema, model,} from 'mongoose'
import {IPosts} from "../interface/post.interface";

const postSchema = new Schema<IPosts>({
    title: {
        type: String,
    },
    description: {
        type: String,
        required: true
    },
    author: {
        type: String,
        required: true
    },
})

export const Post = model<IPosts>('Post', postSchema);
