import { User } from '../model/User.mjs';
import { validate_fields } from '../config/validateFields.mjs';
import bcrypt from 'bcrypt';

export const handleNewUser = async (req, res) => {
    const { firstName, lastName, pwd, email } = req.body;
    if (!firstName || !lastName || !pwd || !email) return res.status(400).json({ 'message': 'First and last name, email, and password are required.' });

    let isValid = await validate_fields(firstName, lastName, email);
    if (isValid) {

        // check for duplicate usernames in the db
        const duplicate = await User.findOne({ email: email }).exec();
        if (duplicate) return res.status(409).json({ 'message': 'Email is already registered.'}); //Conflict 

        try {
            //encrypt the password
            const hashedPwd = await bcrypt.hash(pwd, 10);

            //create and store the new user
            const result = await User.create({
                "firstName": firstName,
                "lastName": lastName,
                "password": hashedPwd,
                "email": email,
                // "roles": {
                //     "User": 2001
                // }
            });

            console.log(result);

            res.status(201).json({ 'success': `New user ${email} created!` });
        } catch (err) {
            res.status(500).json({ 'message': err.message });
        }
    } 
    else {
        res.json({ 'message': 'Invalid fields.' });
    }
}