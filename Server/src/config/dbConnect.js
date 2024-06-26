import mongoose from "mongoose";

export const dbConnect = ()=>{
    try {
        mongoose.connect("mongodb+srv://adarshravi011:BirthdayWish@birthdaywishes.1kw6jol.mongodb.net/Birthday?retryWrites=true&w=majority&appName=BirthdayWishes")
        console.log('Connected to mongoDb');
    } catch (error) {
        console.log(error.message)
    }
}