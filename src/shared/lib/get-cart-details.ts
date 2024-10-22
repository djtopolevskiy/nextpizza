import { CartDTO } from '../services/dto/cart.dto'
import { calcCartItemTotalPrice } from './calc-cart-item-total-price'

export type CartStateItem = {
	id: number
	quantity: number
	name: string
	imageUrl: string
	price: number
	disabled?: boolean
	pizzaSize?: number | null
	pizzaType?: number | null
	ingredients: Array<{ name: string; price: number }>
}

interface ReturnProps {
	items: CartStateItem[]
	totalAmount: number
}
// функция которая получает информацию о корзине
export const getCartDetails = (data: CartDTO): ReturnProps => {
	console.log(data.items)
	const items = data.items.map(item => ({
		id: item.id,
		quantity: item.quantity,
		name: item.productItem.product.name,
		imageUrl: item.productItem?.product.imageUrl,
		price: calcCartItemTotalPrice(item),
		pizzaSize: item.productItem?.size,
		pizzaType: item.productItem?.pizzaType,
		disabled: false,
		ingredients: item.ingredients.map(ingredient => ({
			name: ingredient.name,
			price: ingredient.price,
		})),
	})) as CartStateItem[]
	// console.log(items)
	return {
		items,
		totalAmount: data.totalAmount,
	}
}
