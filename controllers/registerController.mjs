import { User } from '../model/User.mjs';
import bcrypt from 'bcrypt';

export const handleNewUser = async (req, res) => {
    const { firstName, lastName, pwd, email } = req.body;
    if (!firstName || !lastName || !pwd || !email) return res.status(400).json({ 'message': 'First and last name, email, and password are required.' });

    // check for duplicate usernames in the db
    const duplicate = await User.findOne({ email: email }).exec();
    if (duplicate) return res.sendStatus(409); //Conflict 

    try {
        //encrypt the password
        const hashedPwd = await bcrypt.hash(pwd, 10);

        //create and store the new user
        const result = await User.create({
            "firstName": firstName,
            "lastName": lastName,
            "password": hashedPwd,
            "email": email
        });

        console.log(result);

        res.status(201).json({ 'success': `New user ${email} created!` });
    } catch (err) {
        res.status(500).json({ 'message': err.message });
    }
}