import {
	Cart,
	CartItem,
	Ingredient,
	Product,
	ProductItem,
} from '@prisma/client'

export type CartItemDTO = CartItem[] & {
	id: CartItem['id']
	quantity: CartItem['quantity']
	productItem: CartItem[] & {
		product: Product[] & {
			name: Product['name']
			imageUrl: Product['imageUrl']
		}
		size: ProductItem['size']
		pizzaType: ProductItem['pizzaType']
	}
	ingredients: Ingredient[]
}

export interface CartDTO extends Cart {
	items: CartItemDTO[]
}

export interface CreateCartItemValues {
	productItemId: number
	ingredients?: number[]
}
