import express from 'express';
import {
	authUser,
	getTest,
	getUserProfile,
} from '../controllers/userController.js';
import { protect } from '../middlewares/authMiddleware.js';

const router = express.Router();

router.route('/login').post(authUser);
router.route('/test').get(getTest);
router.route('/profile').get(protect, getUserProfile);

export default router;
