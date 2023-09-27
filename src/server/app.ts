import express from 'express';
import {db} from '../config/db.config';
import {router} from "../routes/route";

const app = express();

// middlewares
app.use(express.json());
app.use(express.urlencoded({extended: true}));

// routes
app.use('/', router);
// define port
const port = process.env.PORT || 8000;

// db connect then connect server
db.then(() => {
    app.listen(port, () => {
        console.log(`Server is running on port ${port}`);
    })
})