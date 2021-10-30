import mongoose from 'mongoose';

const categorySchema = mongoose.Schema(
	{
		name: { type: String, require: true },
		description: { type: String, required: true },
	},
	{ timestamps: true },
);

export const Category = mongoose.model('Category', categorySchema);

const subCategorySchema = mongoose.Schema({
	name: { type: String, required: true },
	description: { type: String, required: true },
	categoryId: {
		type: mongoose.Schema.Types.ObjectId,
		required: true,
		ref: 'Category',
	},
});

export const SubCategory = mongoose.model('SubCategory', subCategorySchema);
