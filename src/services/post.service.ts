import {Post} from "../models/post.model";

export class PostService {
    static async createPost(data: any) {
        try {
            const newPost = await Post.create(data);
            return newPost;
        }
        catch (e) {
            console.log(e);
        }
    }
}