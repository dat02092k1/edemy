//importing modules
import  {Schema, model,} from 'mongoose'
import {IUsers} from "../interface/user.interface";

const userSchema = new Schema<IUsers>({
    email: {
        type: String,
        required: true
    },
    password: {
        type: String,
        required: true
    },
    phone: {
        type: String,
    },
    name: {
        type: String,
        required: true
    }
})

export const User = model<IUsers>('User', userSchema);
