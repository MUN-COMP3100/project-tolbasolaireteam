import mongoose from "mongoose"
import bcrypt from "bcryptjs"

const USER_SCHEMA = new mongoose.Schema({
    firstName: {type: String, required: true},
    lastName: {type: String, required: true},
    email: {type: String, required: true},
    username: {type: String, required: true},
    password: {type: String, required: true},
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

// add method to save user to database


export const user = mongoose.model("user", USER_SCHEMA);




