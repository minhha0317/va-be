import mongoose from 'mongoose';

const userReviewSchema = mongoose.Schema(
	{
		content: { type: String, required: true },
		point: { type: String, required: true },
		userId: { type: mongoose.Schema.Types.ObjectId, required: true },
		videoId: { type: mongoose.Schema.Types.ObjectId, required: true },
	},
	{ timestamps: true },
);

const UserReviewModel = mongoose.model('UserReviewModel', userReviewSchema);

export default UserReviewModel;
