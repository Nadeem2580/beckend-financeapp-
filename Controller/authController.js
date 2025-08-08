import userModel from "../Model/userSchema.js"
import bcrypt from "bcryptjs";
import jwt from "jsonwebtoken";
import applyLoanModel from "../Model/applyLoan.js";
export const login_contoller = async (req, res) => {
    try {

        const body = req.body;
        const userExist = await userModel.findOne({ email: body.email })
        if (!userExist) {
            return res.status(409).json({
                message: "user not found",
                status: false,
            })
        }
        const comParePassword = await bcrypt.compare(body.password, userExist.password)
        if (!comParePassword) {
            return res.status(409).json({
                message: "email or password is not valid",
                status: false,
            })
        }
        const privateKey = process.env.Private_Key
        const token = jwt.sign({ id: userExist._id }, privateKey)
        res.status(201).json({
            message: "user have logedin successfully",
            status: true,
            data: userExist,
            token: token
        })


    } catch (error) {
        res.status(500).json({
            message: error.message,
            status: false

        })
    }
}
export const sign_up_contoller = async (req, res) => {
    try {

        const body = req.body

        const isExistEmail = await userModel.findOne({ email: body.email })

        if (isExistEmail) {
            return res.status(409).json({
                message: "User already exists",
                status: false
            });
        }

        const hashPassword = await bcrypt.hash(body.password, 10)

        const userObj = {
            ...body,
            password: hashPassword
        }

        const createUser = await userModel.create(userObj)

        res.status(201).json({
            message: "You have created your account",
            data: createUser,
            status: true
        });

    } catch (error) {
        res.status(500).json({
            message: error.message || "Something went wrong",
            status: false
        })
    }
}

export const auth_Check_Controller = (req, res) => {
    try {
        const user = req.user;
        res.status(200).json({
            message: "Authorized",
            status: true,
            user: user,
        });
    } catch (error) {
        res.status(500).json({
            message: error.message || "Something went wrong",
            status: false,
        });
    }
};

export const apply_loan_controller = async(req, res) => {
    try {

        const body = req.body
        console.log(body, "body")
        
      const response =  await applyLoanModel.create(body)

        res.status(200).json({
            message: "You have applyied for loan successfully",
            status: true,
            data: response
        })
    } catch (error) {
        res.status(500).json({
            message: error.message || "Something went wrong",
            status: false,
        });
    }
}