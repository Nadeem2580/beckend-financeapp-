import mongoose from "mongoose";

const schema = new mongoose.Schema({
    fullName: { type: String, required: true },
    email: { type: String, required: true },
    password: { type: String, required: true },
      createdAt: { type: Date, default: Date.now() },
})

const userModel = mongoose.model("user", schema)

export default userModel