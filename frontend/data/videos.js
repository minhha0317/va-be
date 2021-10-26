export const videos = [
	{
		_id: 'vid1',
		description:
			'We were lucky to be one of the first to ride the new 2022 Triumph Speed Triple RS',
		format: '.mp4',
		name: '2021 Triumph Speed Triple 1200 RS First Ride (On Track)',
		size: '50kb',
		status: true,
		thumbnail: '',
		url: 'https://www.youtube.com/embed/SGJMCBMM7Ec',
		subCategoryId: 'bike',
	},
	{
		_id: 'vid2',
		description:
			'Driving an F1 car is much more than just steering, braking and accelerating...',
		format: '.mp4',
		name: 'What is an F1 Driver’s Workload Like During a Lap?',
		size: '50kb',
		status: true,
		thumbnail: '',
		url: 'https://www.youtube.com/embed/Uj4s08jpqXc',
		subCategoryId: 'f1',
	},
	{
		_id: 'vid3',
		description: "Kyoto's Jam",
		format: '.mp4',
		name: 'Mateus Asato - Kyoto Jam',
		size: '50kb',
		status: true,
		thumbnail: '',
		url: 'https://www.youtube.com/embed/rrOtI00U6x4',
		subCategoryId: 'guitar',
	},
	{
		_id: 'vid4',
		description:
			'Sensacional! A Rádio Alpha FM podia colocar essa versão no repertório. Hehehe',
		format: '.mp4',
		name: "Don't Dream It's Over",
		size: '50kb',
		status: true,
		thumbnail: '',
		url: 'https://www.youtube.com/embed/pTt04A_Gph4',
		subCategoryId: 'guitar',
	},
];

export const categories = [
	{ _id: 'race', name: 'Race', description: 'Videos related to Racing' },
	{ _id: 'music', name: 'Music', description: 'Music video' },
];

export const subCategory = [
	{
		_id: 'f1',
		name: 'F1',
		description: 'Racing F1',
		categoryId: 'race',
	},
	{
		_id: 'bike',
		name: 'bike',
		description: 'Racing bikes',
		categoryId: 'race',
	},
	{
		_id: 'guitar',
		name: 'Guitar',
		description: 'Category of music related to guitars',
		categoryId: 'music',
	},
];
