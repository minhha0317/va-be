import asyncHandler from 'express-async-handler';
import Video from '../models/videoModel.js';

// @desc    Get all videos
// @route   GET /api/videos
// @access  Public
export const getPublicVideos = asyncHandler(async (req, res) => {
	const videos = await Video.find({});
	res.json(videos);
});

// @desc    Get public video by id
// @route   GET /api/videos/
// @access  Public
export const getPublicVideoById = asyncHandler(async (req, res) => {
	const videoId = req.params.id;
	const video = await Video.findById(videoId);
	if (video) {
		res.json(video);
	} else {
		res.status(404);
		throw new Error('Product not found');
	}
});
