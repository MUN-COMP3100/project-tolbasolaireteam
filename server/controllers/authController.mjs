import { User } from '../model/User.mjs';
import bcrypt from 'bcrypt';
import jwt from 'jsonwebtoken';

export const handleLogin = async (req, res) => {
    const { email, password } = req.body;
    if (!email || !password) return res.status(400).json({ 'message': 'Email and password are required.' });
    const foundUser = await User.findOne({ email: email }).exec();
    if (!foundUser) {
        console.log('User not found');
        return res.status(401).json({ 'message': 'User not found.'}); //Unauthorized 
    }
    // evaluate password 
    const match = await bcrypt.compare(password, foundUser.password);
    if (match) {
        const roles = Object.values(foundUser.roles).filter(Boolean);
        // create JWTs
        const accessToken = jwt.sign(
            {
                "UserInfo": {
                    "email": foundUser.email,
                    "roles": roles
                }
            },
            process.env.ACCESS_TOKEN_SECRET,
            { expiresIn: '1d' }
        );
        const refreshToken = jwt.sign(
            { "email": foundUser.email },
            process.env.REFRESH_TOKEN_SECRET,
            { expiresIn: '1d' }
        );
        // Saving refreshToken with current user
        foundUser.refreshToken = refreshToken;
        const result = await foundUser.save();
        console.log(result);
        console.log(roles);

        // Creates Secure Cookie with refresh token ***Remove secure: true for testing***
        res.cookie('jwt', refreshToken, { httpOnly: true, sameSite: 'None', secure: true ,maxAge: 24 * 60 * 60 * 1000 });

        // Send authorization roles and access token to user
        res.json({ roles, accessToken });

    } else {
        console.log('Password does not match');
        res.status(401).json({ 'message': 'Password does not match.' });
    }
}