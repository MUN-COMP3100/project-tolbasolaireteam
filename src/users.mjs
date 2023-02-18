import mongoose from "mongoose"
import bcrypt from "bcryptjs"

const USER_SCHEMA = new mongoose.Schema({
    firstName: String,
    lastName: String,
    email: String,
    username: String,
    password: String
})

// an async/await mongoose pre middleware function with a try/catch block to salt and hash the password before saving the user to the database
USER_SCHEMA.pre("save", async function(next) {
    try {
        const salt = await bcrypt.genSalt(10)
        const hashedPassword = await bcrypt.hash(this.password, salt)
        this.password = hashedPassword
        next()
    } catch (error) {
        next(error)
    }
})

// an async/await mongoose method with a try/catch block to compare the user's password with the hashed password in the database
USER_SCHEMA.methods.isValidPassword = async function(newPassword) {
    try {
        return await bcrypt.compare(newPassword, this.password)
    } catch (error) {
        throw new Error(error)
    }
}




