

export const login_contoller = (req, res) => {
    try {

    } catch (error) {
        console.log(error.message, "error")
    }
}
export const sign_up_contoller = (req, res) => {
    try {
        console.log(req.body, "body")
        res.json({
            message: "you have created your account",
            data: "response",
            status: true
        })

    } catch (error) {
        console.log(error.message, "error")
        res.json({
            message: error.message || "Something went wrong",
            status: false
        })
    }
}