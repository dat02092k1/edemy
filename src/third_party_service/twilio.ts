import twilio from 'twilio';
import dotenv from 'dotenv';
dotenv.config();

const accountSid = process.env.Account_SID;
const authToken = process.env.SID_Token;

export const twilioClient = twilio(accountSid, authToken);

