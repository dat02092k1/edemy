//importing modules
import dotenv from 'dotenv';
import mongoose from 'mongoose';
import {ConnectionOptions} from "mongodb";

dotenv.config();

// import from env
const username = process.env.USERNAME_DB;
const password = process.env.PASSWORD_DB;
const dbName = process.env.DB_NAME;

const connectionString = `mongodb+srv://${username}:${password}@${dbName}.dhvdptc.mongodb.net/`;

// set options
const options = {
    autoIndex: false, // Don't build indexes
    maxPoolSize: 10, // Maintain up to 10 socket connections
    serverSelectionTimeoutMS: 5000, // Keep trying to send operations for 5 seconds
    socketTimeoutMS: 45000, // Close sockets after 45 seconds of inactivity
    family: 4 // Use IPv4, skip trying IPv6
};

// connect to mongodb
export const db = mongoose.connect(connectionString)
    .then(res => {
        if(res){
            console.log(`Database connection succeffully to ${dbName}`)
        }

    }).catch(err => {
        console.log(err)
    })