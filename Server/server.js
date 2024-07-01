import express from 'express'
import cors from 'cors'
import { dbConnect } from './src/config/dbConnect.js';
import { wishRoute } from './src/controller/wishController.js';
import path,{ dirname }  from 'path'
import { fileURLToPath } from 'url';
// import ddd from '../Server/src/public/images'

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

dbConnect()

const app = express();


app.use(
    cors({
    origin: 'http://localhost:5000',
    credentials: true, // If you need to send cookies or authentication headers
    })
);

app.use('/images', express.static(path.join(__dirname, '../Server/src/public/images')));

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use('/',wishRoute)


app.listen(3000,()=>{
    console.log('server is running at 3000');
})