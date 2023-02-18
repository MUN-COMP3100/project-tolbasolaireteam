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
        const user = this;
        if (!user.isModified("password") || !user.isNew) { return next(); }
        const salt = await bcrypt.genSalt(10);
        const hashedPassword = await bcrypt.hash(user.password, salt);
        console.log(hashedPassword);
        user.password = hashedPassword;
        next();
    } catch (error) {
        next(error);
    }
})

// an async/await mongoose method with a try/catch block to compare the user's password with the hashed password in the database
USER_SCHEMA.methods.isValidPassword = async function(newPassword) {
    try {
        return await bcrypt.compare(newPassword, this.password);
    } catch (error) {
        throw new Error(error);
    }
}


export const USERS = mongoose.model("users", USER_SCHEMA);




