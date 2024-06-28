import express from 'express'
import { multerMid } from '../middlewares/multerMid.js'

export const wishRoute = express.Router()

wishRoute.post('/createWish',multerMid.single('image'),(req,res)=>{
    console.log(req.body)
})