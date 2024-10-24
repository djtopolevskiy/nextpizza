export const categories = [
	{
		name: 'Pizza',
	},
	{
		name: 'Burser',
	},
	{
		name: 'Ice-Cream',
	},
	{
		name: 'Juces',
	},
	{
		name: 'Freeze',
	},
	{
		name: 'Toys',
	},
]

export const ingredients = [
	{
		name: 'Popularity',
		price: 10,
		imageUrl: '/000D3A22FA54A81411E9AFA69C1FE796.png',
	},
	{
		name: 'Shampinjon',
		price: 30,
		imageUrl: '/000D3A22FA54A81411E9AFA67259A324.png',
	},
	{
		name: 'Capch',
		price: 40,
		imageUrl: '/000D3A39D824A82E11E9AFA5B328D35A.png',
	},
	{
		name: 'Tomato',
		price: 50,
		imageUrl: '/000D3A39D824A82E11E9AFA7AC1A1D67.png',
	},
	{
		name: 'Veggie',
		price: 60,
		imageUrl: '/000D3A39D824A82E11E9AFA61B9A8D61.png',
	},
	{
		name: 'Becon',
		price: 70,
		imageUrl: '/000D3A39D824A82E11E9AFA637AAB68F.png',
	},
	{
		name: 'SolTomato',
		price: 80,
		imageUrl: '/11ee95b6bfdf98fb88a113db92d7b3df.png',
	},
	{
		name: 'SolTomato2',
		price: 80,
		imageUrl: '/11ee95b6bfdf98fb88a113db92d7b3df.png',
	},
	{
		name: 'SolTomato3',
		price: 80,
		imageUrl: '/11ee95b6bfdf98fb88a113db92d7b3df.png',
	},
	{
		name: 'SolTomato4',
		price: 80,
		imageUrl: '/11ee95b6bfdf98fb88a113db92d7b3df.png',
	},
	{
		name: 'SolTomato5',
		price: 80,
		imageUrl: '/11ee95b6bfdf98fb88a113db92d7b3df.png',
	},
	{
		name: 'SolTomato6',
		price: 80,
		imageUrl: '/11ee95b6bfdf98fb88a113db92d7b3df.png',
	},
].map((obj, index) => ({ id: index + 1, ...obj }))

export const products = [
	{
		name: 'Кофе капуччино',
		imageUrl: '/kofe_capuccino.avif',
		categoryId: 2,
	},
	{
		name: 'Kofe kapuchino',
		imageUrl: '/kofe_capuccino.avif',
		categoryId: 2,
	},
	{
		name: 'Молочний коктейль',
		imageUrl: '/mol_kokteil.avif',
		categoryId: 2,
	},
	{
		name: 'Омлет з беконом',
		imageUrl: '/omlet_bekon.avif',
		categoryId: 2,
	},
	{
		name: 'Сирники',
		imageUrl: '/surniki.avif',
		categoryId: 2,
	},
]
