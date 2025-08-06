import express from "express"
import { login_contoller, sign_up_contoller } from "../Controller/authController.js"

const authRoute = express.Router()

authRoute.post("/login", login_contoller)
authRoute.post("/signup" , sign_up_contoller)

export default authRoute