import express from "express"
import cors from "cors"
import dotenv from "dotenv"
import { dbConnect } from "./Config/db.js"
import authRoute from "./Routes/auth.js"

const app = express()
app.use(cors())
app.use(express.json())
app.use(express.urlencoded({ extended: true }))
dotenv.config()
const PORT = process.env.PORT || 5000
dbConnect()




app.use("/api/auth", authRoute)
app.use("/", (req, res) => res.send("Server up"))




app.listen(PORT, () => console.log(`Server running on the port ${PORT}`))

