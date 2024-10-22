import { Ingredient, ProductItem } from '@prisma/client'
import { mapPizzaType, PizzaSize, PizzaType } from '../constants/pizza'
import { calcTotalPizzaPrices } from './calc-total-pizza-prices'

export const getPizzaDetails = (
	size: PizzaSize,
	type: PizzaType,
	items: ProductItem[],
	ingredientsinform: Ingredient[],
	selectIngredients: Set<number>
) => {
	const totalPrice = calcTotalPizzaPrices(
		size,
		type,
		items,
		ingredientsinform,
		selectIngredients
	)
	const textDetails = `${size} sm, ${mapPizzaType[type]} pizza, ingredients (${ingredientsinform.length})`

	return { totalPrice, textDetails }
}
