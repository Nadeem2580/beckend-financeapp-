import mongoose from "mongoose";
import dotenv from "dotenv"


export const dbConnect = () => {
    const URI = process.env.URI || null
    mongoose.connect(URI)
        .then(() => {
            console.log("Mongo db connected")
        })
        .catch((error) => {
            console.log(error.message, "error")
        })
}