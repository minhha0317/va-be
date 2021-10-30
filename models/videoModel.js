import mongoose from 'mongoose';

const videoSchema = mongoose.Schema(
	{
		description: {
			type: String,
		},
		format: {
			type: String,
		},
		name: {
			type: String,
			required: true,
		},
		size: {
			type: String,
			required: true,
		},
		status: {
			type: Boolean,
			default: true,
		},
		thumbnail: {
			type: String,
		},
		url: {
			type: String,
			required: true,
		},
		subCategoryId: {
			type: mongoose.Schema.Types.ObjectId,
			required: true,
			ref: 'SubCategory',
		},
	},
	{ timestamps: true },
);

const Video = mongoose.model('Video', videoSchema);
export default Video;
