import mongoose from 'mongoose';
import dotevn from 'dotenv';
import colors from 'colors';
import { users } from './data/users.js';
import { categories, subCategory, videos } from './data/videos.js';
import User from './models/userModel.js';
import { Category, SubCategory } from './models/categoryModel.js';
import Video from './models/videoModel.js';
import connectDb from './config/db.js';

dotevn.config();
connectDb();

const importData = async () => {
	try {
		await User.deleteMany();
		await Category.deleteMany();
		await SubCategory.deleteMany();
		await Video.deleteMany();

		await User.insertMany(users);
		await Category.insertMany(categories);
		await SubCategory.insertMany(subCategory);
		await Video.insertMany(videos);

		console.log('Data Imported!'.green.inverse);
		process.exit();
	} catch (error) {
		console.error(`Error: ${error}`.red.inverse);
		process.exit(1);
	}
};

const destroyData = async () => {
	try {
		await User.deleteMany();
		await Category.deleteMany();
		console.log('Data Destroyed!'.green.inverse);
		process.exit();
	} catch (error) {
		console.error(`Error: ${error}`.red.inverse);
		process.exit(1);
	}
};

if (process.argv[2] === '-d') {
	destroyData();
} else {
	importData();
}
