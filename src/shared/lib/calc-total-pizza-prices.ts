import { Ingredient, ProductItem } from '@prisma/client'
import { PizzaSize, PizzaType } from '../constants/pizza'
/**
 *?функція для обрахунку загальної ціни
 **яка складається з ціни на певний варіант піци та кількості інгредієнтів
 * @param size
 * @param type
 * @param items
 * @param ingredientsinform
 * @param selectIngredients
 * @returns
 */
export const calcTotalPizzaPrices = (
	size: PizzaSize,
	type: PizzaType,
	items: ProductItem[],
	ingredientsinform: Ingredient[],
	selectIngredients: Set<number>
) => {
	const pizzaPrice =
		items.find(item => item.size === size && item.pizzaType === type)?.price ||
		0
	const totalIngredientsPrice = ingredientsinform
		.filter(ingredient => selectIngredients.has(ingredient.id))
		.reduce((acc, item) => acc + item.price, 0)

	return pizzaPrice + totalIngredientsPrice
}
