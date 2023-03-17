import { User } from '../model/User.mjs';

export const getAllUsers = async (req, res) => {
    const users = await User.find();
    if (!users) return res.status(204).json({ 'message': 'No users found' });
    res.json(users);
}

export const deleteUser = async (req, res) => {
    // if (!req?.body?.id) return res.status(400).json({ "message": 'User ID required' });
    if (!req?.body?.email) return res.json({ "message": 'User ID required' });
    const user = await User.findOne({ email: req.body.email }).exec();
    if (!user) {
        return res.status(204).json({ 'message': `User email ${req.body.email} not found` });
    }
    const result = await user.deleteOne();
    res.json(result);
}

export const getUser = async (req, res) => {
    // if (!req?.params?.id) return res.status(400).json({ "message": 'User ID required' });
    if (!req?.params?.id) return res.json({ "message": 'User ID required' });
    const user = await User.findOne({ _id: req.params.id }).exec();
    if (!user) {
        return res.status(204).json({ 'message': `User ID ${req.params.id} not found` });
    }
    res.json(user);
}