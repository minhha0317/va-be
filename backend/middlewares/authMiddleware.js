import asyncHandler from 'express-async-handler';
import jwt from 'jsonwebtoken';

export const protect = asyncHandler(async (req, res, next) => {
	let token;
	if (
		req.header.authorization &&
		req.header.authorization.startsWith('Bearer')
	) {
		try {
			token = req.headers.authorization.split(' ')[1];
			const decoded = jwt.verify(token, process.env.JWT_SECRET);
			req.user = await User.findById(decoded.id).select('-password');
			next();
		} catch (error) {
			res.status(401);
			console.error(error);
			throw new Error('Not authorized, token failed');
		}
	}

	if (!token) {
		res.status(401);
		throw new Error('Not authorized, no token');
	}
});
