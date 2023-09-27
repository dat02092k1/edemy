import {User} from "../models/user.model";
import bcrypt from "bcrypt";

export class UserService {
    static async signUp(data: any) {
        try {
            const { email, password, phone, name } = data;

            const holderUser = await User.findOne({ email }).lean();

            if (holderUser) throw new Error('User already exists');

            const hashedPassword = await bcrypt.hash(password, 10);

            const newUser = await User.create({
                email, password: hashedPassword, phone, name
            });

            return {
                code: 201,
                metadata: {
                    user: newUser
                }
            };
        }
        catch (e) {
            console.log(e);
        }
    }
}