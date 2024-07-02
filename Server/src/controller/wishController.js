import express from 'express'
import { multerMid } from '../middlewares/multerMid.js'
import Wishes from '../model/wishesModel.js'

export const wishRoute = express.Router()

wishRoute.post('/createWish',multerMid.single('image'),async (req,res)=>{
    try {
        console.log(req.body, req.file);
        const wishDetails = req.body;
        wishDetails.image = req.file; // Store the path to the uploaded image
        
        //creating params unique code
        const number = Math.floor(1000 + Math.random() * 9000);
        wishDetails.params = wishDetails.name.toLowerCase().replace(/\s+/g, '') + number

        const newWish = new Wishes(wishDetails);
        const response = await newWish.save();
        console.log(response);
    
        res.status(201).json({ message: 'Wish created successfully', wish: response });
      } catch (error) {
        console.error(error);
        res.status(500).json({ message: 'Internal error' });
      }

})


wishRoute.get('/getWish',async(req,res)=>{
    try {
        const id = req.query.id
        console.log(id)
        const wishes = await Wishes.findOne({params:id})
        res.status(201).json({ message: 'Wish', wish: wishes });
    } catch (error) {
        res.status(500).json({ message: 'Internal error' });
    }
})