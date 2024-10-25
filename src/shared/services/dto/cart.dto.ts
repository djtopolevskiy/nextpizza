import {
	Cart,
	CartItem,
	Ingredient,
	Product,
	ProductItem,
} from "@prisma/client"

export type CartItemDTO = CartItem & {
	productitem: ProductItem & {
		product: Product
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
