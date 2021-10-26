import express from 'express';
import dotenv from 'dotenv';

import connectDb from './config/db.js';

dotenv.config();
connectDb();
const app = express();

const PORT = process.env.PORT || 5000;
app.listen(
	PORT,
	console.log(
		`Server is running in ${process.env.NODE_ENV} mode on port ${PORT}`.green
			.underline,
	),
);
