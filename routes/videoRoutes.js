import express from 'express';
import { getPublicVideos, getPublicVideoById } from '../controllers/videoController.js';

const router = express.Router();

router.route('/').get(getPublicVideos);
router.route('/:id').get(getPublicVideoById);

export default router;
