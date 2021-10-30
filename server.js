import express from 'express';
import dotenv from 'dotenv';
import colors from 'colors';

import connectDb from './config/db.js';
import userRoutes from './routes/userRoutes.js';

dotenv.config();
connectDb();
const app = express();

app.use(express.json());
app.use('/api/users', userRoutes);

const PORT = process.env.PORT || 5000;
app.listen(
	PORT,
	console.log(
		`Server is running in ${process.env.NODE_ENV} mode on port ${PORT}`.green
			.underline,
	),
);