import express from "express";
import mongoose from "mongoose";
import { myContainer } from "./container";
import { router } from "./routes/books";

const app = express();
const port = process.env.PORT || 3000;
const UrlDB = 'mongodb://mongo:27017/Library';  //  process.env.UrlDB;

app.use(express.json());
app.use('/books', router);

// mongoose.connect(process.env.MONGO_URI || 'mongodb://mongo:27017/Library')
//     .then( () => {
//         app.listen(port, () => {
//             console.log(`The server is running on http://localhost:${port}`);
//         });
//     } )
//     .catch( err => console.error(err) );

async function start(port: string | number, UrlDB: string) {
    try {
        await mongoose.connect(UrlDB);
        app.listen(port, () => {
            console.log(`The server is running on http://localhost:${port}`);
        });
    } catch (e) {
        console.error(e);
    }
}

start(port, UrlDB);