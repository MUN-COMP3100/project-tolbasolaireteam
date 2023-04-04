import { User } from '../model/User.mjs';
import { validate_fields } from '../config/validateFields.mjs';
import bcrypt from 'bcrypt';

export const handleNewUser = async (req, res) => {
    const { firstName, lastName, password, email } = req.body;
    
    if (!firstName || !lastName || !password || !email) return res.status(400).json({ 'message': 'First and last name, email, and password are required.' });
    // if (!firstName || !lastName || !password || !email) { return res.json({ 'message': 'First and last name, email, and password are required.' }); }

    let isValid = await validate_fields(firstName, lastName, email);
    if (isValid) {
        console.log('Valid fields.');
        // check for duplicate usernames in the db
        const duplicate = await User.findOne({ email: email }).exec();
        if (duplicate) return res.status(409).json({ 'message': 'Email is already registered.'}); //Conflict 
        // if (duplicate) return res.json({ 'message': 'Email is already registered.'});

        try {
            //encrypt the password
            const hashedPwd = await bcrypt.hash(password, 10);
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

            res.status(201).json({ 'success': `New user ${email} created!` });
            // res.json({ 'success': `New user ${email} created!` });
        } catch (err) {
            console.log(err);
            res.status(500).json({ 'message': err.message });
        }
    } 
    else {
        res.json({ 'message': 'Invalid fields.' });
    }
}