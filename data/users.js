import bcrypt from 'bcryptjs';

export const users = [
	{
		active: true,
		address: 'Pham Van Dong, Ha Noi',
		avatar: '/images/avatar-default.jpg',
		email: 'admin@email.com',
		fullname: 'Admin',
		introduction: 'This is Admin user',
		password: bcrypt.hashSync('123456', 10),
		phone: '0123456789',
		isAdmin: true,
	},
	{
		active: true,
		address: 'Pham Van Dong, Ha Noi',
		avatar: '/images/avatar-default.jpg',
		email: 'minh@email.com',
		fullname: 'Minh Ha',
		introduction: 'This is a test user',
		password: bcrypt.hashSync('123456', 10),
		phone: '0123456789',
		isAdmin: false,
	},
	{
		active: true,
		address: 'Pham Van Dong, Ha Noi',
		avatar: '/images/avatar-default.jpg',
		email: 'John@email.com',
		fullname: 'John Doe',
		introduction: 'This is not an admin',
		password: bcrypt.hashSync('123456', 10),
		phone: '0987654321',
		isAdmin: false,
	},
];

export const userReviews = [
	{
		_id: 'hjfnxcn',
		content: 'This video is awesome',
		point: 5,
		userId: 'a',
		videoId: 'vid1',
		createdAt: '2021-10-23T02:08:12.636+00:00',
	},
	{
		_id: 'llisfo',
		content: 'Meh, not very cool',
		point: 3.5,
		userId: '1',
		videoId: 'vid1',
		createdAt: '2021-10-23T02:08:12.636+00:00',
	},
];

export const userComment = {};
