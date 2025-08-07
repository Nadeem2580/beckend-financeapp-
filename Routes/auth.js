import express from "express"
import { apply_loan_controller, auth_Check_Controller, login_contoller, sign_up_contoller } from "../Controller/authController.js"
import authMiddleware from "../MiddleWare/authMiddleWare.js"

const authRoute = express.Router()

authRoute.post("/login", login_contoller)
authRoute.post("/signup", sign_up_contoller)
authRoute.post("/apply-loan", authMiddleware, apply_loan_controller)

export default authRoute