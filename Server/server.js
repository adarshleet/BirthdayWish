import express from 'express'
const app = express();
import cors from 'cors'
import { dbConnect } from './src/config/dbConnect.js';

dbConnect()

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use(
    cors({
    origin: 'http://localhost:5173',
    methods: 'GET,HEAD,PUT,PATCH,POST,DELETE',
    credentials: true, // If you need to send cookies or authentication headers
    })
);


app.listen(3000,()=>{
    console.log('server is running at 3000');
})