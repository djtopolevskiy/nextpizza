export const categories = [
	{
		name: "Пиццы",
	},
	{
		name: "Завтрак",
	},
	{
		name: "Закуски",
	},
	{
		name: "Коктейли",
	},
	{
		name: "Напитки",
	},
]

export const _ingredients = [
	{
		name: "Сырный бортик",
		price: 179,
		imageUrl: "/ingr_vatchina.png",
	},
	{
		name: "Сливочная моцарелла",
		price: 79,
		imageUrl: "/ingr_vatchina.png",
	},
	{
		name: "Сыры чеддер и пармезан",
		price: 79,
		imageUrl: "/ingr_vatchina.png",
	},
	{
		name: "Острый перец халапеньо",
		price: 59,
		imageUrl: "/ingr_vatchina.png",
	},
	{
		name: "Нежный цыпленок",
		price: 79,
		imageUrl: "/ingr_vatchina.png",
	},
	{
		name: "Шампиньоны",
		price: 59,
		imageUrl: "/ingr_shampinion.png",
	},
	{
		name: "Ветчина",
		price: 79,
		imageUrl: "/ingr_vatchina.png",
	},
	{
		name: "Пикантная пепперони",
		price: 79,
		imageUrl: "/pizza_pikant_peperoni.jpg",
	},
	{
		name: "Острая чоризо",
		price: 79,
		imageUrl: "/ostraya_chorizo.jpg",
	},
	{
		name: "Маринованные огурчики",
		price: 59,
		imageUrl: "/ingr_vatchina.png",
	},
	{
		name: "Свежие томаты",
		price: 59,
		imageUrl: "/ingr_vatchina.png",
	},
	{
		name: "Красный лук",
		price: 59,
		imageUrl: "/ingr_vatchina.png",
	},
	{
		name: "Сочные ананасы",
		price: 59,
		imageUrl: "/ingr_vatchina.png",
	},
	{
		name: "Итальянские травы",
		price: 39,
		imageUrl: "/ingr_vatchina.png",
	},
	{
		name: "Сладкий перец",
		price: 59,
		imageUrl: "/ingr_vatchina.png",
	},
	{
		name: "Кубики брынзы",
		price: 79,
		imageUrl: "/ingr_vatchina.png",
	},
	{
		name: "Митболы",
		price: 79,
		imageUrl: "/ingr_vatchina.png",
	},
].map((obj, index) => ({ id: index + 1, ...obj }))

export const products = [
	{
		name: "Омлет с ветчиной и грибами",
		imageUrl: "/ingr_vatchina.png",
		categoryId: 2,
	},
	{
		name: "Омлет с пепперони",
		imageUrl: "/ingr_vatchina.png",
		categoryId: 2,
	},
	{
		name: "Кофе Латте",
		imageUrl: "/ingr_vatchina.png",
		categoryId: 2,
	},
	{
		name: "Дэнвич ветчина и сыр",
		imageUrl: "/ingr_vatchina.png",
		categoryId: 3,
	},
	{
		name: "Куриные наггетсы",
		imageUrl: "/ingr_vatchina.png",
		categoryId: 3,
	},
	{
		name: "Картофель из печи с соусом 🌱",
		imageUrl: "/surniki.avif",
		categoryId: 3,
	},
	{
		name: "Додстер",
		imageUrl: "/omlet_bekon.avif",
		categoryId: 3,
	},
	{
		name: "Острый Додстер 🌶️🌶️",
		imageUrl: "/mol_kokteil.avif",
		categoryId: 3,
	},
	{
		name: "Банановый молочный коктейль",
		imageUrl: "/mol_kokteil.avif",
		categoryId: 4,
	},
	{
		name: "Карамельное яблоко молочный коктейль",
		imageUrl: "/mol_kokteil.avif",
		categoryId: 4,
	},
	{
		name: "Молочный коктейль с печеньем Орео",
		imageUrl: "/mol_kokteil.avif",
		categoryId: 4,
	},
	{
		name: "Классический молочный коктейль 👶",
		imageUrl: "/mol_kokteil.avif",
		categoryId: 4,
	},
	{
		name: "Ирландский Капучино",
		imageUrl: "/mol_kokteil.avif",
		categoryId: 5,
	},
	{
		name: "Кофе Карамельный капучино",
		imageUrl: "/mol_kokteil.avif",
		categoryId: 5,
	},
	{
		name: "Кофе Кокосовый латте",
		imageUrl: "/mol_kokteil.avif",
		categoryId: 5,
	},
	{
		name: "Кофе Американо",
		imageUrl: "/mol_kokteil.avif",
		categoryId: 5,
	},
	{
		name: "Кофе Латте",
		imageUrl: "/mol_kokteil.avif",
		categoryId: 5,
	},
]
