import {User} from "../models/user.model";
import bcrypt from "bcrypt";
import {twilioClient} from "../third_party_service/twilio";

export class UserService {
    static async signUp(data: any) {
        try {
            const {email, password, phone, name} = data;

            const holderUser = await User.findOne({email}).lean();

            if (holderUser) throw new Error('User already exists');

            const hashedPassword = await bcrypt.hash(password, 10);

            const newUser = await User.create({
                email, password: hashedPassword, phone, name
            });

            if (phone) {
                console.log('phone::', phone);
                const msg = 'ma xac nhan cua ban la: 36xds';

                twilioClient.messages
                    .create({
                        body: msg,
                        to: phone,
                        from: 'YOUR_TWILIO_PHONE_NUMBER'
                    })
                    .then((message) => {
                        console.log(`Message sent with SID: ${message.sid}`);
                        return ({ message: 'Message sent successfully' });
                    })
                    .catch((error) => {
                        console.log(error);
                        throw new Error ('Message sending failed');
                    });
            }

            return {
                code: 201,
                metadata: {
                    user: newUser
                }
            };
        } catch (e) {
            console.log(e);
        }
    }
}