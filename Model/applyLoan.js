import mongoose from "mongoose";

const loanSchema = new mongoose.Schema({
    fullName: { type: String, required: true },
    email: { type: String, required: true },
    cnic: { type: String, required: true },
    phoneNumber: { type: String, required: true },
    address: { type: String, required: true },
    city: { type: String, required: true },
    loanCategory: { type: String, required: true },
    loanSubCategory: { type: String, required: true },
    loanAmount: { type: String, required: true },
    initalDeposite: { type: String, required: true },
    loanPeriod: { type: String, required: true },
    monthlyIncome: { type: String, required: true },
    employmentStatus: { type: String, required: true },
    purposeOfLoan: { type: String, required: true },
    guarantor1FullName: { type: String, required: true },
    guarantor1Email: { type: String, required: true },
    guarantor1Cnic: { type: String, required: true },
    guarantor1Location: { type: String, required: true },
    guarantor2FullName: { type: String, required: true },
    guarantor2Email: { type: String, required: true },
    guarantor2Cnic: { type: String, required: true },
    guarantor2Location: { type: String, required: true },

    createdAt: { type: Date, default: Date.now() },
})

const applyLoanModel = mongoose.model("Users", loanSchema)

export default applyLoanModel