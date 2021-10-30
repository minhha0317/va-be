import asycnHandler from 'express-async-handler';
import User from '../models/userModel.js';
import generateToken from '../utils/generateToken.js';

// @desc    Auth user & get token
// @route   POST /api/users/login
// @access  Public
export const authUser = asycnHandler(async (req, res) => {
	const { email, password } = req.body;
	const user = await User.findOne({ email });
	if (user && (await user.matchPassword(password))) {
		res.json({
			_id: user._id,
			fullname: user.fullname,
			isAdmin: user.isAdmin,
			token: generateToken(user._id),
		});
	} else {
		res.status(401);
		throw new Error('Invalid email or password');
	}
});

// @desc    Auth user & get token
// @route   POST /api/users/login
// @access  Private
export const getUserProfile = asycnHandler(async (req, res) => {
	const user = await User.findById(req.user._id);
	if (user) {
		res.json({
			_id: user._id,
			active: user.active,
			address: user.address,
			avatar: user.avatar,
			email: user.email,
			fullname: user.fullname,
			introduction: user.introduction,
			phone: user.phone,
			isAdmin: user.isAdmin,
		});
	} else {
		res.status(404);
		throw new Error('User not found!');
	}
	res.send('Success');
});

export const getTest = (req, res) => {
	res.send('OK');
}
