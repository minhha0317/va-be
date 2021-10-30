import mongoose from 'mongoose';
import bcrypt from 'bcryptjs';

const userSchema = mongoose.Schema(
	{
		active: { type: Boolean, required: true, default: true },
		address: { type: String },
		avatar: { type: String },
		email: { type: String, required: true },
		fullname: { type: String, required: true },
		introduction: { type: String },
		password: { type: String, required: true },
		phone: { type: String, required: true },
		isAdmin: { type: Boolean, required: true, default: false },
	},
	{ timestamps: true },
);

userSchema.methods.matchPassword = async function (enteredPassword) {
	return await bcrypt.compare(enteredPassword, this.password);
};

// Mongoose will run this before save new user
userSchema.pre('save', async function (next) {
	// Check when update user, if password is not change then hash
	// a new ones will prevent user from login
	if (!this.isModified('password')) {
		next();
	}

	const salt = await bycrypt.genSalt(10);
	this.password = await bycrypt.hash(this.password, salt);
});

const User = mongoose.model('User', userSchema);

export default User;